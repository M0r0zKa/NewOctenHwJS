let divWrapper = document.createElement('div')
document.body.appendChild(divWrapper)
let divUsers = document.createElement('div');
divWrapper.appendChild(divUsers);

fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(users =>{
    for (const user of users) {
        const divUser = document.createElement('div');
        divUsers.appendChild(divUser);
        divUser.classList='user';
        divUser.innerText = `${user.id} - ${user.name}`
        divUser.setAttribute('id', `${user.id}`)
        divUser.onclick= (e)=>{
            localStorage.setItem('user',JSON.stringify(user))
            window.open('user-details.html')
        }
    }
})



