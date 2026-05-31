import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'royal-blue':   '#0047AB',
        'water-cyan':   '#00B4D8',
        'deep-navy':    '#1A1A2E',
        'page-bg':      '#F0F2F5',
        'border-light': '#E8ECF0',
        'green-wa':     '#25D366',
      },
      fontFamily: {
        sans: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(0,71,171,0.3)' },
          '50%':       { boxShadow: '0 0 0 8px rgba(0,71,171,0)' },
        },
        'fade-in-up': {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        'glow-pulse': 'glow-pulse 2.5s ease-in-out infinite',
        'fade-in-up': 'fade-in-up 0.4s ease-out forwards',
        'float':      'float 4s ease-in-out infinite',
      },
      boxShadow: {
        card: '0 1px 4px rgba(0,0,0,0.06)',
      },
    },
  },
  plugins: [],
}
export default config
