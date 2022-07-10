module.exports = {
    darkMode: "class",
    content: [
        "./src/*.{xml, html, js}",
        "./src/partials/*/*.{xml, html, js}",
        "./src/partials/*/*/*.{xml, html, js}",
        "./src/assets/scripts/**/*.{xml, html, js}",
    ],
    theme: {
        extend: {
            typography: {
                DEFAULT: {
                    css: {
                        img: {
                            margin: "0 auto"
                        }
                    },
                },
            }
        },
    },
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/typography'),
    ],
}