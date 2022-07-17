

function anHien() {
    var loaiKhachHang = document.getElementById("khachHang").value;
    var soKN =document.getElementById("soKN");

    if (loaiKhachHang == "DNnghiep") {
      soKN.style.display = "block";
    } else {
        soKN.style.display = "none";
    }
}

function tinhTien() {
    var loaiKhachHang = document.getElementById("khachHang").value;
    var maKH = Number(document.getElementById("maKH").value);
    var soKenh = Number(document.getElementById("soKenh").value);
    var soKN = Number(document.getElementById("soKN").value);

    var tiencap = 0;
   
   
    switch (loaiKhachHang) {
        case "DNnghiep":
            if (soKN < 10) {
                tiencap = 15 + 75 + 50 * soKenh;;
            } else {
                tiencap = 15 + 75 + 50 * soKenh + (soKN - 10) * 5;
            }

            break;
        
        case "NDan":
            

            tiencap = 4.5 + 20.5 + (7.5 * soKenh);
            
            
         
            break;

        default:
            alert("hãy chọn loại khách hàng");
            break;

            
    }
    
    
    document.getElementById("txtResult").innerHTML ="Mã khách hàng:" + maKH +"; Tiền cáp: "+" $" + tiencap.toLocaleString();

}


document.getElementById("btnT").onclick = tinhTien;