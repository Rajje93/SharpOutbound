/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#0D0B1F',
          lighter: '#1C1E2A'
        },
        // ... rest of your theme configuration
      },
      // ... rest of your configuration
    }
  },
  plugins: []
}; 