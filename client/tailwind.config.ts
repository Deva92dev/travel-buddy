import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    mytheme: {
      primary: '#ffffff',
      secondary: '#1ec6b6',
      accent: '#ff4a52',
      neutral: '#041401',
      'base-100': '#fff4f5',
      info: '#0092c3',
      success: '#05ff75',
      warning: '#ffca00',
      error: '#ff7e8d',
    },
  },
  plugins: [require('daisyui')],
};
export default config;
