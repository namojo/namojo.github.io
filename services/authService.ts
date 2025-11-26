
const TOKEN_KEY = 'gh_token';
const USER_KEY = 'gh_user';
const ALLOWED_USER = 'namojo';
const CLIENT_ID = import.meta.env.VITE_GITHUB_CLIENT_ID;

interface GitHubUser {
  login: string;
  avatar_url: string;
  name: string;
}

const exchangeCodeForToken = async (code: string): Promise<string> => {
  try {
    const response = await fetch(`https://namojo-github-oauth.deno.dev/exchange?code=${code}`);
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Token exchange failed with status ${response.status}: ${errorText}`);
    }
    const data = await response.json();
    if (!data.token) {
        throw new Error('Token not found in proxy response.');
    }
    return data.token;
  } catch (error) {
    console.error('Token exchange request failed:', error);
    throw new Error(`Failed to connect to the authentication proxy. ${error instanceof Error ? error.message : ''}`);
  }
};

export const authService = {
  redirectToGitHub: () => {
    const redirectUri = 'https://namojo.github.io/#/oauth/callback';
    const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user:read&redirect_uri=${encodeURIComponent(redirectUri)}`;
    window.location.href = githubAuthUrl;
  },

  handleOAuthCallback: async (code: string): Promise<void> => {
    const token = await exchangeCodeForToken(code);

    let user: GitHubUser;
    try {
      const response = await fetch('https://api.github.com/user', {
        headers: { Authorization: `token ${token}` },
      });

      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status}`);
      }
      user = await response.json();
    } catch (error) {
        console.error('User verification failed', error);
        throw new Error(`Failed to verify user with GitHub. ${error instanceof Error ? error.message : ''}`);
    }

    if (user.login.toLowerCase() !== ALLOWED_USER.toLowerCase()) {
        throw new Error(`Login failed: User '${user.login}' is not the authorized admin.`);
    }

    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(USER_KEY, JSON.stringify(user));
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
