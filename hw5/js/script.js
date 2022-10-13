// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :

// // -- отримує текст з параграфа з id "content"
// let content = document.getElementById('content')
// console.log(content.innerText);

// // -- отримує текст з блоку з id "rules"
// let rules = document.getElementById('rules')
// console.log(rules.innerText);

// // -- замініть текст параграфа з id 'content' на будь-який інший
// content.innerText='замініть текст параграфа з id \'content\' на будь-який інший';

// // -- замініть текст параграфа з id 'rules' на будь-який інший
// rules.innerText=' замініть текст параграфа з id \'rules\' на будь-який інший';

// // -- змініть кожному елементу колір фону на червоний
// rules.style.background = 'red'
// content.style.background = 'red'

// // -- змініть кожному елементу колір тексту на синій
// rules.style.background = 'blue'
// content.style.background = 'blue'

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log

// // -- отримати всі елементи з класом fc_rules. визначити їм 2 події "клік", одна вивдоить текст елементу, інша довільний ьексь
// let fcRules = document.getElementsByClassName('fc_rules')

// // -- поміняти колір тексту у всіх елементів fc_rules на червоний
// for (let i = 0; i < fcRules.length; i++) {
//     const fcRule = fcRules[i];
//     fcRule.style.color = 'red'
// }
