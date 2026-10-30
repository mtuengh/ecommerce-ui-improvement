# GLOW EDIT – CẢI TIẾN GIAO DIỆN WEBSITE MỸ PHẨM
## 1. Giới thiệu dự án

**Glow Edit – The Beauty Edit** là website thương mại điện tử mỹ phẩm được xây dựng với mục đích học tập, dựa trên quá trình nghiên cứu và tham khảo giao diện, cách tổ chức danh mục sản phẩm và trải nghiệm mua sắm của website Thegioiskinfood.

Dự án tập trung xây dựng một giao diện mua sắm mỹ phẩm hiện đại, trực quan, dễ sử dụng, giúp người dùng thuận tiện trong việc tìm kiếm sản phẩm, xem thông tin, so sánh giá và quản lý giỏ hàng.

Website sử dụng phong cách thiết kế nhẹ nhàng, kết hợp tông màu hồng, trắng và kem, hướng đến trải nghiệm mua sắm thân thiện, thẩm mỹ và phù hợp với ngành hàng mỹ phẩm.

Dự án được phát triển theo hai giai đoạn:

- **Buổi 1:** Phân tích website tham khảo và xây dựng phiên bản giao diện ban đầu.
- **Buổi 2:** Kế thừa mã nguồn, rà soát những hạn chế và cải tiến giao diện bằng HTML5, CSS3, đồng thời hoàn thiện một số chức năng minh họa.

Đây là website phục vụ học tập, chưa phải hệ thống bán hàng thương mại thực tế.

## 2. Mục tiêu cải tiến trong Buổi 2

Sau khi rà soát phiên bản website ở Buổi 1, một số vấn đề được xác định:

**Vấn đề 1 – Màu sắc và font chữ chưa đồng nhất**

Giao diện cũ sử dụng nhiều kích thước chữ nhỏ, một số khu vực chưa có sự phân cấp rõ ràng giữa tiêu đề, nội dung và thông tin quan trọng. Màu sắc tuy nhẹ nhàng nhưng chưa tạo được điểm nhấn mạnh ở nút thao tác và giá sản phẩm.

**Vấn đề 2 – Danh sách sản phẩm chưa phong phú**

Phiên bản ban đầu có bốn sản phẩm minh họa. Hình ảnh sản phẩm chủ yếu được thiết kế theo dạng vector, chưa tạo được cảm giác trực quan như hình ảnh hàng hóa trong một website thương mại điện tử.

**Vấn đề 3 – Bố cục và khoảng cách chưa tối ưu**

Một số khu vực có nhiều khoảng trắng, trong khi các công cụ tìm kiếm và bộ lọc chiếm diện tích lớn. Thông tin sản phẩm và các nút thao tác cần được sắp xếp hợp lý hơn để người dùng dễ quan sát.

Từ đó, mục tiêu cải tiến của Buổi 2 gồm:

- Chuẩn hóa màu sắc, font chữ và hệ thống tiêu đề.
- Cải thiện bố cục Header, Navigation và Banner.
- Thiết kế lại thẻ sản phẩm bằng CSS Box Model.
- Sử dụng Flexbox và CSS Grid để sắp xếp các thành phần.
- Tăng tính trực quan bằng hình ảnh sản phẩm dạng chụp.
- Mở rộng danh mục và số lượng sản phẩm minh họa.
- Bổ sung trạng thái hover và focus cho các thành phần tương tác.
- Kiểm tra khả năng hiển thị trên nhiều kích thước màn hình.
- Giữ lại và cải thiện các chức năng JavaScript đã có.

## 3. Công nghệ sử dụng

