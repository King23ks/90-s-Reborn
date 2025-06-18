document.getElementById("mood").addEventListener("change", function () {
    document.getElementById("CurrentMood").textContent = this.value;
});
document.getElementById("changeMoodBtn").addEventListener("click", function () {
    document.getElementById("CurrentMood").textContent = document.getElementById("mood").value;
    document.getElementById("mood").value = "";
});


// Friend Request Button
document.getElementById("addFriend").addEventListener("click", function () {
    document.getElementById("friendStatus").textContent = "Friend Request Sent!";
    this.disabled = true;
    setTimeout(function () {
        document.getElementById("friendStatus").textContent = "";
        document.getElementById("addFriend").disabled = false;
    }, 3000);
});


// Post
document.getElementById("postBtn").addEventListener("click", function () {
    var postText = document.getElementById("postText").value;
    var postContainer = document.getElementById("postContainer");
    var newPost = document.createElement("div");
    newPost.classList.add("post");
    newPost.innerHTML = `
        <div class="post-content">${postText}</div>
        <div class="post-actions">
            <button class="like-btn">Like</button>
            <button class="comment-btn">Comment</button>
        </div>
    `;
    postContainer.appendChild(newPost);
    document.getElementById("postText").value = "";
});

document.addEventListener("DOMContentLoaded", function () { 
    var likeBtns = document.querySelectorAll(".like-btn");
    likeBtns.forEach(function (btn) {
        btn.addEventListener("click", function () {
            this.classList.toggle("liked");
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var commentBtns = document.querySelectorAll(".comment-btn");
    commentBtns.forEach(function (btn) {
        btn.addEventListener("click", function () {
            var post = this.closest(".post");
            var commentContainer = post.querySelector(".comment-container");
            var newComment = document.createElement("div");
            newComment.classList.add("comment");
            newComment.innerHTML = `
                <div class="comment-content">
                    <input type="text" class="comment-input" placeholder="Add a comment...">
                    <button class="comment-submit">Post</button>
                </div>
            `;
            commentContainer.appendChild(newComment);
        });
    });
});