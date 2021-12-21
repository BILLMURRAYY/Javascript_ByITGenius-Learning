async function f(){

    let promise = new Promise((resolve, reject) => {
        setTimeout( () => resolve("done"), 2000)
    })

    let result = await promise // มันจะรอจนกว่า promise ทำงานเสร็จ
    console.log(result)

}

//? เรียกใช้ฟังก์ชัน f()
f()