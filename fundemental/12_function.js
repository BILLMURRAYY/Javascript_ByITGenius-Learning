// การฟังก์ชันแบบไม่มีการรับ parameter
function wakeup(){
    console.log('Hey! wakeup now ');
}

// ฟังก์ชันแบบมีการับ parameter
function sayHello(name){
    console.log("Hello " + name)
}

// ฟังก์ชันแบบมี parameter หลายตัว
function calArea(width, height){
    var area = width * height;
    return area;
}

// การเรียกใช้งานฟังก์ชัน
wakeup();
sayHello("Samit");
console.log("พื้นที่คือ " + calArea(3, 4) + " ตรม.");

// ฟังก์ชัน Expressions
// เป็นการเก็บฟังก์ชันลงในตัวแปร
var action = function(a, b){ // ฟังก์ชันแบบนี้เราเรียกว่า anonymous function
    return a * b;
}

var result = action(4, 3);

console.log(action(3,5 ));
console.log(result);