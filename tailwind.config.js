/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './node_modules/animate.css/**/*.css',
  ],
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideOut: {
          '0%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(100%)', opacity: '0' },
        },
        customBounce: {
          '0%, 100%': { transform: 'translateY(-4%)', animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)' },
          '50%': { transform: 'translateY(0)', animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)' },
        },
        html: {
          '0%': { width: '0%' },
          '100%': { width: '90%' },
        },
        css: {
          '0%': { width: '0%' },
          '100%': { width: '70%' },
        },
        js: {
          '0%': { width: '0%' },
          '100%': { width: '40%' },
        },
        tailwind: {
          '0%': { width: '0%' },
          '100%': { width: '30%' },
        },
        laravel: {
          '0%': { width: '0%' },
          '100%': { width: '50%' },
        },
        django: {
          '0%': { width: '0%' },
          '100%': { width: '20%' },
        }
      },
      animation: {
        slideIn: 'slideIn 0.5s ease-in-out',
        slideOut: 'slideOut 0.5s ease-in-out',
        customBounce: 'customBounce 2s infinite',
        slideUp: 'slideIn 0.5s ease-out forwards',
        html: 'html 3s',
        css: 'css 3s',
        js: 'js 3s',
        tailwind: 'tailwind 3s',
        laravel: 'laravel 3s',
        django: 'django 3s',
      },
    },
  },
  plugins: [],
}

