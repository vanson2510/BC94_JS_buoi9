/**
 * Tính diện tích, chu vi hình chữ nhật
 * Đầu vào: Người dùng nhập chiều dài và chiều rộng
 * Xử lý:
 *  -Diện tích: Dài* rộng
 *  -Chu vi: (dài+ rộng)*2
 * Đầu ra: Hiển thị kết quả
 */

//Dom tới thẻ button có id là btnSubmit
let btnSubmit = document.getElementById("btnSubmit");
btnSubmit.onclick = function(){
    let num_1 = document.getElementById("num_1").value;
    let num_2 = document.getElementById("num_2").value;
    // Chuyển đổi kiểu dữ liệu
    num_1 = Number(num_1);
    num_2 = Number(num_2);

    // Tính diện tích

    let total = num_1 * num_2;
    let dt = "Diện tích là: " + total

    let pInfo = document.getElementById("pInfo");
    pInfo.innerText = dt;
    


};

//Dom tới thẻ button có id là btnSubmit_1
let btnSubmit_1 = document.getElementById("btnSubmit_1");
btnSubmit_1.onclick = function(){
    let num_1 = document.getElementById("num_1").value;
    let num_2 = document.getElementById("num_2").value;
    // Chuyển đổi kiểu dữ liệu
    num_1 = Number(num_1);
    num_2 = Number(num_2);

    // Tính chu vi
    
    let sum = num_1 + num_2;
    let cv = "Chu vi là: " + sum * 2;
    
    let pInfo_1 = document.getElementById("pInfo_1");
    pInfo_1.innerText = cv;
};