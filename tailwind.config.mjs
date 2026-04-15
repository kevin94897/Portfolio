/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        lime: '#b4df00',
        'lime-dim': 'rgba(180,223,0,0.12)',
        'lime-glow': 'rgba(180,223,0,0.4)',
        black: '#030303',
        surface: '#0a0a0a',
        surface2: '#111111',
        surface3: '#181818',
        text: '#e8e8e8',
        muted: '#888888',
        border: 'rgba(255,255,255,0.07)',
      },
      fontFamily: {
        syne: ['"Space Grotesk Variable"', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
        sans: ['"Plus Jakarta Sans Variable"', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '12px',
      },
      maxWidth: {
        container: '1400px',
      },
      spacing: {
        container: '60px',
      },
      boxShadow: {
        lime: '0 0 18px rgba(180,223,0,0.05)',
        'lime-md': '0 0 40px rgba(180,223,0,0.08)',
      },
    },
  },
  plugins: [],
};
