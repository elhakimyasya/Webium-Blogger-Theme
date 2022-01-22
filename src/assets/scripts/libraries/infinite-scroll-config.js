var infinite_scroll = new InfiniteScroll({
    type: 0,
    target: {
        posts: '.blog-posts',
        post: '.blog-post',
        anchors: '.blog-pager',
        anchor: '.blog-pager-older-link'
    },
    text: {
        load: `<span class="load"><b:include data='{ message: "translateLoadMore" }' name='translate'/></span>`,
        loading: `<span class="loading"><b:include data='{ message: "translateLoading" }' name='translate'/></span>`,
        loaded: `<span class="loaded"><b:include data='{ message: "translateLoadNoMore" }' name='translate'/></span>`,
        error: `<span class="error"><b:include data='{ message: "translateLoadError" }' name='translate'/></span>`
    }
});