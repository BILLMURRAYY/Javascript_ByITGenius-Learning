//! ES 5
function sayHi(name){
    var name  =  name || 'Chai'
    console.log("Hi " + name);
}

sayHi()
sayHi('Samit')

//! ES 6
function sayHello(name = 'Chai'){
    console.log("Hi " + name);
}

sayHello()
sayHello('Winai')