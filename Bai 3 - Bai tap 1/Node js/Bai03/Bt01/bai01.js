//Khai báo class SinhVien
class SinhVien {
    constructor(ma, hoTen, tuoi, diem) {
        this.ma = ma;
        this.hoTen = hoTen;
        this.tuoi = tuoi;
        this.diem = diem;
    }
}

//Khai báo danh sách 5 sinh viên
const danhSachSinhVien = [
    new SinhVien("SV001", "Vo Duy Anh", 20, 8.5),
    new SinhVien("SV002", "Nguyen Van Trai", 21, 4.5),
    new SinhVien("SV003", "Tran Thi Binh", 19, 7.0),
    new SinhVien("SV004", "Le Van Cuong", 22, 3.5),
    new SinhVien("SV005", "Pham Thi Dung", 20, 6.5)
];

//Lọc sinh viên có điểm từ 5 trở lên
const sinhVienDatYeuCau = danhSachSinhVien.filter(
    (sinhVien) => sinhVien.diem >= 5
);

//Hiển thị kết quả
console.log("===== DANH SACH SINH VIEN DAT YEU CAU =====");
console.log(sinhVienDatYeuCau);