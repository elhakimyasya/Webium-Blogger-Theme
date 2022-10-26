/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        './src/*.{xml,html,js}',
        './src/partials/*/*.{xml,html,js}',
    ],
    theme: {
        extend: {
            colors: {
                colorBackground: 'var(--colorBackground)',
                colorText: 'var(--colorText)',
                colorTextTrans1: 'var(--colorTextTrans1)',
                colorMeta: 'var(--colorMeta)',
                colorBorder: 'var(--colorBorder)',
                
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
        require('@tailwindcss/line-clamp')
    ]
}