
// Lazysizes
document.addEventListener("lazybeforeunveil", function (event) {
    var attrDataImage = event.target.getAttribute("data-image");

    if (attrDataImage) {
        event.target.style.backgroundImage = `url(${attrDataImage})`;
        event.target.classList.remove("animate-pulse");
    }
});

// Comment System
var elcreativeComments = document.querySelector(".elcreative_comment");
if (elcreativeComments) {
    var commentSource = elcreativeComments.getAttribute("data-src");
    var commentIframe = elcreativeComments.querySelector("#comment-editor");
    var commentAdd = elcreativeComments.querySelector(".add_comment");

    if (commentAdd) {
        var commentEnable = commentAdd.getAttribute("data-comments");
        var commentThread = elcreativeComments.querySelector("#threaded_comment_form");

        if (commentIframe.setAttribute("src", commentSource), commentEnable == "true") {
            var commentReply = elcreativeComments.getElementsByClassName("reply_to");
            var commentThreadData = commentThread;

            for (let index = 0; index < commentReply.length; index++) {
                commentReply[index].addEventListener("click", function (event, index) {
                    var commentReplyTo = this.getAttribute("data-reply-to");

                    elcreativeComments.querySelector(`#c${commentReplyTo}`).appendChild(commentThreadData);
                    commentIframe.setAttribute("src", `${commentSource}&parentID=${commentReplyTo}`);
                    commentAdd.classList.add("comment-reply");
                    commentAdd.classList.remove("hidden");
                })
            };

            var commentForm = document.getElementsByClassName("comment_form")[0];
            commentAdd.addEventListener("click", function () {
                commentForm.appendChild(commentThreadData);
                commentAdd.classList.add("hidden");
                commentIframe.setAttribute("src", commentSource)
            })
        }
    };
}