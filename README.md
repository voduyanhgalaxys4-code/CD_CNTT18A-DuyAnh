Bước 1: Tải và cài đặt Node.js

  Truy cập trang web chính thức: https://nodejs.org/en/download

  Chọn phiên bản Node.js LTS.

  Tải phiên bản dành cho Windows (.msi).

  Mở tập tin cài đặt vừa tải về.

  Nhấn Next, giữ các thiết lập mặc định và chọn Install để hoàn tất cài đặt.

Bước 2: Kiểm tra phiên bản Node.js

  Mở Command Prompt (CMD) trên Windows.

  Nhập lệnh sau:

  node -v

  Kết quả nhận được:

  v26.13.0

  Lệnh này dùng để kiểm tra phiên bản Node.js đã được cài đặt.

Bước 3: Kiểm tra phiên bản npm

  Tại cửa sổ CMD, nhập lệnh:

  npm -v

  Kết quả nhận được:

  11.20.0

  Lệnh này dùng để kiểm tra phiên bản npm (Node Package Manager).

Bước 4: Tạo thư mục thực hành

  Tại cửa sổ CMD, nhập lần lượt các lệnh:

  mkdir nodejs-bai1
  cd nodejs-bai1

  Lệnh mkdir dùng để tạo thư mục nodejs-bai1.

  Lệnh cd dùng để di chuyển vào thư mục vừa tạo.

Bước 5: Tạo tập tin hello.js

  Nhập lệnh:

  notepad hello.js

  Chọn Yes

  Nhập nội dung chương trình:

  console.log("Hello, Node.js");

  Nhấn Ctrl + S để lưu tập tin hello.js.

Bước 6: Chạy chương trình Node.js

  Quay lại cửa sổ CMD.

  Nhập lệnh:

  node hello.js

  Kết quả hiển thị:

  Hello Node.js

Bước 7: Tạo repository trên GitHub

  Truy cập https://github.com/

  Đăng nhập tài khoản GitHub.

  Chọn New repository.

  Đặt tên repository là nodejs-bai1.

  Chọn chế độ Public.

  Chọn Add README.

  Nhấn Create repository để tạo kho lưu trữ.

Bước 8: Đưa sản phẩm lên GitHub

  Mở repository nodejs-bai1 vừa tạo.

  Tải tập tin hello.js lên repository.

Kiểm tra lại các tập tin đã được tải lên thành công.