| Công nghệ | Mục đích |
|---|---|
| HTML5 | Xây dựng cấu trúc nội dung website |
| CSS3 | Thiết kế giao diện, màu sắc, bố cục và responsive |
| JavaScript | Xử lý tìm kiếm, lọc sản phẩm và giỏ hàng minh họa |
| CSS Flexbox | Căn chỉnh menu, nút và các thành phần theo hàng/cột |
| CSS Grid | Bố trí danh sách sản phẩm và các khối nội dung |
| Google Fonts | Sử dụng Be Vietnam Pro và Noto Serif |
| Canvas API | So sánh đặc trưng hình ảnh sản phẩm |
| Visual Studio Code | Môi trường chỉnh sửa và phát triển |
| Git và GitHub | Lưu trữ mã nguồn, quản lý phiên bản và theo dõi cải tiến |

Website không sử dụng backend hoặc cơ sở dữ liệu ở giai đoạn này.

## 4. Các chức năng và thành phần chính

### 4.1. Trang chủ và hệ thống điều hướng

- Hiển thị logo Glow Edit và thanh điều hướng.
- Tìm kiếm sản phẩm theo từ khóa.
- Banner quảng bá bộ sưu tập mỹ phẩm.
- Các banner và khu vực giới thiệu sản phẩm.
- Điều hướng nhanh đến những danh mục chính.
- Hiển thị số lượng sản phẩm trong giỏ hàng.

### 4.2. Danh sách sản phẩm

Phiên bản hiện tại có **16 sản phẩm minh họa**, gồm:

| Danh mục | Số lượng |
|---|---:|
| Chăm sóc da | 6 |
| Trang điểm | 5 |
| Chăm sóc cơ thể | 5 |
| **Tổng cộng** | **16** |

Mỗi thẻ sản phẩm hiển thị hình ảnh, tên, thương hiệu, giá hiện tại, giá gốc, mức giảm giá và nút thêm vào giỏ.

Người dùng có thể lọc sản phẩm theo danh mục và sắp xếp theo giá hoặc tên.

### 4.3. Tìm sản phẩm theo nhu cầu

Website cung cấp bộ lọc minh họa dựa trên các tiêu chí như loại da, nhu cầu chăm sóc da, danh mục và khoảng giá.

Kết quả được lọc từ dữ liệu mẫu có sẵn, không phải tư vấn da liễu cá nhân hóa.

### 4.4. Tìm kiếm sản phẩm bằng hình ảnh

Người dùng có thể tải lên ảnh JPG, PNG hoặc WEBP để tìm các sản phẩm có đặc trưng hình ảnh gần giống trong danh mục.

Phiên bản V4 cải thiện tính năng này bằng cách:

- Đọc và xử lý ảnh tải lên bằng Canvas API.
- So sánh một số đặc trưng thị giác như màu sắc và bố cục.
- Xếp hạng các sản phẩm có hình ảnh tương đồng.
- Hiển thị kết quả gợi ý và liên kết đến sản phẩm tương ứng.
- Cho phép xóa kết quả để quay lại danh sách sản phẩm.

**Giới hạn:** Đây là thuật toán so sánh ảnh trong trình duyệt, không phải hệ thống AI nhận diện sản phẩm chính xác tuyệt đối. Chức năng không thể xác định tình trạng da hoặc nhu cầu chăm sóc da từ ảnh người dùng.

### 4.5. Giỏ hàng minh họa

Người dùng có thể:

- Thêm sản phẩm vào giỏ.
- Tăng hoặc giảm số lượng.
- Xóa sản phẩm khỏi giỏ.
- Xem tổng số lượng và số tiền tạm tính.

Chức năng thanh toán, vận chuyển và đặt hàng thực tế chưa được tích hợp.

## 5. Những cải tiến HTML5 và CSS3

### 5.1. Cấu trúc HTML5 có ngữ nghĩa

Website sử dụng các thẻ:

- `header`: Khu vực đầu trang.
- `nav`: Menu điều hướng.
- `main`: Nội dung chính.
- `section`: Phân chia các khu vực nội dung.
- `article`: Đại diện cho từng sản phẩm.
- `aside`: Phần thông tin hỗ trợ, như tóm tắt đơn hàng.
- `footer`: Thông tin cuối trang.

