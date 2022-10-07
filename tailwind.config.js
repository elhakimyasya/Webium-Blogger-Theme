/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        './src/*.{xml,html,js}'
    ],
    theme: {
        extend: {
            colors: {
                colorBackground: 'var(--colorBackground)',
                colorText: 'var(--colorText)',
                colorBorder: 'var(--colorBorder)',
                
                colorDarkBackground: 'var(--colorDarkBackground)',
                colorDarkText: 'var(--colorDarkText)',
                colorDarkBorder: 'var(--colorDarkBorder)'
            }
        },
    },
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        require('@tailwindcss/line-clamp')
    ]
}