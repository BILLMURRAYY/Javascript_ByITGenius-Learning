// Synchronous & Asyncronous Programmming in Javascript

//! Synchronous
// function doA(){
//     setTimeout(function(){
//         console.log("This is 1st say message");
//     }, 2000)
// }

// function doB(){
//     console.log("This is 2nd say message");
// }

// // ทดสอบเรียกฟังก์ชันด้านบน
// doA()
// doB()

//! การแก้ปัญหาด้านบนเราจะใช้แบบ Asynchronous
function doA(callback){
    console.log("Loading....");
    setTimeout(function(){
        console.log("This is 1st say message");
        callback() // call myself
    }, 2000)
}

function doB(){
    console.log("This is 2nd say message");
}

//? เรียกทำงาน
doA(function(){
    doB()
})

console.log("---------------------");

//! ตัวอย่างการจำลองโหลดข้อมูลจาก Ajax
function loadNews(cb){
    console.log("Loading....")
    setTimeout(() => {
        cb(
            [
                {id: 1, title: 'a'},
                {id: 2, title: 'b'},
                {id: 3, title: 'c'},
                {id: 4, title: 'd'},
                {id: 5, title: 'e'},
                {id: 6, title: 'f'},
                {id: 7, title: 'g'},
                {id: 8, title: 'h'},
                {id: 9, title: 'i'},
            ]
        )
    }, 2000)
}

//? เรียกใช้งาน
loadNews(function(result) {
    console.log(result);
    console.log("Load data complete")
})
