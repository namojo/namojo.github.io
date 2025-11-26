
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authService } from '../services/authService';

const OAuthCallback: React.FC = () => {
  const [status, setStatus] = useState('Verifying your identity...');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const verify = async () => {
      // With HashRouter, the search params are in the hash part of the URL.
      const hash = window.location.hash;
      const search = hash.includes('?') ? hash.substring(hash.indexOf('?')) : '';
      const query = new URLSearchParams(search);

      const code = query.get('code');
      const errorParam = query.get('error');

      if (errorParam) {
        setError(`GitHub returned an error: ${query.get('error_description') || errorParam}`);
        return;
      }

      if (!code) {
        setError('No authorization code was found in the URL. Please try logging in again.');
        return;
      }

      try {
        await authService.handleOAuthCallback(code);
        setStatus('Successfully logged in! Redirecting to the editor...');

        // Clean the URL by removing the query string from the hash
        const cleanHash = window.location.hash.split('?')[0];
        window.history.replaceState({}, document.title, window.location.pathname + cleanHash);

        setTimeout(() => navigate('/editor', { replace: true }), 1500);
      } catch (err) {
        if (err instanceof Error) {
            setError(err.message);
        } else {
            setError('An unknown error occurred during authentication.');
        }
      }
    };

    verify();
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-[70vh] px-4">
        <div className="w-full max-w-md text-center">
            {error ? (
                <div className="p-6 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-2xl">
                    <span className="material-symbols-outlined text-5xl text-red-500 mb-4">error</span>
                    <h1 className="text-xl font-bold font-display text-gray-900 dark:text-white mb-2">Authentication Failed</h1>
                    <p className="text-sm text-red-700 dark:text-red-300 bg-red-100 dark:bg-red-900/30 p-3 rounded-lg">
                        {error}
                    </p>
                    <Link
                        to="/login"
                        className="mt-6 inline-block w-full py-2 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
                    >
                        Try Again
                    </Link>
                </div>
            ) : (
                <>
                    <div className="w-10 h-10 border-4 border-gray-200 border-t-primary-600 rounded-full animate-spin mx-auto mb-6"></div>
                    <h1 className="text-2xl font-bold mb-2 font-display">{status}</h1>
                    <p className="text-gray-500">Please wait while we finalize your secure login.</p>
                </>
            )}
        </div>
    </div>
  );
};

export default OAuthCallback;
