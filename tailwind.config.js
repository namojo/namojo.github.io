/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './index.tsx',
    './App.tsx',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './services/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // Pretendard: Apple SF Pro 스타일 + 한글 완벽 지원
        sans: ['Pretendard Variable', 'Pretendard', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'Roboto', 'sans-serif'],
        display: ['Pretendard Variable', 'Pretendard', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        // Noto Serif KR: 장문 본문 가독성
        serif: ['Noto Serif KR', 'Apple SD Gothic Neo', 'Nanum Myeongjo', 'serif'],
      },
      fontSize: {
        // Apple 스케일: 큰 헤드라인이 정체성
        'display-xl': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.035em', fontWeight: '700' }],
        'display-lg': ['3.5rem', { lineHeight: '1.08', letterSpacing: '-0.03em', fontWeight: '700' }],
        'display-md': ['2.5rem', { lineHeight: '1.15', letterSpacing: '-0.025em', fontWeight: '700' }],
        'display-sm': ['1.875rem', { lineHeight: '1.25', letterSpacing: '-0.02em', fontWeight: '700' }],
        'eyebrow': ['0.75rem', { lineHeight: '1.3', letterSpacing: '0.12em', fontWeight: '600' }],
      },
      colors: {
        // Apple system greys
        ink: {
          50: '#FBFBFD',
          100: '#F5F5F7',
          200: '#E8E8ED',
          300: '#D2D2D7',
          400: '#A1A1A6',
          500: '#86868B',
          600: '#6E6E73',
          700: '#3A3A3C',
          800: '#1D1D1F',
          900: '#0D0D0E',
        },
        // 따뜻한 액센트 (Airbnb 감성 테라코타)
        warm: {
          50: '#FDF6F1',
          100: '#FAECE1',
          200: '#F3D4BF',
          300: '#EBB99A',
          400: '#DE9871',
          500: '#C6462C',  // primary warm accent
          600: '#A93A23',
          700: '#86301F',
          800: '#6B281E',
          900: '#53211B',
        },
        // Airbnb 시그니처 핑크 (하트/좋아요 등 포인트)
        coral: {
          500: '#E11C4C',
          600: '#CC1642',
        },
        // Apple 링크 블루
        linkblue: '#0066CC',
      },
      boxShadow: {
        // Airbnb-style soft multilayer shadows
        'card': '0 1px 2px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.06)',
        'card-hover': '0 4px 8px rgba(0,0,0,0.06), 0 20px 40px rgba(0,0,0,0.12)',
        'hairline': 'inset 0 -1px 0 #E8E8ED',
      },
      transitionTimingFunction: {
        'apple': 'cubic-bezier(0.28, 0.11, 0.32, 1)',
      },
    },
  },
  plugins: [],
};
