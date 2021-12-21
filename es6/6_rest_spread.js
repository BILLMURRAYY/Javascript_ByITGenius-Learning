//! Ex 1
//! Spread
// const arr = [4, 5, 6]
// const append = [1, 2, 3 , arr] // ยังไม่ต้องการ

// console.log(append);

//! Ex 2
const arr = [4, 5, 6]
const append = [1, 2, 3 , ...arr] // spread operator
console.log(append);

//! Ex 3
const arr1 = ['a', 'b', 'c']
const arr2 = ['d', 'e', 'f']
// arr1.push(arr2)
arr1.push(...arr2)
console.log(arr1);

//! Ex 4
function add(x, y, z){
    return x + y + z
}

const numbers = [1, 2, 3]
// const sum = add(1, 2, 3)
// const sum = add(numbers) // not working..
const sum = add(...numbers) // spread operator
console.log(sum);

//! Rest Parameter
function howManyArgs(...args){
        console.log(args.length);
        console.log(args)
}

howManyArgs()
howManyArgs(4)
howManyArgs(4,8,7,6)

//! Ex 1
function multiply(multiplier, ...array){
    console.log(array); // 10, 20, 30
    return array.map(e => multiplier * e)
}

const result = multiply(2, 10, 20, 30)
console.log(result); // 20, 40, 60