// รับค่าจาก input ในฟอร์ม
function submitform(){
    var fullname = document.myform.fullname.value;
    var address = document.myform.address.value;
    console.log(fullname);
    console.log(address);

    document.getElementById("result").innerHTML = "ชื่อ: " + fullname + "<br>ที่อยู่: " + address;
}

// Complete Day 2