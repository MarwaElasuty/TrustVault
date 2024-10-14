/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'next-level': "url('./images/next-level-bg.png')",
        'middle-feature': "url('./images/middle-feature.png')",
        'crypto': "url('./images/crypto-bg.png')",
        'why-choose-line': "url('./images/why-choose-line.svg')",
        'main-bg': "url('./images/main-bg.svg')",
        "benefit-shadow": "url('./images/benefit-shadow.svg')"
      },
      borderRadius: {
        'custom': '50px', // Custom value
      },
      fontSize: {
        'custom-xs': '12px',   // Extra Small
        'custom-sm': '14px',   // Small
        'custom-base': '16px', // Base (default size)
        'custom-lg': '18px',   // Large
        'custom-xl': '20px',   // Extra Large
        'custom-2xl': '24px',  // 2X Large
        'custom-3xl': '30px',  // 3X Large
        'custom-4xl': '36px',  // 4X Large
        'custom-5xl': '48px',  // 5X Large
        'custom-6xl': '64px',  // 6X Large
      },
      
    },
  },
  plugins: [],
};

