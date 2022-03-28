const titlePreview = document.getElementById("title-preview");
const desiredTitle = document.getElementById("post-title");

const postPreview = document.getElementById("body-preview");
const desiredPost = document.getElementById("post-body");

function updateTitle() {
    titlePreview.innerText = desiredTitle.value;
}

function updatePostBody() {
    postPreview.innerText = desiredPost.value;
}