# Glow Edit — Bài cá nhân Buổi 2 (HTML5/CSS3)

**Đề tài:** Phân tích và cải tiến giao diện cửa hàng mỹ phẩm tham khảo [Thegioiskinfood](https://thegioiskinfood.com/) từ Buổi 1.  
**Phiên bản:** Giao diện V4 (cải tiến tìm bằng ảnh), dựa trên V4, kế thừa HTML/CSS/JS do người học cung cấp.  
**Lưu ý:** Đây là website **minh họa phục vụ học tập**, không bán hàng thực tế, không liên kết với thương hiệu hoặc website tham khảo. Tên, giá, giảm giá, mô tả và ảnh sản phẩm là dữ liệu mô phỏng. Ảnh có các biến thể phối màu của cùng một mẫu để minh họa danh mục.

## 1. Cách chạy

1. Giải nén ZIP, mở thư mục `GlowEdit_Buoi2_V4` bằng VS Code.
2. Mở file `index.html` bằng **Live Server** (`Open with Live Server`). Có thể mở trực tiếp file bằng Chrome/Edge.
3. Không cần PHP, Node.js hoặc database; chỉ cần trình duyệt. Google Fonts cần Internet để tải; khi offline sẽ dùng font dự phòng.
4. Tất cả ảnh đều được lưu **ngay trong thư mục `images/`**, không phụ thuộc URL hình ảnh bên ngoài.

## 2. Cấu trúc file

```text
GlowEdit_Buoi2_V4/
├── index.html                   HTML5 có ngữ nghĩa, 16 thẻ sản phẩm
├── css/style.css                CSS3: Box Model, Flexbox, Grid, hover/focus, responsive
├── js/app.js                    Tìm kiếm, giỏ hàng, kết nối tính năng so sánh ảnh
├── js/visual-search.js          So sánh đặc trưng ảnh bằng Canvas trên máy người dùng
├── images/                      Ảnh sản phẩm và banner định dạng WebP
├── docs/
│   ├── before/                  HTML/CSS/JS và ảnh giao diện trước do người học cung cấp
│   ├── after/                   Ảnh preview tự động + kết quả kiểm thử tự động
│   ├── IMPROVEMENT_LOG.md       Vấn đề, hướng cải thiện và CSS liên quan
│   ├── TEST_REPORT.md           Kiểm thử kỹ thuật + checklist thao tác trên máy
│   └── QUESTIONS.md             Gợi ý đủ 7 câu kiến thức, phải tự diễn đạt lại
└── AI_USAGE.md                  Ghi nhận việc dùng AI một cách minh bạch
```

## 3. Thay đổi so với phiên bản trước

- **Đồng nhất font và màu:** Be Vietnam Pro cho nội dung, Noto Serif cho tiêu đề; tương phản giữa nền, chữ, giá và nút chính rõ hơn.
- **Ảnh trực quan:** dùng ảnh mô phỏng sản phẩm dạng chụp, định dạng WebP; không dùng SVG icon thay cho hình hàng hóa.
- **Bố cục mới:** banner lớn + 2 banner nhỏ, thanh lợi ích, 3 nhóm sản phẩm bằng hình, lưới catalog và banner nội dung.
- **16 sản phẩm mẫu:** chăm sóc da **6**, trang điểm **5**, chăm sóc cơ thể **5** (kế thừa các sản phẩm ban đầu và bổ sung sản phẩm mẫu).
- **Thẻ sản phẩm:** rõ tên, thương hiệu, giá hiện tại, giá cũ, mức giảm, yêu thích và nút thêm vào giỏ.
- **Bố cục thích ứng:** Desktop (4 cột); tablet (3/2 cột theo độ rộng); mobile (2 cột), không tràn ngang tại 1366/768/390px.
- **Kế thừa tính năng:** tìm theo từ khóa, lọc danh mục/nhu cầu, sắp xếp giá/tên, tăng/giảm/xóa giỏ hàng, yêu thích và tìm các ảnh sản phẩm tương đồng trong danh mục.

## 4. Kỹ thuật đúng trọng tâm Buổi 2

| Yêu cầu | Vị trí mã nguồn |
|---|---|
| Semantic HTML5 | `header`, `nav`, `main`, `section`, `article`, `aside`, `footer` trong `index.html` |
| Tệp CSS riêng | `<link rel="stylesheet" href="css/style.css">` |
| Selector, Box Model | `.product-card`, `.product-info`, `.product-price`, `.add-to-cart` |
| Flexbox | `.header-actions`, `.nav-inner`, `.hero-actions`, `.product-price` |
| CSS Grid | `.hero-section`, `.category-showcase`, `.product-grid`, `.cart-layout` |
| Hover/focus | `.product-card:hover`, `.add-to-cart:hover`, `:focus-visible` |
| Ảnh có alt | Các thẻ `img` trên banner, danh mục, sản phẩm |
| Kiểm thử UI | `docs/TEST_REPORT.md` và ảnh preview ở `docs/after/` |

## 5. Về các ảnh trong docs

- `docs/before/`: ảnh và mã nguồn cũ người học đã cung cấp, dùng so sánh **Before**.
- `docs/after/preview-desktop.png`, `preview-tablet.png`, `preview-mobile.png`: ảnh **preview được tạo bằng Chromium tự động**, nhằm kiểm tra giao diện và hỗ trợ nhận xét. Không thay cho thao tác sinh viên phải tự chụp trong Chrome.
- `docs/after/catalog-*.png`: ảnh phần sản phẩm tại các độ rộng tương ứng.
- `docs/after/AUTOMATED_TEST.json`: kết quả kiểm tra tự động, gồm độ rộng màn hình, ảnh, lỗi JavaScript và hành vi thao tác.

## 6. Những phần vẫn cần m tự làm trước khi nộp

1. **Chụp ảnh website sau cải tiến thật trên máy mình** qua Chrome/Live Server, đặt cùng chiều rộng với ảnh Before nếu so sánh.
2. **Tự sửa ít nhất một thuộc tính HTML/CSS**, tự giải thích tại sao và chụp lại; ghi vào `docs/TEST_REPORT.md`. Đây là yêu cầu kiểm tra năng lực cá nhân của thầy, không nên nhận phần AI viết là tự làm.
3. Kiểm tra hiển thị/tính năng trong trình duyệt trên máy và xác nhận vào checklist.
4. Chỉnh câu trả lời kiến thức trong `docs/QUESTIONS.md` theo cách hiểu của bản thân, không học thuộc máy móc.
5. Ghi lại đúng các prompt đã dùng và phần điều chỉnh cá nhân trong `AI_USAGE.md`.
6. Đưa lên GitHub repo **bài cá nhân Thegioiskinfood** (không phải repo nhóm WeBuy).

## 7. Giới hạn demo

Tìm bằng ảnh **đã so sánh nội dung hình ảnh thật sự** với 16 ảnh danh mục bằng Canvas, các đặc trưng màu sắc, vùng hình và độ tương phản. Đây là tìm kiếm tương đồng thị giác dựa trên thuật toán, **không phải mô hình AI được huấn luyện để nhận diện loại sản phẩm, thương hiệu hoặc tình trạng da**. Ảnh có nền giống nhau có thể được xếp gần dù khác loại sản phẩm. Chỉ dùng cho minh họa, cần xác minh kết quả. Ảnh tải lên được xử lý tại trình duyệt, không truyền đi. Để chạy ổn định hãy dùng Live Server. Giỏ hàng chỉ hoạt động trong phiên trang hiện tại; thanh toán chưa tích hợp. Website không thu thập dữ liệu người mua hoặc kết nối cơ sở dữ liệu.


## 8. Cải tiến V4: tìm bằng ảnh có đối chiếu thực tế

**Lý do sửa:** Trong V3, nút “Tìm sản phẩm” sau khi tải ảnh chỉ dùng danh mục được chọn; nội dung pixel của ảnh hoàn toàn không được đọc. Vì vậy ảnh son hay ảnh serum có thể cho cùng một kết quả.

**Đã thay đổi:**

1. Thêm `js/visual-search.js`: trình duyệt dùng Canvas đọc pixel của ảnh tải lên và ảnh của 16 sản phẩm, so sánh phân bố màu, các vùng sáng/tối và đường nét, rồi xếp hạng.
2. `js/app.js`: xử lý kết quả bất đồng bộ, giới hạn theo danh mục nếu người dùng muốn, hiển thị 5–6 gợi ý và lọc danh sách sản phẩm theo thứ tự gần giống, có nút “Xóa kết quả tìm bằng ảnh”.
3. `index.html`: tiêu đề và mô tả nói rõ tính năng so sánh, không quảng cáo là AI nhận diện chính xác. Kết quả có ảnh, tên sản phẩm, giá và đường dẫn đến card tương ứng.
4. `css/style.css`: bố cục kết quả tương thích màn hình 1366px, 768px và 390px, hỗ trợ bàn phím và kéo thả ảnh.

**Cách dùng:** Đi đến mục **Tìm sản phẩm bằng hình ảnh**, chọn ảnh JPG/PNG/WEBP (dưới 8 MB), tùy chọn danh mục, nhấn **So sánh hình ảnh**, rồi xem các thẻ được xếp hạng. Bấm ảnh gợi ý để đến thẻ sản phẩm. Bấm **Xóa kết quả tìm bằng ảnh** để trở về toàn bộ catalog.

**Bài thử đơn giản:** Tải ảnh `images/serum.webp` → gợi ý đầu tiên là serum tương ứng; tải `images/lip-tint.webp` và lọc “Trang điểm” → son tương ứng đứng đầu; ảnh ngoài danh mục → giao diện cảnh báo không nhận diện chắc chắn. Ảnh mẫu đã được kiểm tra tự động trong Chromium, nhưng m nên kiểm tra lại trên máy.

**Giới hạn quan trọng:** Tính năng này KHÔNG thể suy ra loại da, tình trạng da hoặc mỹ phẩm phù hợp chỉ từ một ảnh. Muốn nhận diện sản phẩm chính xác từ ảnh chụp bất kỳ cần mô hình thị giác AI, dữ liệu sản phẩm được xác thực và quy trình kiểm thử riêng.
