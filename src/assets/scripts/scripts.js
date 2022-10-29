const initComments = (elcreativeComments) => {
    const commentContainer = document.querySelector(elcreativeComments);
    if (commentContainer) {
        const commentSource = commentContainer.getAttribute('data-src');
        const commentIframe = commentContainer.querySelector('#comment-editor');
        const commentAdd = commentContainer.querySelector('.add_comment');

        if (commentAdd) {
            const commentEnable = commentAdd.getAttribute('data-comments');
            const commentThread = commentContainer.querySelector('#threaded_comment_form');

            if ((commentIframe.setAttribute('src', commentSource), commentEnable == 'true')) {
                const commentReply = commentContainer.getElementsByClassName('reply_to');
                const commentThreadData = commentThread;

                for (let index = 0; index < commentReply.length; index++) {
                    commentReply[index].addEventListener('click', function () {
                        const commentReplyTo = this.getAttribute('data-reply-to');

                        commentContainer.querySelector(`#c${commentReplyTo}`).appendChild(commentThreadData);
                        commentIframe.setAttribute('src', `${commentSource}&parentID=${commentReplyTo}`);
                        commentAdd.classList.add('comment-reply');
                        commentAdd.classList.remove('hidden');
                    });
                };

                const commentForm = document.getElementsByClassName('comment_form')[0];
                commentAdd.addEventListener('click', () => {
                    commentForm.appendChild(commentThreadData);
                    commentAdd.classList.add('hidden');
                    commentIframe.setAttribute('src', commentSource);
                });
            }
        }
    }
};

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
    });

    document.querySelectorAll('.button_toggle_comment').forEach((elements) => {
        elements.addEventListener('click', initComments('.elcreative_comment'))
    })
})

