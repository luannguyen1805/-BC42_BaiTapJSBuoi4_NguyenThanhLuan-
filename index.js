/********* BÀI TẬP 1 : Xuất 3 số theo thứ tự tăng dần
*input: 3 số nguyên num1, num2, num3
*Process: (pseudo code)
    1. input (user interface) UI
    2. kiểm tra num1 có lớn hơn num2 và num3, sau đó kiêm tra num2 có lớn num3 => sắp xếp(if else)
    3. kiểm tra num2 có lớn hơn num1 và num3, sau đó kiêm tra num1 có lớn num3 => sắp xếp(if else)
    4. kiểm tra num3 có lớn hơn num2 và num1, sau đó kiêm tra num2 có lớn num1 => sắp xếp(if else)
*Output: 3 số theo thứ tự tăng dần.
*/
document.getElementById("sapXep").onclick = function () {
    let num1 = +document.getElementById("num1").value;
    let num2 = +document.getElementById("num2").value;
    let num3 = +document.getElementById("num3").value;
    let result1 = document.getElementById("resultBai1");

    if (num1 > num2 && num1 > num3) {
        if (num2 > num3) {
            result1.value = num1 + "," + num2 + "," + num3;
        }
        else {
            result1.value = num1 + "," + num3 + "," + num2;
        }
    } else if (num2 > num3 && num2 > num1) {
        if (num1 > num3) {
            result1.value = num2 + "," + num1 + "," + num3;
        }
        else {
            result1.value = num2 + "," + num3 + "," + num1;
        }
    } else if (num3 > num1 && num3 > num2) {
        if (num1 > num2) {
            result1.value = num3 + "," + num1 + "," + num2;
        }
        else {
            result1.value = num3 + "," + num2 + "," + num1;
        }
    }
}
document.getElementById("reset1").onclick = function () {
    document.getElementById("num1").value = '';
    document.getElementById("num2").value = '';
    document.getElementById("num3").value = '';
    document.getElementById("resultBai1").value = '';
}

/********* BÀI TẬP 2 : Chương trình "Chào hỏi"
*input: Chọn thành viên (thẻ option)
*Process: (pseudo code)
    1. input (user interface) UI
    2. tạo các thành viên cần gửi lời chào bằng thẻ option
    3. dùng switch case để gán lời chào cho các thành viên được chọn.
*Output: xuất ra lời chào :"Xin chào ... !"
*/
document.getElementById("hi").onclick = function () {
    let sayHi = document.getElementById("sayHi").value;
    let result2 = document.getElementById("resultBai2");
    switch (sayHi) {
        case "B":
            result2.value = "Xin chào Bố!";
            break;
        case "M":
            result2.value = "Xin chào Mẹ!";
            break;
        case "A":
            result2.value = "Xin chào Anh trai!";
            break;
        case "E":
            result2.value = "Xin chào Em gái!";
            break;
        default:
            result2.value = "Xin Chào!!"
            break;
    }
}

/********* BÀI TẬP 3 : Đếm số chẳn lẻ
*input: nhập 3 số nguyên
*Process: (pseudo code)
    1. input (user interface) UI
    2. khai báo các biến
    3. kiểm tra số đó có chia hết cho 2 không? nếu chia hết cho 2 thì là số chẳn, ngược lại là số lẽ.
    4. tính có bao nhiêu số là số chẳn , số lẻ đã được lọc ra.
*Output: xuất có bao nhiêu số chẳn, báo nhiêu sô lẻ
*/
document.getElementById("countNum").onclick = function () {
    let so1 = +document.getElementById("so1").value;
    let so2 = +document.getElementById("so2").value;
    let so3 = +document.getElementById("so3").value;
    let soChan = 0;
    let soLe = 0;
    let result3 = document.getElementById("resultBai3");
    if (so1 % 2 === 0) {
        soChan++;
    } else {
        soLe++;
    }
    if (so2 % 2 === 0) {
        soChan++;
    } else {
        soLe++;
    }
    if (so3 % 2 === 0) {
        soChan++;
    } else {
        soLe++;
    }
    result3.value = `Có ${soChan} số chẳn và ${soLe} số lẻ`;
}
document.getElementById("reset3").onclick = function () {
    document.getElementById("so1").value = '';
    document.getElementById("so2").value = '';
    document.getElementById("so3").value = '';
    document.getElementById("resultBai3").value = '';
}

