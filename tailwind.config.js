/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Libre Baskerville', 'serif'],
      },

      /*
        TYPOGRAPHY SCALE
        These are editorial, not UI sizes.
        Intentionally large with generous line-height.
      */
      fontSize: {
        // Hero / display
        'display-hero': [
          'clamp(3.25rem, 6vw, 5.5rem)',
          {
            lineHeight: '1.05',
            letterSpacing: '-0.02em',
            fontWeight: '500',
          },
        ],

        'display-subtle': [
          'clamp(3rem, 5.5vw, 5rem)',
          {
            lineHeight: '1.05',
            letterSpacing: '-0.015em',
            fontWeight: '400',
          },
        ],

        // Editorial body
        'body-lg': [
          '1.25rem',
          {
            lineHeight: '1.7',
            letterSpacing: '-0.01em',
          },
        ],

        body: [
          '1.05rem',
          {
            lineHeight: '1.7',
          },
        ],

        meta: [
          '0.8rem',
          {
            lineHeight: '1.4',
            letterSpacing: '0.12em',
          },
        ],
      },

      /*
        COLOR TOKENS
        Muted, calm, high-end.
        No Tailwind defaults like gray-500.
      */
      colors: {
        ink: {
          DEFAULT: '#111111',
          muted: '#424242',
          subtle: '#7a7a7a',
        },
        paper: {
          DEFAULT: '#fafafa',
          muted: '#f2f2f2',
        },
      },

      /*
        SPACING RHYTHM
        Editorial spacing, not 4/8/16 UI scale
      */
      spacing: {
        section: 'clamp(5rem, 12vh, 9rem)',
        gutter: 'clamp(1.5rem, 3.5vw, 4.2rem)',
        text: '42ch',
      },
    },
  },
  plugins: [],
};
