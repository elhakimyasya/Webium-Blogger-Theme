// Lazysizes
document.addEventListener('lazybeforeunveil', (event) => {
    const attrDataImage = event.target.getAttribute('data-image');

    if (attrDataImage) {
        event.target.style.backgroundImage = `url(${attrDataImage})`;
        event.target.classList.remove('animate-pulse');
    }
});