# Nhật ký sử dụng AI hỗ trợ phát triển phần mềm — Glow Edit Buổi 2

Đây là bản tóm lược đề xuất AI, **không phải nhật ký hoàn chỉnh của người học**. Người học nên ghi thêm prompt chính xác, ngày giờ, kết quả tự kiểm thử và quyết định chấp nhận hoặc chỉnh sửa.

| Nội dung người học yêu cầu | AI đã hỗ trợ | Điều cần tự kiểm tra |
|---|---|---|
| Nhận xét giao diện Glow Edit hiện tại | Chỉ ra vấn đề font, màu, ảnh icon, bố cục, danh sách sản phẩm ít | Đối chiếu ảnh Before, xem phần nào thật sự ảnh hưởng trải nghiệm |
| Làm lại website đẹp và hoàn thiện hơn | Thiết kế lại bố cục hero, danh mục, catalog, bộ lọc và CSS responsive | Kiểm tra code và giao diện trên máy, không chấp nhận mù quáng |
| Dùng ảnh chụp mỹ phẩm và thêm nhiều sản phẩm | Ảnh minh họa được tạo bằng AI, tạo các biến thể phối màu; bổ sung 16 dữ liệu sản phẩm mẫu | Không nhầm ảnh minh họa với sản phẩm thật hay tuyên bố hàng chính hãng |
| Sửa tính năng tìm bằng ảnh chưa hoạt động đúng mong đợi | Bổ sung so sánh ảnh nội bộ và hiển thị các sản phẩm gần giống; giữ giới hạn không suy đoán loại da | Thử ảnh từ catalog và ảnh ngoài danh mục, kiểm tra cảnh báo khi không chắc |
| Đáp ứng nội dung HTML5/CSS3 của Buổi 2 | Cung cấp mã semantic HTML, Box Model, Flexbox, Grid, hover/focus và file kiểm thử | Đọc/giải thích được các thuộc tính, tự sửa ít nhất một thay đổi |

## Giới hạn và quyết định thận trọng

- Sản phẩm và giá đều **mẫu học tập**, không lấy dữ liệu giao dịch thực.
- Ảnh là ảnh minh họa do AI tạo, **không phải ảnh chụp sản phẩm của hãng**. Một số ảnh được biến đổi nhẹ cho các biến thể mẫu.
- Chức năng tìm kiếm bằng ảnh đã được nâng cấp ở V4: đọc pixel ảnh và so sánh đặc trưng hình ảnh với catalog bằng Canvas ngay trong trình duyệt; không phải mô hình AI nhận diện thương hiệu hoặc tình trạng da.
- Không thanh toán thật, không backend và không cơ sở dữ liệu.
- Bài thầy nhấn mạnh năng lực tự sửa: phải tự thực hiện một thay đổi CSS/HTML rồi giải thích kết quả.

