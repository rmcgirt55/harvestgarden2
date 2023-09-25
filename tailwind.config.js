/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./server.js", // Add the entry point of your server
        "./routes/**/*.js", // Add paths to your routes files
        "./views/**/*.js", // Add paths to your view files
        "./public/**/*.html", // Add paths to HTML files if you use Tailwind classes directly in HTML
        "./public/**/*.js", // Add paths to JavaScript files if you use Tailwind classes directly in JavaScript
    ],
    theme: {
        extended: {
            boxShadow: {
                // '3xl': "0 0 24px - 5px rgb(0 0 0 / 0.1), 0 8px 10px - 6px rgb(0 0 0 / 0.1)"
                // '3xl': '0 0 24px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
                '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
            },
            screens: {
                '3xl': "1800px",
            },
        },
        screens: {
            'sm': '640px',
            // => @media (min-width: 640px) { ... }

            'md': '768px',
            // => @media (min-width: 768px) { ... }

            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }

            '3xl': '1600px',
            // => @media (min-width: 1536px) { ... }
        }
    },
    plugins: [],
}