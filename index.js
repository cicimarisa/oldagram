const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "avatar-vangogh.jpg",
        post: "post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "avatar-courbet.jpg",
        post: "post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "avatar-ducreux.jpg",
        post: "post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const main = document.getElementById("main")

let template = ""

for (const post of posts) {
    template += `<section class="d-flex">
    <div class="user-info d-flex">
        <img src="${post.avatar}" alt="">
        <p><strong>${post.name}</strong>
        <small class="d-block">${post.location}</small></p>
    </div>
    <img src="${post.post}" alt="" class="post-content">
    <div class="action d-flex">
        <button class="general like-btn"></button>
        <button class="general comment-btn"></button>
        <button class="general dm-btn"></button>
    </div>
    <p><strong><span class="likes-count">${post.likes}</span> likes</strong></p>
    <p><strong><span>${post.username}</span></strong> <span>${post.comment}</span></p>
</section>`
}

main.innerHTML = template

const like_btns = document.getElementsByClassName("like-btn")
const likes_count = document.getElementsByClassName("likes-count")

for (let i = 0; i < like_btns.length; i++) {
    like_btns[i].addEventListener("dblclick", function () {
        if (like_btns[i].classList.contains("like-btn-active")) {
            like_btns[i].classList.remove("like-btn-active");
            likes_count[i].textContent = posts[i].likes;
        } else {
            like_btns[i].classList.add("like-btn-active");
            likes_count[i].textContent = posts[i].likes + 1;
        }
    })
}
