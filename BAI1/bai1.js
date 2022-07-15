


function tinhTienThue(){
    var ten = document.getElementById("hoten").value;
    var thuNhap = Number(document.getElementById("thuNhap").value);
    var soNguoi = Number(document.getElementById("soNguoi").value);

    var tienThue = thuNhap - 4e6 - soNguoi*16e5;
    var tinh = 0;

    if(0< thuNhap&&thuNhap <=6e7){
        tinh = 0.05 * tienThue;
    }else if(6e7 <thuNhap&&thuNhap <=12e7){
        tinh = 0.1 *tienThue;

    }else if(12e7<thuNhap&&thuNhap <=21e7){
        tinh = 0.15 *tienThue;
    }else if(21e7<thuNhap&&thuNhap <=384e6){
        tinh = 0.2 *tienThue;
    }else if(384e6<thuNhap&&thuNhap <=624e6){
        tinh = 0.25 *tienThue;
    }else if(624e6<thuNhap&&thuNhap <=96e7){
        tinh = 0.3 *tienThue;
    }else if(96e7<thuNhap){
        tinh = 0.35 *tienThue;
    }else{
        alert("sô tiền không hợp lệ")
    }
document.getElementById("txt").innerHTML ="Họ tên:" + ten + "; Tiền thuế thu nhập cá nhân :" +tinh.toLocaleString() +" vnd";

}
document.getElementById("btnT").onclick = tinhTienThue;