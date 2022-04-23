function getEle(id) {
  return document.getElementById(id);
}
// bài 1
const TongKet = 0;
const UuTien = 0;
function timKhuVuc(khuVuc) {
  switch (khuVuc) {
    case "a":
      return 2;
      break;
    case "b":
      return 1.5;
      break;
    case "c":
      return 1;
      break;
    default:
      alert("Nhập lại Khu Vực");
      break;
  }
}
function timDoiTuong(doiTuong) {
  switch (doiTuong) {
    case 0:
      return 0;
      break;
    case 1:
      return 2.5;
      break;
    case 2:
      return 1.5;
      break;
    case 3:
      return 1;
      break;
    default:
      alert("Nhập lại đối tượng");
      break;
  }
}
function diemUuTien(doiTuong, khuVuc) {
  var dt = timDoiTuong(doiTuong);
  var kv = timKhuVuc(khuVuc);
  var diem = dt + kv;
  return diem;
}
function diemTongKet(diemToan, diemLy, diemHoa, doiTuong, khuVuc) {
  var UuTien = diemUuTien(doiTuong, khuVuc);
  var TongKet =
    (diemToan + diemLy + diemHoa) / 3 + diemUuTien(doiTuong, khuVuc);
  return TongKet;
}
function soSanhDiem(diemChuan, TongKet) {
  if (diemChuan <= TongKet) getEle("kiemTraKetQua").innerHTML = "Đã đậu";
  else getEle("kiemTraKetQua").innerHTML = "Đã rớt";
}
document.getElementById("enterExc_1").onclick = function () {
  var diemChuan = getEle("diemChuan").value * 1;
  var diemToan = getEle("diemToan").value * 1;
  var diemLy = getEle("diemLy").value * 1;
  var diemHoa = getEle("diemHoa").value * 1;
  var doiTuong = getEle("doiTuong").value * 1;
  var khuVuc = getEle("khuVuc").value;
  timDoiTuong(doiTuong);
  timKhuVuc(khuVuc);
  var TongKet = diemTongKet(diemToan, diemLy, diemHoa, doiTuong, khuVuc);
  console.log(TongKet);
  soSanhDiem(diemChuan, TongKet);
  getEle("diemTongKet").innerHTML = "Điểm tổng kết: " + TongKet;
  getEle("diemUuTien").innerHTML =
    "Điểm ưu tiên: " + diemUuTien(doiTuong, khuVuc);
};
// bài 2
var tongTienDien = 0;
var soKw_1 = 500;
var soKw_2 = 650;
var soKw_3 = 850;
var soKw_4 = 1100;
var soKwConlai = 1300;
var tienSoKw_1,
  tienSoKw_2,
  tienSoKw_3,
  tienSoKw_4,
  tienSoKwConLai = 0;
function tinhTienDien(soKw) {
  if (soKw <= 50) tongTienDien = soKw_1 * (soKw - 1);
  else if (soKw > 50 && soKw <= 100)
    tongTienDien = soKw_1 * 50 + soKw_2 * (soKw - 1);
  else if (soKw > 100 && soKw <= 200)
    tongTienDien = soKw_1 * 50 + soKw_2 * 50 + soKw_3 * (soKw - 1);
  else if (soKw > 200 && soKw <= 350)
    tongTienDien =
      soKw_1 * 50 + soKw_2 * 50 + soKw_3 * 100 + soKw_4 * (soKw - 1);
  else if (soKw > 350)
    tongTienDien =
      soKw_1 * 50 +
      soKw_2 * 50 +
      soKw_3 * 100 +
      soKw_4 * 150 +
      soKwConlai * (soKw - 1);
  return tongTienDien;
}
function formatTien(tien) {
  var currentFormat = new Intl.NumberFormat("vn-VN");
  var thanhTien = currentFormat.format(tien);
  return thanhTien;
}
document.getElementById("enterExc_2").onclick = function () {
  var name = getEle("name").value;
  var soKw = getEle("soKw").value * 1;
  getEle("infoName").innerHTML = "Tên chủ hộ: " + name;
  var tienDien = tinhTienDien(soKw);
  var doiTien = formatTien(tienDien);
  getEle("infoTienDien").innerHTML =
    "Tổng tiền điện: " + formatTien(tinhTienDien(soKw)) + " VNĐ";
};
