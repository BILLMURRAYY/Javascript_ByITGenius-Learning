//! ES 5
var greet = function(name, message){
    return message + name
}

console.log(greet('Samit','Hello '))

//! ES 6
// var arrowGreet = (name, message) => {
//     return message + name
// }

//! ลดรูปกรณีมีการ return เพียงอย่างเดียว
// var arrowGreet = (name, message) => message + name
// console.log(arrowGreet('Somkid','Hello '))

//! ลดรูปต่อไปได้อีก ถ้าฟังก์ชันมีการรับเพียง 1 parameter
var arrowGreet = message => message 
console.log(arrowGreet('Hello Every body'))

//? ตัวอย่าง
var square = x => x  * x
console.log(square(3))
