// // - створити функцію яка обчислює та повертає площу прямокутника висотою
// const S = (a,b)=> a*b;
// console.log(S(5, 10));

// // - створити функцію яка обчислює та повертає площу кола
// function S(r) {
// return Math.PI * Math.pow(r,2)
// }
// console.log(S(10));

// // - створити функцію яка обчислює та повертає площу циліндру
// const S = (r,h)=> {
//     let a = r+h
//     return  2*Math.PI*r*a
// }
// console.log(S(10, 20));

// // - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// function num() {
//     let min = arguments[0];
//     let max = arguments[0];
//     for (let i = 0; i < arguments.length; i++) {
//         if(min > arguments[i]){
//             min = arguments[i]
//         }else if(max < arguments[i]) {
//              max = arguments[i]
//         }
//     }
//     console.log(min)
//     return  max
// }
// console.log(num(1, 2, 3, 4));

// - створити функцію яка  створює блок з текстом. Текст задати через аргумент

// // - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function liCreater(text) {
//     document.write('<ul>');
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write('</ul>');
// }
//
// liCreater('text')

// // - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// // Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function liCreater(text,li) {
//     document.write('<ul>');
//     for (let i = 0; i < li; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write('</ul>');
// }
//
// liCreater('text',10)


// // - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let array = [1,2,true,'name'];
// const ul = (arr) =>{
//     document.write('<ul>')
//     for (let i = 0; i < arr.length; i++) {
//         const arrElement = arr[i];
//         document.write(`<li>${arrElement}</li>`)
//
//     }
//     document.write('</ul>')
// }
// ul(array)