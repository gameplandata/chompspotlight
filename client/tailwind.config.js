/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'gator-blue': 'rgb(0, 33, 165)',
      },
    
      spacing: {
        '18': '4.5rem',
        '84': '21rem'
      },
      backgroundImage: theme => ({
        'feed': "url('../public/images/background/feed.jpg')",
      }),
    },
  },
  plugins: [],
}

