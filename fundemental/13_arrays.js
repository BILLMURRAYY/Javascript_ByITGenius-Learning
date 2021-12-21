// Basic Arrays
var name = ['John', 'Joe', 'Jack', 'Jane']; // จะเกิดปัญหาเมื่อเรียกใช้งานสมาชิกในตัวแปร name นี้
var fruits = new Array('Apple', 'Banana', 'Orange', 'Mango');

// ex.
// console.log(typeof(name));
// console.log(typeof(window.name)); // is string

// แสดงผลสมาชิกออกมา
// console.log(name)
// เช็คชนิดข้อมูลตัวแปรนี้
// console.log(typeof(name));

var firstname = ['John', 'Joe', 'Jack', 'Jane']; 
console.log(firstname[0]);
console.log(firstname[1], firstname[3]);

// เปลี่ยนค่าสมาชิก
firstname[1] = "Jany";
console.log(firstname);

// เพิ่มสมาชิกใหม่เข้าไป
firstname[4] = "Johny";
console.log(firstname);
console.log(fruits);

// การวนลูปอ่านสมาชิกของ array
for(var i=0; firstname[i]; i++){
    console.log(firstname[i]);
}

// การวนลูปด้วยฟังก์ชัน forEach
fruits.forEach(myFruit);

function myFruit(value){
    console.log(value)
}