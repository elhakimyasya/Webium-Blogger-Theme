var socialFloat = document.querySelector(".scrolled-meta"), header = document.querySelector(".post-body"), footer = document.querySelector(".post-footer");
function checkOffsetTop() {
    socialFloat.getBoundingClientRect().top + document.body.scrollTop + socialFloat.offsetHeight >= footer.getBoundingClientRect().top + document.body.scrollTop - 10 && (socialFloat.style.maxHeight = "0");
    document.body.scrollTop + window.innerHeight < footer.getBoundingClientRect().top + document.body.scrollTop && (socialFloat.style.maxHeight = "100%");
    socialFloat.getBoundingClientRect().top + document.body.scrollTop + socialFloat.offsetHeight >= header.getBoundingClientRect().top + document.body.scrollTop - 10 + 4 * (header.getBoundingClientRect().top + document.body.scrollTop) && (socialFloat.style.opacity = "1");
    socialFloat.getBoundingClientRect().top + document.body.scrollTop + socialFloat.offsetHeight <= 4 * (header.getBoundingClientRect().top + document.body.scrollTop) && (socialFloat.style.opacity = "0");
}
document.addEventListener("scroll", function () {
    checkOffsetTop();
});