Việc áp dụng HTML5 có ngữ nghĩa giúp cấu trúc mã nguồn rõ ràng và thuận tiện hơn khi bảo trì.

### 5.2. CSS Box Model

Box Model được áp dụng cho các thành phần như thẻ sản phẩm, nút mua hàng và khu vực bộ lọc.

Các thuộc tính tiêu biểu:

- `margin`: Điều chỉnh khoảng cách bên ngoài.
- `padding`: Điều chỉnh khoảng cách giữa nội dung và đường viền.
- `border`: Xác định đường viền.
- `border-radius`: Bo góc.
- `box-sizing`: Kiểm soát cách tính kích thước phần tử.

### 5.3. Flexbox

Flexbox được sử dụng để căn chỉnh Header, Navigation, các nút thao tác, thông tin giá và thành phần giỏ hàng.

Các thuộc tính chính gồm `display: flex`, `justify-content`, `align-items` và `gap`.

### 5.4. CSS Grid

CSS Grid được áp dụng để xây dựng lưới sản phẩm và tổ chức các khối nội dung.

Lưới sản phẩm thay đổi số cột phù hợp với kích thước màn hình, giúp các thẻ được trình bày cân đối và dễ quan sát hơn.

### 5.5. Hover, Focus và Responsive

Giao diện có hiệu ứng hover cho nút và thẻ sản phẩm, cùng trạng thái `focus-visible` hỗ trợ người dùng điều hướng bằng bàn phím.

Các media query giúp trang thích ứng với desktop, tablet và điện thoại.

## 6. So sánh trước và sau cải tiến

| Tiêu chí | Phiên bản Buổi 1 | Phiên bản Buổi 2 |
|---|---|---|
| Màu sắc | Chưa tạo điểm nhấn rõ | Đồng nhất và phân cấp tốt hơn |
| Font chữ | Một số chữ nhỏ, chưa thống nhất | Chuẩn hóa font và kích thước |
| Banner | Bố cục đơn giản | Banner đa dạng, nổi bật hơn |
| Hình ảnh sản phẩm | Hình minh họa dạng vector | Ảnh sản phẩm dạng chụp minh họa |
| Số sản phẩm | 4 | 16 |
| Thẻ sản phẩm | Nội dung nhỏ, ít điểm nhấn | Cải thiện ảnh, giá và nút thao tác |
| Bố cục | Một số khoảng cách chưa hợp lý | Điều chỉnh Box Model, Flexbox, Grid |
| Tìm kiếm bằng ảnh | Chỉ xem trước ảnh và lọc danh mục | So sánh đặc trưng hình ảnh bằng Canvas |

## 7. Kiểm thử giao diện

Phiên bản V4 đã được kiểm tra tự động trong Chromium tại các độ rộng:

- 1366px – Desktop.
- 768px – Tablet.
- 390px – Mobile.

Trong các bài kiểm thử tự động đã thực hiện, không phát hiện lỗi tràn ngang, lỗi tải ảnh hoặc lỗi JavaScript. Các thao tác tìm kiếm, lọc danh mục, sắp xếp, giỏ hàng và so sánh ảnh mẫu cũng đã được kiểm tra.

## 8. Minh chứng giao diện Before – After

Minh chứng được lưu trong thư mục `docs/`:

- `docs/before/`: Mã nguồn và ảnh giao diện phiên bản trước cải tiến.
- `docs/after/`: Ảnh xem trước phiên bản mới và kết quả kiểm thử tự động.

Ảnh Before do sinh viên cung cấp. Ảnh After tự động được dùng để hỗ trợ đối chiếu kỹ thuật. Sinh viên cần bổ sung ảnh chụp thật trên máy và ưu tiên chụp trước–sau ở cùng độ rộng cửa sổ trình duyệt.

## 9. Sử dụng AI hỗ trợ phát triển phần mềm

Trong quá trình cải tiến website, AI được sử dụng để hỗ trợ:

