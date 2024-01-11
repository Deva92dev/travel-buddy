import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    screens: {
      sm: '512px', // Adjust for smaller screens
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      // Add a new breakpoint if needed (e.g., 2xl: "1440px")
    },
    extend: {
      fontFamily: {
        cursive: ['	Nothing You Could Do', 'cursive'],
      },
      colors: {
        primary: '#ffffff',
        secondary: '#1ec6b6',
        accent: '#ff4a52',
        neutral: '#041401',
        'base-100': '#fff4f5',
        bgform: '#040e27',
        info: '#0092c3',
        success: '#05ff75',
        warning: '#ffca00',
        error: '#ff7e8d',
      },
    },
  },

  plugins: [require('daisyui')],
  daisyui: {
    styled: true, // Ensure this is set to true
    utils: true, // Recommended for responsive utility classes
    // ... other DaisyUI options
  },
};
export default config;
