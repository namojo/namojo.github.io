
const TOKEN_KEY = 'gh_token';
const USER_KEY = 'gh_user';
const ALLOWED_USER = 'namojo';
const CLIENT_ID = 'Ov23lieqVqNNYARIAcQe'; // Replace with your GitHub OAuth App's Client ID

interface GitHubUser {
  login: string;
  avatar_url: string;
  name: string;
}

// Simple proxy to exchange the code for a token without exposing the client secret
const exchangeCodeForToken = async (code: string): Promise<string | null> => {
  try {
    const response = await fetch(`https://namojo-github-oauth.deno.dev/exchange?code=${code}`);
    if (!response.ok) return null;
    const data = await response.json();
    return data.token;
  } catch (error) {
    console.error('Token exchange failed:', error);
    return null;
  }
};

export const authService = {
  // Redirect to GitHub's authorization page
  redirectToGitHub: () => {
    const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user:read`;
    window.location.href = githubAuthUrl;
  },

  // Handle the OAuth callback
  handleOAuthCallback: async (code: string): Promise<boolean> => {
    const token = await exchangeCodeForToken(code);
    if (!token) return false;

    // Verify token and user
    try {
      const response = await fetch('https://api.github.com/user', {
        headers: { Authorization: `token ${token}` },
      });

      if (!response.ok) return false;

      const user: GitHubUser = await response.json();
      if (user.login.toLowerCase() === ALLOWED_USER.toLowerCase()) {
        localStorage.setItem(TOKEN_KEY, token);
        localStorage.setItem(USER_KEY, JSON.stringify(user));
        return true;
      }
      return false;
    } catch (error) {
      console.error('User verification failed', error);
      return false;
    }
  },

  logout: () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
  },

  isAdmin: (): boolean => !!localStorage.getItem(TOKEN_KEY),

  getToken: (): string | null => localStorage.getItem(TOKEN_KEY),
  
  getUser: (): GitHubUser | null => {
    const u = localStorage.getItem(USER_KEY);
    return u ? JSON.parse(u) : null;
  }
};
