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

                colorNavbarTopBackground: 'var(--colorNavbarTopBackground)',
                colorNavbarTopBorder: 'var(--colorNavbarTopBorder)',
                colorNavbarTopShadow: 'var(--colorNavbarTopShadow)',
                colorNavbarTopText: 'var(--colorNavbarTopText)',

                colorNavbarBottomBackground: 'var(--colorNavbarBottomBackground)',
                colorNavbarBottomShadow: 'var(--colorNavbarTopShadow)',
                colorNavbarBottomText: 'var(--colorNavbarBottomText)',

                colorMainMenuBackground: 'var(--colorMainMenuBackground)',
                colorMainMenuText: 'var(--colorMainMenuText)',
                
                colorIndexText: 'var(--colorIndexText)',
                colorIndexTextTrans1: 'var(--colorIndexTextTrans1)',
                colorIndexTextTrans2: 'var(--colorIndexTextTrans2)',
                colorIndexMeta: 'var(--colorIndexMeta)',
                colorIndexBorder: 'var(--colorIndexBorder)',

                colorItemText: 'var(--colorItemText)',
                colorItemTextTrans1: 'var(--colorItemTextTrans1)',
                colorItemMeta: 'var(--colorItemMeta)',
                colorItemBorder: 'var(--colorItemBorder)',
                colorItemLink: 'var(--colorItemLink)',
                
                colorDarkBackground: 'var(--colorDarkBackground)',
                colorDarkText: 'var(--colorDarkText)',
                colorDarkTextTrans1: 'var(--colorDarkTextTrans1)',
                colorDarkTextTrans2: 'var(--colorDarkTextTrans2)',
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