const  user = JSON.parse(localStorage.getItem('user'))

const divWrapper = document.createElement('div')
divWrapper.classList = 'divWrapper';
document.body.appendChild(divWrapper)

const divUser = document.createElement('div');
divUser.classList = 'divUser';
divWrapper.appendChild(divUser);
function iterator(arr) {
    for (const userKey in arr) {
if(typeof arr[userKey] === 'object'){
    iterator(arr[userKey])
}else{
    const pElement = document.createElement('p')
    divUser.appendChild(pElement)
    pElement.innerHTML = `<b>${userKey}</b> : ${user[userKey]}`
}
    }
}
iterator(user)


const divUserPosts = document.createElement('div');
divUserPosts.classList = 'divUserPosts';
divWrapper.appendChild(divUserPosts);


fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
.then(response=> response.json())
.then(posts =>{
    for (const post of posts) {
        const divUserPost = document.createElement('div');
        divUserPost.classList = 'divUserPost';
        divUserPosts.appendChild(divUserPost);
        divUserPost.innerHTML = `
<p><b>User ID</b> - ${post.userId}</p>
<p><b>User NAME</b> - ${user.name}</p>
<p><b>Post id</b> - ${post.id}</p>
<p><b>Title</b> - ${post.title}</p>
<p><b>Body</b> - ${post.body}</p>
`
    }
})