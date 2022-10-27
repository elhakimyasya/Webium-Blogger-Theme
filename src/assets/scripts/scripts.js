// Lazysizes
document.addEventListener('lazybeforeunveil', (event) => {
    const attrDataImage = event.target.getAttribute('data-image');

    if (attrDataImage) {
        event.target.style.backgroundImage = `url(${attrDataImage})`;
        event.target.classList.remove('animate-pulse');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-overflow="false"]').forEach((elements) => {
        const hideTarget = elements.getAttribute('data-hide-target');
        elements.addEventListener('toggleAfter', function (event) {
            if (window.easyToggleState.isActive(event.target)) {
                document.documentElement.classList.add('overflow-hidden');
                hideTarget && document.querySelector(hideTarget).classList.add('hidden')
            } else {
                document.documentElement.classList.remove('overflow-hidden');
                hideTarget && document.querySelector(hideTarget).classList.remove('hidden')
            }
        })
    })
})

