/**
 * Tính giá trị trung bình
 * Đầu vào: Người dùng nhập vào 5 số thực
 * Xử lý: Tính tổng 5 số thực, sau đó chia cho 5
 * Đầu ra: Hiển thị kết quả
 */

let btnSubmit = document.getElementById("btnSubmit");
btnSubmit.onclick = function(){
    // Dom tới 5 thẻ input để lấy giá trị user nhập
    let num_1 = document.getElementById("num_1").value;
    let num_2 = document.getElementById("num_2").value;
    let num_3 = document.getElementById("num_3").value;
    let num_4 = document.getElementById("num_4").value;
    let num_5 = document.getElementById("num_5").value;

    // Chuyển kiểu dữ liệu
    num_1 = Number(num_1);
    num_2 = Number(num_2);
    num_3 = Number(num_3);
    num_4 = Number(num_4);
    num_5 = Number(num_5);

    // Tính tổng 5 số thực

    let total = num_1 + num_2 + num_3 + num_4 + num_5;
    // console.log(total);

    let rs = "Kết quả là: " + total / 5;
    console.log(rs);
    // Dom tới thẻ p có id pInfo
    let pInfo = document.getElementById("pInfo");
    pInfo.innerText = rs;

};
