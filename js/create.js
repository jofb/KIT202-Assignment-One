const titlePreview = document.getElementById("title-preview");
const desiredTitle = document.getElementById("post-title");

const postPreview = document.getElementById("body-preview");
const desiredPost = document.getElementById("post-body");

// These two functions are called by the onchange event from their respective form elements.
// Only for the purpose of previewing a post before it is submitted
function updateTitle() {
    titlePreview.innerText = desiredTitle.value;
}

function updatePostBody() {
    postPreview.innerText = desiredPost.value;
}