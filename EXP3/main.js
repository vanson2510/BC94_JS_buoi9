/** 
 * Quy đổi tiền đô
 * Đầu vào: Người dùng nhập giá đô hiện tại và số tiền đô cần quy đổi
 * Xử lý: Lấy giá đô hiện tại nhân với số tiền đô cần quy đổi
 * Đầu ra: Hiển thị kết quả
 */


//Dom tới thẻ button
let btnSubmit = document.getElementById("btnSubmit");
btnSubmit.onclick = function () {
    //Dom tới 2 thẻ Input để lấy giá trị user nhập
    let num_1 = document.getElementById("num_1").value;
    let num_2 = document.getElementById("num_2").value;

    // Tính nhân 2 số num_1 và num_2
    let total = num_1 * num_2;
    let rs = "Kết quả là: " + total;

    let pInfo = document.getElementById("pInfo");
    pInfo.innerText = rs;

};