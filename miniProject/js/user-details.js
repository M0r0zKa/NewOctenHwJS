const  user = JSON.parse(localStorage.getItem('user'))
const divWrapper = document.createElement('div')
divWrapper.classList = 'divWrapper';
document.body.appendChild(divWrapper)
const divUser = document.createElement('div');
divUser.classList = 'divUser';
divWrapper.appendChild(divUser);
 const iterator = (arr)=> {
    for (const userKey in arr) {
        if(typeof arr[userKey] === 'object'){
    const pElement = document.createElement('p')
    divUser.appendChild(pElement)
    pElement.innerHTML = `${[userKey]} :`
    iterator(arr[userKey])
}else{
    const pElement = document.createElement('p')
    divUser.appendChild(pElement)
    pElement.innerHTML = `<b>${userKey}</b> : ${arr[userKey]}`
}
    }
}
iterator(user)
const divPostsButton = document.createElement('button');
divPostsButton.classList = 'divPostsButton';
divWrapper.appendChild(divPostsButton);
divPostsButton.textContent = 'dsadas'
const divUserPosts = document.createElement('div');
divUserPosts.classList = 'divUserPosts';
divWrapper.appendChild(divUserPosts);
divPostsButton.onclick=()=>{
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(response=> response.json())
        .then(posts =>{
            const divPostOfCurrentUser = document.createElement('div')
            for (const post of posts) {
                const divUserPost = document.createElement('div');
                divUserPost.classList = 'divUserPost';
                divUserPosts.appendChild(divUserPost);
                divUserPost.innerHTML = `
<p><b>Title</b> - ${post.title}</p>`

                divUserPost.onclick=(()=>{
                    localStorage.setItem('postInfo', JSON.stringify(post))
                    window.open('post-details.html')
                })
            }
        })
    divPostsButton.disabled = true;
}