- Phân tích các hạn chế của giao diện.
- Đề xuất cải tiến màu sắc, font chữ và bố cục.
- Hỗ trợ chỉnh sửa HTML/CSS.
- Tạo hình ảnh sản phẩm minh họa.
- Hỗ trợ mở rộng dữ liệu sản phẩm.
- Phân tích và cải thiện chức năng tìm kiếm bằng hình ảnh.
- Hỗ trợ kiểm tra mã nguồn và xây dựng tài liệu.

Ví dụ, phiên bản tìm ảnh ban đầu chưa phân tích nội dung hình ảnh mà chỉ lọc theo danh mục. Sau khi kiểm tra và phản hồi, chức năng được điều chỉnh để so sánh đặc trưng hình ảnh của ảnh tải lên với sản phẩm mẫu.

AI chỉ đóng vai trò công cụ hỗ trợ. Mã nguồn, kết quả giao diện và các đề xuất cần được kiểm tra lại trước khi sử dụng.


## 10. Cấu trúc thư mục dự án

```text
GlowEdit/
│
├── index.html
├── README.md
├── AI_USAGE.md
│
├── css/
│   └── style.css
│
├── js/
│   ├── app.js
│   └── visual-search.js
│
├── images/
│   └── [Ảnh banner và sản phẩm]
│
└── docs/
    ├── before/
    ├── after/
    ├── IMPROVEMENT_LOG.md
    ├── TEST_REPORT.md
    └── QUESTIONS.md
```

## 11. Hướng dẫn chạy website

**Bước 1:** Tải hoặc clone repository về máy.

**Bước 2:** Mở thư mục dự án bằng Visual Studio Code.

**Bước 3:** Cài tiện ích Live Server nếu chưa có.

**Bước 4:** Nhấp chuột phải vào `index.html` và chọn **Open with Live Server**.

**Bước 5:** Kiểm tra giao diện và các chức năng trên trình duyệt.

Website có thể chạy bằng trình duyệt mà không cần cài đặt cơ sở dữ liệu, PHP hoặc Node.js.

## 12. Kết quả đạt được và hạn chế

### Kết quả

Sau quá trình cải tiến, Glow Edit có giao diện trực quan hơn, hệ thống hình ảnh và màu sắc đồng nhất hơn, danh sách sản phẩm phong phú hơn và khả năng trình bày trên nhiều thiết bị tốt hơn.

Dự án thể hiện việc vận dụng HTML5, CSS3, Box Model, Flexbox, CSS Grid, các hiệu ứng tương tác và quy trình kiểm thử giao diện.

### Hạn chế

- Website sử dụng dữ liệu sản phẩm mẫu.
- Chưa tích hợp cơ sở dữ liệu và hệ thống quản lý đơn hàng.
- Chưa có đăng nhập hoặc đăng ký tài khoản thực tế.
- Chưa tích hợp thanh toán trực tuyến.
- Chức năng so sánh ảnh chỉ hỗ trợ tìm hình ảnh tương đồng, chưa nhận diện chính xác mọi sản phẩm.
- Một số tính năng JavaScript được xây dựng để minh họa, chưa phải hệ thống thương mại điện tử hoàn chỉnh.

## 13. Kết luận

Thông qua bài thực hành Buổi 2, dự án Glow Edit được kế thừa và phát triển từ phiên bản ban đầu, tập trung giải quyết các vấn đề liên quan đến cách trình bày, bố cục và khả năng sử dụng.

Quá trình thực hiện giúp củng cố kiến thức về cấu trúc HTML5, tổ chức CSS, Box Model, Flexbox, CSS Grid, hiệu ứng tương tác và responsive.

Đồng thời, dự án cho thấy AI có thể hỗ trợ quá trình phát triển giao diện, nhưng người học vẫn cần chủ động đánh giá, kiểm tra và hiểu rõ những thay đổi trong mã nguồn.
