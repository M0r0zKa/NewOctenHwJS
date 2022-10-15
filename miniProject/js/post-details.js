const postInfo = JSON.parse(localStorage.getItem('postInfo'));

const divWrapper = document.createElement('div');
divWrapper.classList = 'divWrapper';
document.body.appendChild(divWrapper);


fetch(`https://jsonplaceholder.typicode.com/posts/${postInfo.id}/comments`)
.then(response => response.json())
.then(post=> {
    console.log(post);
})

console.log(postInfo);
