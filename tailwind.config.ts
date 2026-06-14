/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // ── COLORS ────────────────────────────────────────────────
      colors: {
        'ds-black':      '#0E1011',
        'ds-muted':      '#F8F8F8',
        'ds-white':      '#FFFFFF',
        'ds-text-muted': 'rgba(14, 16, 17, 0.6)',
        'ds-border':     'rgba(14, 16, 17, 0.12)',
      },
      // ── FONT FAMILIES ─────────────────────────────────────────
      fontFamily: {
        display:  ['Anton SC', 'sans-serif'],
        body:     ['Inter', 'sans-serif'],
        meta:     ['DM Serif Text', 'serif'],
      },
      // ── FONT SIZES ────────────────────────────────────────────
      fontSize: {
        // Display (Anton SC — sempre uppercase)
        'display-4xl': ['320px', { lineHeight: '1', letterSpacing: '0' }],
        'display-3xl': ['240px', { lineHeight: '1', letterSpacing: '0' }],
        'display-2xl': ['160px', { lineHeight: '1', letterSpacing: '0' }],
        'display-xl':  ['120px', { lineHeight: '1', letterSpacing: '0' }],
        'display-lg':  ['96px',  { lineHeight: '1.05', letterSpacing: '0' }],
        'display-h1':  ['80px',  { lineHeight: '1.1', letterSpacing: '0' }],
        'display-h2':  ['64px',  { lineHeight: '1.1', letterSpacing: '0' }],
        'display-h3':  ['48px',  { lineHeight: '1.1', letterSpacing: '0' }],
        'display-h4':  ['36px',  { lineHeight: '1.2', letterSpacing: '0' }],
        // Alt headings (Inter SemiBold 600)
        'alt-80':  ['80px',  { lineHeight: '1.2', letterSpacing: '-2px' }],
        'alt-64':  ['64px',  { lineHeight: '1.2', letterSpacing: '-1px' }],
        'alt-48':  ['48px',  { lineHeight: '1.3', letterSpacing: '-0.5px' }],
        'alt-40':  ['40px',  { lineHeight: '1.4', letterSpacing: '-1px' }],
        'alt-32':  ['32px',  { lineHeight: '1.3', letterSpacing: '-0.5px' }],
        'alt-24':  ['24px',  { lineHeight: '1.4', letterSpacing: '0' }],
        'alt-22':  ['22px',  { lineHeight: '1.0', letterSpacing: '0' }],
        // Body (Inter Regular 400 — line-height 1.7)
        'body-28': ['28px', { lineHeight: '1.7' }],
        'body-24': ['24px', { lineHeight: '1.7' }],
        'body-22': ['22px', { lineHeight: '1.7' }],
        'body-18': ['18px', { lineHeight: '1.7' }],
        'body-16': ['16px', { lineHeight: '1.7' }],
        'body-14': ['14px', { lineHeight: '1.7' }],
        'body-12': ['12px', { lineHeight: '1.7' }],
        // Meta labels (DM Serif Text Italic)
        'meta-32': ['32px', { lineHeight: '1.0' }],
        'meta-30': ['30px', { lineHeight: '1.0' }],
      },
      // ── SPACING ───────────────────────────────────────────────
      spacing: {
        'space-1': '16px',
        'space-2': '32px',
        'space-3': '48px',
        'space-4': '64px',
        'space-5': '96px',
        'space-6': '128px',
        'space-7': '160px',
      },
      // ── MAX WIDTH ─────────────────────────────────────────────
      maxWidth: {
        canvas:  '1920px',
        content: '1400px',
        half:    '960px',
      },
      // ── TRANSITIONS ───────────────────────────────────────────
      transitionDuration: {
        '250': '250ms',
        '400': '400ms',
        '600': '600ms',
      },
      transitionTimingFunction: {
        'ease-out-custom': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      // ── KEYFRAMES ─────────────────────────────────────────────
      keyframes: {
        'scroll-reveal': {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'marquee': {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'scroll-reveal': 'scroll-reveal 0.6s ease-out forwards',
        'marquee': 'marquee 20s linear infinite',
      },
    },
  },
  plugins: [],
}
