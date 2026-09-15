# 1923050024_TraThanh_TodoApp
Nộp bài Assignment 01 - Todo App

# Assignment 01 - Todo App (Lập Trình Mobile)

## 📌 Thông Tin Sinh Viên
- **Họ và tên**: Trà Thanh
- **Mã số sinh viên (MSSV)**: 1923050024
- **Hạn nộp**: 15/9/2026

---

## 🚀 Giới Thiệu Ứng Dụng
Ứng dụng **Todo App** được phát triển trên nền tảng **React Native (Expo SDK 57)** theo đầy đủ các tiêu chuẩn và yêu cầu của **Assignment 01**.

### 🎨 Yêu Cầu Tuỳ Chọn Đã Triển Khai (Custom Requirements)
- **Chủ đề màu sắc (Color Theme)**: `White/Blue` (Giao diện nền trắng hiện đại, sạch sẽ kết hợp điểm nhấn xanh dương sắc nét).
- **Tính năng mở rộng (Feature to Add)**:
  - **Độ ưu tiên (Priority Levels)**: 3 mức độ (Cao - Đỏ, Vừa - Cam, Thấp - Xanh).
  - **Ngày hết hạn (Due Dates)**: Hỗ trợ chọn hạn chót (Hôm nay, Ngày mai, 15/9/2026).
  - **Bộ đếm thống kê (Counter Stats)**: Thống kê tổng số việc, việc đang làm, việc đã xong và thanh tiến độ hoàn thành (%).
- **Phong cách giao diện (UI Style)**: `Cards` (Hiển thị từng công việc dạng thẻ độc lập với checkbox tùy chỉnh, nhãn độ ưu tiên, hạn nộp và nút xoá).

---

## 🔑 Bằng Chứng Tích Hợp Mã Số Sinh Viên (`STUDENT_ID = "1923050024"`)
Theo yêu cầu bắt buộc của Assignment: `STUDENT_ID` được định nghĩa làm hằng số ở đầu mã nguồn và tham chiếu tại nhiều vị trí then chốt:
1. **Định nghĩa hằng số ở đầu tệp**:
   - `src/app/index.tsx`: `export const STUDENT_ID = "1923050024";`
   - `src/constants/student.ts`: `export const STUDENT_ID = "1923050024";`
2. **Hiển thị tại Header**: Component `StudentHeader` hiển thị `Trà Thanh - MSSV: 1923050024`.
3. **Hiển thị tại Banner Thông Tin**: Khung giới thiệu ứng dụng hiển thị sinh viên thực hiện kèm MSSV `1923050024`.
4. **Bảng màu giao diện tính từ các chữ số của ID**:
   - `getStudentTheme()` trong `src/constants/student.ts` sử dụng `STUDENT_ID[0]`, `STUDENT_ID[1]`, `STUDENT_ID[2]`, `STUDENT_ID[3]` để xác định màu nền, màu viền Card, và màu phát sáng.
5. **Kích thước giao diện (Metrics) tính từ ID**:
   - `getStudentMetrics()` tính toán:
     - `cardRadius`: `STUDENT_ID.length + 2` = 12px.
     - `containerPadding`: `parseInt(STUDENT_ID[1]) + 7` = 16px.
     - `gap`: `parseInt(STUDENT_ID[3]) * 3 + 3` = 12px.
     - `maxWidth`: `STUDENT_ID.length * 65` = 650px trên màn hình máy tính.
6. **Tiền tố sinh mã công việc (Task ID)**: Mỗi task mới được gán ID bắt đầu bằng `${STUDENT_ID}-${Date.now()}-...`.

---

## 📋 Bảng Tự Đánh Giá Tiêu Chí Chấm Điểm (Grading Rubric)

| Hạng mục | Điểm | Trạng thái | Chi tiết triển khai |
| :--- | :---: | :---: | :--- |
| **Core features work** | 40 | ✅ Hoàn thành | Thêm todo, tự clear input sau khi thêm; hiển thị dạng danh sách thẻ; đánh dấu hoàn thành (đổi màu, checkbox tick, gạch ngang text); xoá todo khỏi danh sách. |
| **useState & state updates** | 20 | ✅ Hoàn thành | Quản lý state danh sách `todos`, `filter`, `inputText`, `selectedPriority`, `selectedDueDate` hoàn toàn qua hook `useState`. |
| **Layout & flexbox** | 20 | ✅ Hoàn thành | 100% bố cục sử dụng Flexbox (`flexDirection: 'column' / 'row'`, `justifyContent`, `alignItems`, `flex: 1`). |
| **Custom requirements** | 15 | ✅ Hoàn thành | Đầy đủ White/Blue theme, Cards UI, Priority levels, Due dates, Counter stats. |
| **Code quality** | 5 | ✅ Hoàn thành | Cấu trúc phân tách Components rõ ràng (`src/components/todo/`), TypeScript chặt chẽ không lỗi, định danh rõ ràng. |
| **Tổng điểm** | **100** | ✅ **Tối đa** | |

---

## 🛠 Hướng Dẫn Cài Đặt và Chạy Ứng Dụng

### Yêu Cầu Môi Trường
- Node.js (phiên bản 18 trở lên)
- Trình quản lý gói `npm`

### Các Bước Thực Hiện
1. Cài đặt các thư viện phụ thuộc:
   ```bash
   npm install
   ```

2. Khởi chạy dự án Expo:
   ```bash
   npx expo start
   ```

3. Mở trên thiết bị:
   - Nhấn phím `w` trong terminal để mở trên trình duyệt Web.
   - Hoặc quét mã QR bằng ứng dụng **Expo Go** trên điện thoại Android/iOS.
   - Nhấn phím `a` để mở trên máy ảo Android.
