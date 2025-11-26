
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { authService } from '../services/authService';

const OAuthCallback: React.FC = () => {
  const [status, setStatus] = useState('Verifying...');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const verify = async () => {
      const query = new URLSearchParams(location.search);
      const code = query.get('code');

      if (!code) {
        setStatus('Error: No authorization code found.');
        return;
      }

      try {
        const success = await authService.handleOAuthCallback(code);
        if (success) {
          setStatus('Successfully logged in! Redirecting...');
          // Redirect to a protected route, e.g., the editor
          navigate('/editor');
        } else {
          setStatus('Login failed. You might not be the authorized user.');
           setTimeout(() => navigate('/login'), 3000);
        }
      } catch (error) {
        setStatus(`An error occurred: ${error instanceof Error ? error.message : String(error)}`);
      }
    };

    verify();
  }, [location, navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
      <div className="w-8 h-8 border-4 border-gray-200 border-t-primary-600 rounded-full animate-spin mb-4"></div>
      <h1 className="text-xl font-bold mb-2">{status}</h1>
      <p className="text-gray-500">Please wait while we complete the authentication process.</p>
    </div>
  );
};

export default OAuthCallback;
