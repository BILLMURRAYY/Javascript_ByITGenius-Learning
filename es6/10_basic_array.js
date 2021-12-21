//! Join Array
const numbers = [10, 20, 30, 40]
console.log(numbers.join())
console.log(numbers.join(','))
console.log(numbers.join('-'))
console.log(numbers.join('+'))
console.log(numbers.join(' '))

//? หาผลรวมสมาชิก
console.log(numbers[0]+numbers[1]+numbers[2]+numbers[3]) // 100

//? ใช้ loop หาผลรวม
let result = 0
for(let i = 0; i < numbers.length; i++){
    result += numbers[i] 
}

console.log(result); // 100

//? Reduce Array
const result_data = numbers.reduce((sum, number) => {
    return sum +number
}, 0) // 0 = ค่าเริ่มต้น

console.log(result_data); // 100

//! Concat ของ Array เป็นการรวม Array
const myarr1 = [5, 6, 7]
const myarr2 = [8, 9, 10]

//? const myresult = myarr1 + myarr2
const myresult = myarr1.concat(myarr2)
console.log(myresult)
console.log(myarr1)
console.log(myarr2)

//! Push การเติมค่า
const mutate = ['red', 'green']
const count = mutate.push('blue')
console.log(mutate);
console.log(count);

//! Pop // ลบสมาชิกตัวสุดท้ายของ array
const pop = mutate.pop()
console.log(mutate);
console.log(pop)

//! Shift จะเป็นการลบสมาชิกตัวแรกออก
const shift = mutate.shift()
console.log(mutate);
console.log(shift);

//! Unshift เพิ่มสมาชิกกลับเข้าไปที่ตัวแรก
const unshift = mutate.unshift('red')
mutate.unshift('yellow')
console.log(mutate);
console.log(unshift);

console.log("----------------------");

//! Splice // ดึงข้อมูลสมาชิกแบบระบุตำแหน่งที่แน่นอน
const mutate_arr = ['red', 'green', '0', '1', 'blue']
// const spliced = mutate_arr.splice() // Copy Array
// const spliced = mutate_arr.splice(0) // การกำหนดตำแหน่งว่าจะเริ่ม remove จากตัวที่ 0
// const spliced = mutate_arr.splice(1) // ลบตั้งแต่ตัวที่ 1
// const spliced = mutate_arr.splice(1, 1) // ลบจากลำดับที่ 1 และลบออก 1 ตัว 
// const spliced = mutate_arr.splice(2, 2) // ลบจากลำดับที่ 2 และลบออก 2 ตัว 
const spliced = mutate_arr.splice(2, 2, 'white','pink') //ลบค่าเก่า ใส่ค่าใหม่เพิ่มเข้าไปด้วย

console.log(mutate_arr);

console.log("----------------------");

//! Slice // คือการ add ค่าเข้าไปโดยระบุตำแหน่งที่อยากได้
const mutate_arr1 = ['red', 'green', '0', '1', 'blue']
// const sliced = mutate_arr1.slice(1) // เอาค่าตั้งแต่ตัวที่ 1
// const sliced = mutate_arr1.slice(1,2) // ดึงตั้งแต่ตำแหน่งที่ 1 ถึง 2 แต่ไม่รวม 2 นะ
// ถ้าส่งค่า slice เข้าไปเฉยๆ ไม่ระบุตำแหน่ง จะเป็นการ copy array
const sliced = mutate_arr1.slice()
console.log(sliced);

console.log("----------------------");

//! Avoid array Mutationd
const fruits = ['banana', 'apple', 'mango']
//? หากอยากเพิ่ม strawberry เข้าไปหน้า apple โดยไม่เปลี่ยนแปลงค่าใน fruits เดิม จะทำอย่างไร ?

// const newFruit = [
//     ...fruits.slice(0, 1),
//     'strawberry',
//     ...flruits.slice(1)
// ]

// console.log(newFruit); // banana, strawberry, apple, mango
// console.log(fruits); // banana, apple, mango

//?s อยากลบ apple จาก array ตัวใหม่
const newFruit = [
    ...fruits.slice(0, 1),
    ...fruits.slice(2)
]

console.log(newFruit); // banana, mango

console.log("----------------------");

//!! การวนลูป Array
//! For each
const num_arr = ['one', 'two', 'three']
num_arr.forEach( result => {
    console.log(result);
})

console.log("----------------------");

//! For of
for(const v of num_arr){
    if(v == 'two'){
        // break
        continue
    }
    console.log(v);
}

console.log("----------------------");

//! การค้นหาตำแหน่งสมาชิกของ array .indexOf()
const num_arrays = [1, 4, 8, 10, 8, 11, 12]
// const index = num_arrays.indexOf(10)
const index = num_arrays.indexOf(8)
console.log(index);

//! findIndex
const found = num_arrays.findIndex(e => e % 4 == 0)
console.log(found);