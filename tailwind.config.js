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
            },
            fontFamily: {
                "webium": 'webium, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";'
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