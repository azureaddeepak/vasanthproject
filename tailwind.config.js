/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-teal': {
          900: '#134e4a', // Primary color
          800: '#115e59',
          700: '#0f766e',
        },
        'brand-amber': {
          900: '#78350f',
          800: '#92400e',
          700: '#b45309', // Secondary color
          600: '#d97706',
          500: '#f59e0b', // Accent color
          100: '#fef3c7',
          50: '#fffbeb',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'product': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
      gridTemplateColumns: {
        'product-grid': 'repeat(auto-fill, minmax(250px, 1fr))',
      },
      height: {
        'hero': '500px',
      },
      spacing: {
        '128': '32rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
