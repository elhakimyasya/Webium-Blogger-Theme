var toggleComments = document.querySelectorAll([".item .post-comment", ".item .backdrop", ".item .post-comments"]), closeComment = document.querySelector(".item .close-comment"), backdrop = document.querySelector(".backdrop"), commentSelect = document.querySelector("#comments"), menuToggle = document.querySelector(".header-wrapper .header-section .LinkList .button-icon.menu"), menuWidget = document.querySelector(".header-wrapper .header-section .LinkList .menu-widget"), searchToggle = document.querySelector(".header-wrapper .header-section .LinkList .button-icon.search-menu"),
    headerScroll = document.querySelector(".header-wrapper"), innerScroll = document.querySelector(".clearfix"), headerScrolls = window.getComputedStyle(headerScroll, null).getPropertyValue("background-color"), headerScrollBg = window.getComputedStyle(document.querySelector(".header-height"), null).getPropertyValue("background-color");
function checkOffsetHeader() {
    headerScroll.getBoundingClientRect().top + document.body.scrollTop + headerScroll.offsetHeight >= innerScroll.getBoundingClientRect().top + document.body.scrollTop - 10 + 4 * (innerScroll.getBoundingClientRect().top + document.body.scrollTop) && (headerScroll.style.backgroundColor = headerScrollBg);
    headerScroll.getBoundingClientRect().top + document.body.scrollTop + headerScroll.offsetHeight <= 4 * (innerScroll.getBoundingClientRect().top + document.body.scrollTop) && (headerScroll.style.backgroundColor = headerScrolls);
}
menuToggle.addEventListener("click", function () {
    menuWidget.classList.toggle("active");
});
searchToggle.addEventListener("click", function () {
    document.body.classList.toggle("search-active");
    document.querySelector(".main-top-wrapper .search-page-form input").focus();
});
toggleComments.forEach(function (a) {
    a.addEventListener("click", function () {
        backdrop.classList.toggle("active");
        commentSelect.classList.toggle("active");
    });
});
document.addEventListener("scroll", function () {
    checkOffsetHeader();
});