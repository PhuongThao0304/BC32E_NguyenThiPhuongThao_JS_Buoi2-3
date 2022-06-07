/* Bài 1

Mô hình 3 khối: 
1. Đầu vào 
- lương 1 ngày
- số ngày làm việc 
2. Xử lý 
- gán biến lương 1 ngày
- gán biến số ngày làm việc
- Gán biến tiền lương (salary) = lương 1 ngày x số ngày làm việc 
3. Đầu ra
- Tiền lương tương ướng 

*/


document.getElementById('tinhSalary').onclick = function () {
    var wageHour = document.getElementById ('wageHour').value;
    var workingDay = document.getElementById('workingDay').value;

    var finalSalary = wageHour * workingDay; 

    var textStyle = document.getElementById('yourSalary');
    textStyle.style.color = 'orange';
    textStyle.style.fontWeight = 'bolder';
    document.getElementById('Salary').innerHTML = finalSalary + " VNĐ";
}



/* BÀI 2: TÍNH GIÁ TRỊ TRUNG BÌNH CỦA 5 SỐ THỰC 
Mô hình 3 khối: 
1. Đầu vào 
- Gía trị của 5 số thực
2. Xử lý 
- gán giá trị cho từng số thực 
- tính tổng 5 số thực 
- tính trung bình cộng = tổng/5
3. Đầu ra
- Giá trị trung bình 
*/

document.getElementById ('average').onclick = function () {
    var soN1 = Number(document.getElementById('soThuc1').value);
    var soN2 = Number(document.getElementById('soThuc2').value);
    var soN3 = Number(document.getElementById('soThuc3').value);
    var soN4 =Number(document.getElementById('soThuc4').value);
    var soN5 = Number(document.getElementById('soThuc5').value);
    var trungBinh = 0;
    trungBinh = (soN1 + soN2 + soN3 + soN4 + soN5)/5;
    document.getElementById('trungBinh').innerHTML= trungBinh;
}


/* BÀI 3: Exchange money 
Mô hình 3 khối: 
1. Đầu vào 
- ExchangeRate (tỉ giá)
- Số tiền USD muốn đổi 
2. Xử lý 
- gán giá trị cho tỉ giá 
- Gán gái trị cho số tiền $ muốn đổi 
- tính số tiền Việt quy đổi = tỉ giá x số tiền
3. Đầu ra
- Giá trị đã quy đổi sang VND 
*/


document.getElementById('buttonTinh').onclick= function (){
    var exchangeRate = 23500; 
    var tienUsd = document.getElementById('amountUSD').value;
    var ketQua = 0

    // Tính
    ketQua = exchangeRate*tienUsd;
    // xuất kết quả ra giao diện
    document.getElementById ('ketQua').innerHTML= ketQua + " VNĐ";
}





/* BÀI 4: Diện tích, chu vi hình chữ nhật 
Mô hình 3 khối: 
1. Đầu vào 
- Chiều dài
- chiều rộng
2. Xử lý 
- gán giá trị cho chiều dài, chiều rộng 
- Diện tích = chiều dài*chiều rộng
- Chu vi = (dài + rộng) *2
3. Đầu ra
- Giá trị diện tích 
- Giá trị chu vi 
*/

document.getElementById('xuLy').onclick = function () {
    var chieuDai = Number(document.getElementById('chieuDai').value);
    var chieuRong = Number(document.getElementById('chieuRong').value);
    var chuVi = (chieuDai + chieuRong)*2;
    var dienTich = chieuDai*chieuRong; 
    document.getElementById('chuVi').innerHTML = chuVi;
    document.getElementById ('dienTich').innerHTML = dienTich;
    
}

/* BÀI 5: Tổng 2 ký số 
Mô hình 3 khối: 
1. Đầu vào 
- số có 2 chữ số 
2. Xử lý 
- Tính số hàng chục: n/10  (nhớ làm tròn số)
- Tính số hàng đơn vị: n%10 (lấy số dư)
3. Đầu ra
- tổng 2 của số hàng chục và số hàng đơn vị 
*/

// var soNguyen = 25;
// var hangChuc = Math.floor(soNguyen/10);
// var hangDonvi = soNguyen % 10;
// var tongSo = hangChuc + hangDonvi; 

// console.log ("Bài 5: Tổng giá trị của 2 ký số là: " + tongSo);

document.getElementById('tong2So').onclick = function() {
    var soThuc = document.getElementById('number2').value;
    var hangChuc = Math.floor(soThuc/10);
    var hangDonvi = soThuc%10; 
    var kquaTong = hangChuc + hangDonvi; 
    document.getElementById('kquaTong').innerHTML=kquaTong;
}



