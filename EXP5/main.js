/**
 * Tính tổng 2 ký số
 * Đầu vào: Người dùng nhập số có 2 chữ số
 * Xử lý: 
 * Giả sử số nhập vào là n
 * -Lấy số hàng đơn vị: n % 10
 * -Lấy số hàng chục: n / 10
 * -Làm tròn hàng chục: Math.floor
 * 
 * Đầu ra: Hiển thị kết quả 
 * 
 */

let btnSubmit = document.getElementById("btnSubmit");
btnSubmit.onclick = function(){
    let number_n = document.getElementById("number_n").value;

    //Lấy số hàng đơn vị và hàng chục

    let hangDv = number_n % 10;
    let hangChuc = Math.floor(number_n / 10);
    
    let sum = hangChuc + hangDv;
    let rs = "Tổng 2 ký số là: " + sum;

    let pInfo = document.getElementById("pInfo");
    pInfo.innerText = rs;

};