/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        './src/*.{xml,html,js}',
        './src/partials/*/*.{xml,html,js}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: [
                    "sohne", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"
                ]
            },
            colors: {
                colorBackground: 'var(--colorBackground)',
                colorText: 'var(--colorText)',
                colorTextTrans1: 'var(--colorTextTrans1)',
                colorMeta: 'var(--colorMeta)',
                colorBorder: 'var(--colorBorder)',
                
                colorNavbarBackground: 'var(--colorNavbarBackground)',
                colorNavbarBorder: 'var(--colorNavbarBorder)',
                colorNavbarShadow: 'var(--colorNavbarShadow)',
                colorNavbarText: 'var(--colorNavbarText)',
                
                colorDarkBackground: 'var(--colorDarkBackground)',
                colorDarkText: 'var(--colorDarkText)',
                colorDarkTextTrans1: 'var(--colorDarkTextTrans1)',
                colorDarkMeta: 'var(--colorDarkMeta)',
                colorDarkBorder: 'var(--colorDarkBorder)',
            }
        },
    },
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/typography'),
    ]
}