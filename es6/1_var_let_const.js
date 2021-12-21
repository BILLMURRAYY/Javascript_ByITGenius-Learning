//! ปัญหาของการใช้ var
// var name = "John"
// {
//     var name = "Jany"
//     console.warn(name);
// }

// function a(){
//     var name = "Jany"
//     console.warn(name);
// }

// console.warn(name); // John

//! // ตัวอย่างปัญหาอื่นๆ ที่เกิดจาก Var
// var messages = ['Hello', 'JavaScript', 'es2015'];
// for(var i=0; i<=messages.length; i++){ //change var to let
//     console.warn(i);

//     setTimeout(function(){
//         console.warn(i);
//         console.warn(messages[i])
//     }, 1000)
    
// }


//! ตัวอย่างการใช้ let
// var fullname;
// var fullname;
// console.log(fullname); // undefined

// let fullname;
// let fullname;
// console.log(fullname); // error

// let name = "John"
// {
//     let name = "Jany"
//     console.log(name);
// }

// name = "Joey"
// console.log(name);

// let messages = ['Hello', 'JavaScript', 'es2015'];
// for (let i = 0; i < messages.length; i++) {  
//     // console.log(i)
//     setTimeout(function() {
//       // onsole.log(i)
//       console.log(messages[i])
//     }, 1000);
// }

//! ตัวอย่างการใช้ Const
// const firstname
// console.log(firstname);

// const firstname = "Samit"
//? // ลองเปลี่ยนค่า
// firstname = "Somchai"
// console.log(firstname)

const person = {}
person.name = "Somkid"
person.email = "somkid@email.com"
person.name = "ssss"
person.email = "xxx@email.com"
console.log(person);