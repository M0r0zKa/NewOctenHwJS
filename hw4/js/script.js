// // - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// const random = ()=>{
//     let array =[];
//     for (let i = 0; i < 100; i++) {
//         array.push(Math.floor(Math.random()*100))
//     }
//     return array
// }
// console.log(random());

// // // - Змінти попередню функцію, щоб діапазон можна було визначити через аргументи.
// const random = (max)=>{
//     let array =[];
//     for (let i = 0; i < 100; i++) {
//         array.push(Math.floor(Math.random()*max))
//     }
//     return array
// }
// console.log(random(70));

// // - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
// console.log(random(70).sort((a, b) => a-b));

// // - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, за лишивши тільки парні числа
// console.log(random(70).filter((value) => value % 2 === 0));

// // - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// console.log(random(70).map(value => {
//     return value + ""
// }));

// // - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// function User(id, name, surname , email, phone){
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let user = new User(1,'Vlad','Moroz','chesteroff97@gmail.com', '+380995590435')
// console.log(user);

// // створити пустий масив, наповнити його 10 об'єктами new User(....)
// let userArray = [];
// userArray.push(new User(1,'Vlad','Moroz','chesteroff97@gmail.com', '+380995590435'))
// userArray.push(new User(2,'Vlad','Moroz','chesteroff97@gmail.com', '+380995590435'))
// userArray.push(new User(3,'Vlad','Moroz','chesteroff97@gmail.com', '+380995590435'))
// userArray.push(new User(4,'Vlad','Moroz','chesteroff97@gmail.com', '+380995590435'))
// userArray.push(new User(5,'Vlad','Moroz','chesteroff97@gmail.com', '+380995590435'))
// userArray.push(new User(6,'Vlad','Moroz','chesteroff97@gmail.com', '+380995590435'))
// userArray.push(new User(7,'Vlad','Moroz','chesteroff97@gmail.com', '+380995590435'))
// userArray.push(new User(8,'Vlad','Moroz','chesteroff97@gmail.com', '+380995590435'))
// userArray.push(new User(9,'Vlad','Moroz','chesteroff97@gmail.com', '+380995590435'))
// userArray.push(new User(10,'Vlad','Moroz','chesteroff97@gmail.com', '+380995590435'))

// // Взяти масив цей  User[] та: Відфільтрувати , залишивши тільки об'єкти з парними id (filter) та Відсортувати його по id. по зростанню (sort)
// console.log(userArray.filter(value => value.id % 2 === 0).sort((a, b) => a - b));