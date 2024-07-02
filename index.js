import posts from "./data.js"

const mainEl = document.getElementById("main-section")

document.addEventListener('click', function(e) {
    if (e.target.dataset.like){
        handleLikeClick(e.target.dataset.like)
    }
})


function handleLikeClick(postId){

    const handleLikeObj = posts.find(post=>post.username === postId)

    if(handleLikeObj.isLiked){
        handleLikeObj.likes--
    } else {
        handleLikeObj.likes++
    }
    handleLikeObj.isLiked = !handleLikeObj.isLiked
    renderPosts()
}


//render posts
function getPostsFeed() {
   let mainHtml = ``

 posts.map((post) =>{
    let likedStatus = ""
    let likedShape = "regular"
    if(post.isLiked){
        likedStatus = "liked"
        likedShape = "solid"
    } else {
        likedStatus = ""

    }
    // fix this, make less
    mainHtml += `
                 <section class="user-post-header">
                                    
                    <img class="user-header-img" src=${post.avatar}>
                    <div class="user-header-info">
                    <h3 class="user-full-name">${post.name}</h3>
                    <h4 class="user-location">${post.location}</h4>
                    </div>
                </section>

                <section class="user-info">
                    
                    <img class="post-img" src="${post.post}">
                
                    <div class="social-icons">
                        <span class="social-heart"><i class="fa-${likedShape} fa-heart ${likedStatus}" data-like="${post.username}"></i></span>
                        <span class="social-comment"><i class="fa-regular fa-comment"></i></span>
                        <span class="social-dm"><i class="fa-solid fa-retweet"></i></span>
                    </div>
                </section>

                <section class="user-bottom">
                    <p class="like-count">${post.likes} likes</p>
                    <p class="username-caption"><strong>${post.username}</strong> ${post.comment}</p>
                </section>
    
    `
}).join("")
     return mainHtml
}

function renderPosts(){
    document.getElementById("main-section").innerHTML = getPostsFeed() 
}

renderPosts()
