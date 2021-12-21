const array = [1, 2, 3]
// ----------------[2, 4, 6]
// หรือเรียกว่า mutate array
// for(let i=0; i<array.length; i++){
//     array[i] = array[i] * 2
// }

// console.log(array);

//! วิธีแก้ไข
const result = []
// for(let i=0; i<array.length; i++){
//    const a  = array[i] * 2
//    result.push(a)
// }

array.forEach(e => {
    const a =e * 2
    result.push(a)
});

//! ปัญหายังคงมีอยู่ คือเรื่อง side effect
console.log(result);
console.log(array);

console.log("-------------------");

//! ลองมาใช้ Array Map
//const result_map = array.map(result => result * 2)
//? อาจจะแยกฟังก์ชัน
const multiplyBytwo = result => result  * 2 // nap รอบที่ 1
const multiplyByten = result => result  * 10 // nap รอบที่ 2
console.log(array.map(multiplyBytwo).map(multiplyByten));
//console.log(result_map);
console.log(array);

//! ตัวอย่างการใช้ array map
const pets = [
    { name: 'Bebo' },
    { name: 'Mano' }
]

console.log("-------------------");

// map Object is Array
const result_data = pets.map(e => e.name)
console.log(result_data);

//? ตัวอย่างเพิ่มเติม
const fruits = ['banana', 'apple', 'mango']
// [
//     'Day 1, eat banana',
//     'Day 2, eat apple',
//     'Day 3, eat mango'
// ]

console.log("-------------------");

const result_fruit  = fruits.map((e, i, d) => {
    return `Day ${i + 1} eat ${e} ของเดิม ${d}`
})

console.log(result_fruit)