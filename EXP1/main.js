/** 
 * Tính tiền lương nhân viên
 * Đầu vào: Người dùng nhập tiền lương 1 ngày và số ngày làm
 * Xử lý: Lấy Lương 1 ngày nhân số ngày làm
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