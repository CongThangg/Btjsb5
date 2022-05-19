// Bài 1: Quản lý tuyển sinh 

function kiemTraKetQua() {
  var diem1 = Number(document.getElementById('inputdiem1').value);
  var diem2 = Number(document.getElementById('inputdiem2').value);
  var diem3 = Number(document.getElementById('inputdiem3').value);
  var diemChuan = Number(document.getElementById('inputdiemChuan').value);

  var diemKhuVuc = Number(document.getElementById('selectkhuVuc').value);
  var diemDoiTuong = Number(document.getElementById('selectdoiTuong').value);

  var ketQua = '';
  if (diem1 == 0 || diem2 == 0 || diem3 == 0) {
    ketQua = 'Bạn đã rớt';
  } else {
    var tongDiem = diem1 + diem2 + diem3 + diemKhuVuc + diemDoiTuong;
    ketQua = tongDiem >= diemChuan ? 'Bạn đã đậu' : 'Bạn đã rớt'
  }
  document.getElementById('result1').innerHTML = 'Tổng điểm : ' + tongDiem + '<br>' + 'Kết quả : ' + ketQua;
}

document.getElementById('btnCalc1').onclick = kiemTraKetQua;


//-------------------------------------------------------------------------------------------------------------


// BÀI 2: Tính tiền điện

const GIA50KW_DAU = 500;
const GIAKW50_100 = 650;
const GIAKW100_200 = 850;
const GIAKW200_350 = 1100;
const GIAKWTREN_350 = 1300;

function tinhTienDien() {
    var hoTen = document.getElementById("nhapHoTen").value;
    var soKw = Number(document.getElementById("soKw").value);
    
    var tienDien = soTienTrenKw(soKw);

    document.getElementById("result2").innerHTML =
        "Khách hàng : " +
        hoTen +
        "<br>" +
        "Số tiền điện là : " +
        tienDien.toLocaleString() +
        " VNĐ";
}

function soTienTrenKw(soKw) {
    if (0 < soKw && soKw <= 50) {
        return soKw * GIA50KW_DAU;
    } else if (50 < soKw && soKw <= 100) {
        return 25000 + (soKw - 50) * GIAKW50_100;
    } else if (100 < soKw && soKw <= 200) {
        return 57500 + (soKw - 100) * GIAKW100_200;
    } else if (200 < soKw && soKw <= 350) {
        return 142500 + (soKw - 200) * GIAKW200_350;
    } else if (350 < soKw) {
        return 307500 + (soKw - 350) * GIAKWTREN_350;
    } else {
        alert("Số Kw không hợp lệ");
    }
    document.getElementById("result2").innerHTML = tinhTienDien;
}

//--------------------------------------------------------------------------------------

// Bài 3:Tính thuế thu nhập cá nhân

// const THUE0_60 = 0.05;
// const THUE60_120 = 0.1;
// const THUE120_210 = 0.15;
// const THUE210_384 = 0.2;
// const THUE384_624 = 0.25;
// const THUE624_960 = 0.3;
// const THUETREN960 = 0.35;

// function tinhThueCaNhan(){
//   var hoTen = document.getElementById('inputhoTen3').value;
//   var tongThuNhap = Number(document.getElementById('inputtongThuNhap').value);
//   var phuThuoc = Number(document.getElementById('inputphuThuoc').value);

//   var thuNhap = tongThuNhap - 4e+6 - (phuThuoc * 1.6e+6);

//   var tienThue = mucThueThuNhap(thuNhap);
//   document.getElementById('txtResult3').innerHTML = 'Họ tên : ' + hoTen + '<br>' + 'Tiền thuế phải đóng là : ' + tienThue.toLocaleString() + ' VNĐ';
// }

// function mucThueThuNhap(thuNhap){
//   if(0 < thuNhap && thuNhap <= 60e+6){
//     return thuNhap * THUE0_60;
//   }else if(60e+6 < thuNhap && thuNhap <= 120e+6){
//     return thuNhap * THUE60_120;
//   }else if(120e+6 < thuNhap && thuNhap <= 210e+6){
//     return thuNhap * THUE120_210;
//   }else if(210e+6 < thuNhap && thuNhap <= 384e+6){
//     return thuNhap * THUE210_384;
//   }else if(384e+6 < thuNhap && thuNhap <= 624e+6){
//     return thuNhap * THUE384_624;
//   }else if(624e+6 < thuNhap && thuNhap <= 960e+6){
//     return thuNhap * THUE624_960;
//   }else if(960e+6 < thuNhap){
//     return thuNhap * THUETREN960;
//   }else{
    
//   }
// }
// document.getElementById('btnCalc3').onclick = tinhThueCaNhan;

//--------------------------------------------------------------------

// Bài 4: Tính tiền cáp
