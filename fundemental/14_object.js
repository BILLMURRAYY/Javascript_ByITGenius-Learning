// การสร้างข้อมูล object
var person = {
    firstName: "Samit", 
    lastName:"Koyom", 
    age: 35,
    gender: "Male",
    fullName: function(){
       return this.firstName + " " + this.lastName;
    }
}

// การเรียกหรือการเข้าถึงสมาชิกใน Object
// Method 1
// ojectName.propertyName
console.log(person.firstName);

// Method 2
// objectName["propertyName"]
console.log(person["lastName"]);

// Method3
// ojectName.methodName()
console.log(person.fullName());

// Object Nested มีการซ้อนกันมากกว่า 1 ชั้น
var user = {
    id: "1",
    email: "john@email.com",
    personInfo: {
        name: "John",
        address: {
            line1: "255 Piboonsongkram Rd.",
            line2: "Bangsue Distric",
            city: "Bangkok",
            zipcode: "10300"
        }
    }
}

// การเข้าถึงสมาชิก
console.log(user.personInfo);
console.log(user.personInfo.name);
console.log(user.personInfo.address);
console.log(user.personInfo.address.city);