/********* BÀI TẬP 4 : Đoán hình tam giác
*input: nhập 3 độ dài cạnh
*Process: (pseudo code)
    1. input (user interface) UI
    2. khai báo các biến: độ dài cạnh 1, 2, 3 (a,b,c)
    - kiểm điều kiện 3 cạnh có phải là hình tam giác không : a+b>c,a+c>b; b+c>a nếu thỏa điều kiện thì là không phải tam giác.
    3. kiểm tra, phân loại các loại tam giác:
    - Tam giác cân nếu 2 cạnh có độ dài bằng nhau
    - tam giác đều nếu 3 cạnh có đọ dài bằng nhau
    - Tam giác vuông nếu bình phương của cạnh huyền bằng tổng các bình phương của hai cạnh góc vuông.
    - không phải 3 trường hợp trên là tam giác thường.
*Output: xuất có bao nhiêu số chẳn, báo nhiêu sô lẻ
*/

document.getElementById("btnGuess").onclick = function () {
    let edge1 = +document.getElementById("edge1").value;
    let edge2 = +document.getElementById("edge2").value;
    let edge3 = +document.getElementById("edge3").value;
    let guess1 = document.getElementById("resultBai4");
    if (edge1 + edge2 > edge3 && edge1 + edge3 > edge2 & edge3 + edge2 > edge1) {
        if (edge1 === edge2 && edge2 === edge3) {
            guess1.value = "Tam giác đều.";
        }
        else if (edge1 === edge2 || edge2 === edge3 || edge1 === edge3) {
            guess1.value = "Tam giác cân.";
        }
        else if (Math.pow(edge1, 2) === Math.pow(edge2, 2) + Math.pow(edge3, 2) ||
            Math.pow(edge2, 2) === Math.pow(edge1, 2) + Math.pow(edge3, 2) ||
            Math.pow(edge3, 2) === Math.pow(edge2, 2) + Math.pow(edge1, 2)) {
            guess1.value = "Tam giác vuông.";
        }
        else {
            guess1.value = "Một loại tam giác khác.";
        }
    }
    else {
        guess1.value = "ĐÂY KHÔNG PHẢI LÀ HÌNH TAM GIÁC!";
    }
}
document.getElementById("reset4").onclick = function () {
    document.getElementById("edge1").value = '';
    document.getElementById("edge2").value = '';
    document.getElementById("edge3").value = '';
    document.getElementById("resultBai4").value = '';
}

// button

let btnBai1 = document.getElementById("btnBai1");
let btnBai2 = document.getElementById("btnBai2");
let btnBai3 = document.getElementById("btnBai3");
let btnBai4 = document.getElementById("btnBai4");
let bai1 = document.getElementById("bai1");
let bai2 = document.getElementById("bai2");
let bai3 = document.getElementById("bai3");
let bai4 = document.getElementById("bai4");

btnBai1.onclick = function () {
    if (bai1.style.display = "none") {
        bai1.style.display = "block";
        bai2.style.display = "none";
        bai3.style.display = "none";
        bai4.style.display = "none";
    }
}
btnBai2.onclick = function () {
    if (bai2.style.display = "none") {
        bai2.style.display = "block";
        bai1.style.display = "none";
        bai3.style.display = "none";
        bai4.style.display = "none";
    }
}
btnBai3.onclick = function () {
    if (bai3.style.display = "none") {
        bai3.style.display = "block";
        bai2.style.display = "none";
        bai1.style.display = "none";
        bai4.style.display = "none";
    }
}
btnBai4.onclick = function () {
    if (bai4.style.display = "none") {
        bai4.style.display = "block";
        bai2.style.display = "none";
        bai3.style.display = "none";
        bai1.style.display = "none";
    }
}