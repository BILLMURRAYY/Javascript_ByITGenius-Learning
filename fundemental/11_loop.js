// For Loop
var num;
for(num=1; num <= 10; num++){
    if(num > 5){
        console.log("Middle");
        break; // ออกจาก loop
        // continue;
    }
    console.log(num)
}

// while Loop
var i = 0;
while(i < 5){
    console.log(i);
    i++;
}

// While infinity loop
/*
while(true){
    console.log(i)
    i++;
}
*/

var a = 0;

while(a <= 10){
    console.log('*'.repeat(a));
    a++;
}


var j = 10;

while(j){
    console.log('*'.repeat(j));
    j--;
}