import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { authService } from '../services/authService';

/**
 * Apple 메뉴바 감성 — 반투명 블러, 하이어라인만, 타이트한 간격.
 * 푸터는 Airbnb 풍 여유 있는 패딩과 부드러운 톤.
 */
export const Layout: React.FC = () => {
  const [isDark, setIsDark] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const isDarkMode =
      localStorage.getItem('theme') === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setIsDark(isDarkMode);
    document.documentElement.classList.toggle('dark', isDarkMode);
    setIsAdmin(authService.isAdmin());
  }, [location]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  const handleLogout = (e: React.MouseEvent) => {
    e.preventDefault();
    authService.logout();
    setIsAdmin(false);
    navigate('/');
  };

  const isEditor = location.pathname.startsWith('/editor');
  const isHome = location.pathname === '/';

  return (
    <div className="flex flex-col min-h-screen bg-ink-50 dark:bg-ink-900 transition-apple duration-300">
      {/* ───── Apple 메뉴바 스타일 ───── */}
      <header
        className={`fixed top-0 z-50 w-full transition-apple duration-500 ${
          scrolled || !isHome
            ? 'bg-white/85 dark:bg-ink-900/85 backdrop-blur-2xl border-b border-ink-200/60 dark:border-ink-700/60'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-12">
          <div className="flex justify-between items-center h-14">
            <Link to="/" className="group flex items-center gap-2.5">
              <div className={`w-7 h-7 rounded-lg flex items-center justify-center transition-apple ${
                scrolled || !isHome
                  ? 'bg-ink-900 dark:bg-ink-50 text-ink-50 dark:text-ink-900'
                  : 'bg-white/20 text-white backdrop-blur-sm ring-1 ring-white/20'
              }`}>
                <span className="material-symbols-outlined text-[16px]">
                  auto_stories
                </span>
              </div>
              <span className={`font-display font-bold text-[15px] tracking-tight hidden sm:inline ${
                scrolled || !isHome ? 'text-ink-900 dark:text-ink-50' : 'text-white'
              }`}>
                이야기 공장
              </span>
            </Link>

            <nav className="flex items-center gap-1 sm:gap-2">
              {[
                { to: '/', label: '홈' },
                { to: '/about', label: '소개' },
              ].map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`px-3 py-1.5 rounded-full text-[13px] font-medium transition-apple ${
                    scrolled || !isHome
                      ? 'text-ink-700 dark:text-ink-300 hover:text-ink-900 dark:hover:text-ink-50 hover:bg-ink-100 dark:hover:bg-ink-800'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              {isAdmin && (
                <Link
                  to="/editor"
                  className={`px-3 py-1.5 rounded-full text-[13px] font-semibold transition-apple ${
                    scrolled || !isHome
                      ? 'text-warm-600 hover:bg-warm-50 dark:text-warm-400 dark:hover:bg-warm-900/30'
                      : 'text-warm-300 hover:bg-white/10'
                  }`}
                >
                  새 글 쓰기
                </Link>
              )}
              <button
                onClick={toggleTheme}
                className={`ml-1 w-9 h-9 rounded-full flex items-center justify-center transition-apple ${
                  scrolled || !isHome
                    ? 'text-ink-600 hover:bg-ink-100 dark:text-ink-400 dark:hover:bg-ink-800'
                    : 'text-white/90 hover:bg-white/10'
                }`}
                aria-label="Toggle Theme"
              >
                <span className="material-symbols-outlined text-[18px]">
                  {isDark ? 'light_mode' : 'dark_mode'}
                </span>
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Spacer to offset fixed header on non-home pages (home has hero that flows under) */}
      {!isHome && <div className="h-14" />}

      <main className="flex-grow">
        <Outlet />
      </main>

      {/* ───── Footer — 미니멀 ───── */}
      {!isEditor && (
        <footer className="mt-24 pt-16 pb-10 border-t border-ink-200 dark:border-ink-800 bg-ink-100/50 dark:bg-ink-900">
          <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-12">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 pb-8">
              <Link to="/" className="flex items-center gap-2 group">
                <div className="w-8 h-8 rounded-lg bg-ink-900 dark:bg-ink-50 text-ink-50 dark:text-ink-900 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[18px]">auto_stories</span>
                </div>
                <span className="font-display font-bold text-lg text-ink-900 dark:text-ink-50 group-hover:text-warm-600 transition-apple">
                  엔지니어를 위한 이야기 공장
                </span>
              </Link>
              <nav className="flex items-center gap-6 text-sm">
                <Link to="/" className="text-ink-700 dark:text-ink-300 hover:text-warm-600 transition-apple">홈</Link>
                <Link to="/about" className="text-ink-700 dark:text-ink-300 hover:text-warm-600 transition-apple">소개</Link>
                <a href="https://github.com/namojo" className="text-ink-700 dark:text-ink-300 hover:text-warm-600 transition-apple">GitHub</a>
                {isAdmin ? (
                  <button onClick={handleLogout} className="text-ink-500 hover:text-coral-500 transition-apple">로그아웃</button>
                ) : (
                  <Link to="/login" className="text-ink-500 hover:text-warm-600 transition-apple">관리자</Link>
                )}
              </nav>
            </div>
            <div className="pt-6 border-t border-ink-200 dark:border-ink-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-xs text-ink-500">
              <p>&copy; {new Date().getFullYear()} 엔지니어를 위한 이야기 공장. All rights reserved.</p>
              <p>AI 기술에 인문학의 온기를 불어넣다.</p>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
};
