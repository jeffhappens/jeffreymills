/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx,vue}",
    ],
    theme: {
        extend: {
            colors: {
                linkedin: {
                    500: '#0077B5'
                },
                github: {
                    500: '#2b3137'
                }
            }
        },
    },
    plugins: [],
  }