//! ตัวอย่างการสร้างสร้าง class ใน javaScript
class Person {

    //! สร้าง constructor
    constructor(name) {
        this.name = name
    }

    sayHi(){
        console.log('Hi, My name is ' + this.name)
    }

    get gender(){
        return this._gender
    }

    set gender(g){
        this._gender = g
    }

}

//! การสร้าง object หรือ instance
const p = new Person('Samit')
console.log(p.name);
p.sayHi()

p.gender = "Male"
console.log(p.gender);