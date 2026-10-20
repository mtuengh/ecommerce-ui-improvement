# E-commerce UI Improvement

*Môn học:* Phát triển ứng dụng WEB/TMĐT  
*Giảng viên:* TS Nguyễn Mạnh Tuấn – tuannm@ueh.edu.vn

## 1. Giới thiệu

Dự án thực hiện khảo sát giao diện website thương mại điện tử [Thế Giới SkinFood](https://thegioiskinfood.com/) và đề xuất cải tiến giao diện hiển thị danh sách sản phẩm.

Mục tiêu là giúp khách hàng dễ dàng xem hình ảnh, tên sản phẩm, giá bán và thao tác với sản phẩm. Giao diện minh họa được xây dựng bằng HTML5 và CSS3.

## 2. Website tham khảo
2.1. Tên website và đường dẫn

Tên website: Thế Giới SkinFood

Website chính thức: https://thegioiskinfood.com/

Trang tất cả sản phẩm: https://thegioiskinfood.com/collections/all

Trang chăm sóc da: https://thegioiskinfood.com/collections/cham-soc-da

2.2. Nhóm sản phẩm kinh doanh

Qua việc khảo sát danh mục và danh sách sản phẩm trên website, ghi nhận các nhóm sản phẩm sau:

Chăm sóc da: Sữa rửa mặt, nước tẩy trang, toner, mặt nạ, tinh chất dưỡng da, kem dưỡng và kem chống nắng.

Trang điểm: Son môi, phấn má, phấn phủ, phấn nước và các sản phẩm trang điểm mắt.

Chăm sóc tóc: Các sản phẩm dầu gội và chăm sóc tóc.

Chăm sóc cơ thể: Sữa tắm và các sản phẩm chăm sóc cơ thể.

Dụng cụ làm đẹp: Các dụng cụ hỗ trợ trang điểm và chăm sóc sắc đẹp.

2.3. Khách hàng mục tiêu

Để phục vụ việc phân tích và thiết kế giao diện, nhóm đề xuất chân dung khách hàng mục tiêu dự kiến như sau:

Độ tuổi: Khoảng 18–35 tuổi.

Giới tính: Không giới hạn giới tính; hướng đến người có nhu cầu sử dụng mỹ phẩm và sản phẩm chăm sóc cá nhân.

Nhu cầu: Tìm kiếm và mua sản phẩm chăm sóc da, trang điểm, chăm sóc tóc và cơ thể.

Hành vi mua sắm: Tìm sản phẩm theo tên, thương hiệu hoặc danh mục; xem thông tin và giá bán; so sánh sản phẩm trước khi lựa chọn.

Mối quan tâm: Thương hiệu, chất lượng, nguồn gốc, giá cả, khuyến mãi và sự thuận tiện khi mua hàng trực tuyến.

Lưu ý: Đây là chân dung khách hàng giả định do nhóm đề xuất phục vụ bài tập thiết kế UX/UI, không phải dữ liệu khách hàng chính thức được Thế Giới SkinFood công bố.

2.4. Các chức năng mua sắm chính

Dựa trên các thành phần quan sát được trong quá trình khảo sát website:

Trang chủ: Hiển thị các khu vực giới thiệu danh mục, thương hiệu nổi bật, sản phẩm bán chạy và chương trình khuyến mãi.

Danh mục sản phẩm: Cho phép khách hàng duyệt danh sách sản phẩm theo nhóm.

Lọc và sắp xếp sản phẩm: Có các lựa chọn sắp xếp như phổ biến, mới nhất, bán chạy, giá thấp và giá cao; trang danh sách cũng có bộ lọc sản phẩm.

Tìm kiếm: Có ô tìm kiếm với gợi ý tìm theo sản phẩm, danh mục hoặc thương hiệu.

Xem thông tin sản phẩm: Thẻ sản phẩm hiển thị hình ảnh, tên, thương hiệu và giá bán; một số sản phẩm hiển thị giá gốc và giá khuyến mãi.

Chi tiết sản phẩm: Cần kiểm tra từng trang sản phẩm để xác nhận đầy đủ thông tin và thao tác cụ thể.

Giỏ hàng và thanh toán: Cần thao tác trực tiếp trên website để xác nhận các chức năng như chỉnh sửa số lượng, xóa sản phẩm và các bước thanh toán.

## 3. Khảo sát giao diện và chức năng

*Website khảo sát:* Thế Giới SkinFood  
*Đường dẫn:* [https://thegioiskinfood.com/](https://thegioiskinfood.com/)  
*Website cải tiến:* Thế Giới SkinFood Redesign v2

### Bảng khảo sát giao diện

| *Khu vực* | *Chức năng của website tham khảo* | *Điểm hợp lý* | *Vấn đề hoặc cơ hội cải thiện UX/UI* | *Giải pháp được triển khai trong website mới* |
|---|---|---|---|---|
| *1. Trang chủ* | Có khu vực tìm kiếm, danh mục, thương hiệu, sản phẩm và nội dung quảng bá theo chủ đề. | Cung cấp nhiều hướng để khách hàng tiếp cận sản phẩm. | Khi có nhiều khu vực nội dung, người dùng có thể mất thời gian xác định khu vực phù hợp với nhu cầu. Đây là hướng cần đánh giá thêm qua kiểm thử người dùng. | Thiết kế lại trang chủ theo phong cách mỹ phẩm hiện đại, sử dụng màu kem và xanh lá trầm. Bố cục ưu tiên thanh tìm kiếm, nội dung giới thiệu, nhu cầu mua sắm và danh sách sản phẩm. |
| *2. Danh mục và danh sách sản phẩm* | Hỗ trợ khách hàng duyệt sản phẩm theo danh mục và sử dụng các lựa chọn lọc, sắp xếp. | Giúp khách hàng thu hẹp lựa chọn và tìm sản phẩm phù hợp hơn. | Nếu các tiêu chí lọc chưa được tổ chức rõ ràng, người dùng có thể mất thời gian điều chỉnh lựa chọn, đặc biệt trên màn hình điện thoại. | Xây dựng danh sách 8 sản phẩm mẫu, bộ lọc theo danh mục, nhu cầu và ngân sách; hỗ trợ sắp xếp theo giá từ thấp đến cao, giá từ cao đến thấp và tên sản phẩm. Các bộ lọc đang áp dụng được hiển thị để người dùng dễ theo dõi và xóa. |
| *3. Thông tin trên thẻ sản phẩm* | Thẻ sản phẩm là khu vực giúp khách hàng nhận diện sản phẩm, xem thông tin cơ bản và lựa chọn sản phẩm cần tìm hiểu thêm. | Hình ảnh, tên và giá sản phẩm giúp khách hàng nhận diện và so sánh các lựa chọn. | Khách hàng có thể cần mở từng sản phẩm hoặc đọc mô tả trước khi xác định sản phẩm có phù hợp với nhu cầu hay không. | Bổ sung nhãn tóm tắt nhanh trên ảnh sản phẩm, ví dụ “Da nhạy cảm · Làm dịu”, “Cấp ẩm sâu · Da khô” và “Chống nắng · Dùng hằng ngày”. Nhãn giúp người dùng nhanh chóng nhận biết mục đích sử dụng được minh họa của từng sản phẩm. |
| *4. Chi tiết sản phẩm* | Thông tin chi tiết giúp khách hàng tìm hiểu thêm trước khi quyết định mua. | Cung cấp cơ sở để khách hàng cân nhắc sản phẩm phù hợp. | Việc chuyển đổi giữa danh sách và phần thông tin chi tiết có thể làm gián đoạn thao tác duyệt nhiều sản phẩm. Cần kiểm thử để đánh giá mức độ ảnh hưởng thực tế. | Bổ sung chức năng xem nhanh sản phẩm bằng cửa sổ thông tin ngay trên trang. Người dùng có thể xem tên, thương hiệu, giá, mô tả và nhãn liên quan, sau đó thêm sản phẩm vào giỏ hàng mà không cần rời khỏi danh sách. |
| *5. Tìm kiếm sản phẩm* | Website tham khảo cung cấp khu vực tìm kiếm để khách hàng tìm theo sản phẩm, danh mục hoặc thương hiệu. | Cho phép người dùng tiếp cận sản phẩm trực tiếp thay vì phải duyệt lần lượt các danh mục. | Người dùng có thể gặp khó khăn khi chưa biết từ khóa phù hợp hoặc nhập từ khóa không dấu, sai nhẹ chính tả hay không có kết quả. Mức độ xử lý của website tham khảo cần được kiểm tra riêng. | Thiết kế lại thanh tìm kiếm với gợi ý “Tìm kiếm mỹ phẩm, thương hiệu (VD: Romand)...”. Website mới hiển thị gợi ý khi nhập, hỗ trợ tìm kiếm không phân biệt dấu tiếng Việt và khớp gần đúng đơn giản trên dữ liệu mẫu. Khi không có kết quả, hệ thống hiển thị hướng dẫn đổi từ khóa hoặc xóa bộ lọc. |
| *6. Giỏ hàng* | Giỏ hàng là khu vực để khách hàng kiểm tra sản phẩm đã chọn trước khi tiếp tục mua sắm. | Giúp người dùng rà soát lựa chọn và số lượng sản phẩm. | Nếu phải chuyển sang trang khác để chỉnh sửa giỏ hàng, luồng xem sản phẩm có thể bị gián đoạn. Các thao tác cụ thể trên website tham khảo cần được kiểm tra trực tiếp trước khi kết luận có hạn chế. | Triển khai giỏ hàng dạng trượt từ cạnh phải màn hình. Người dùng có thể thêm sản phẩm, tăng hoặc giảm số lượng, xóa sản phẩm và xem tạm tính ngay trên trang hiện tại. |
| *7. Ưu đãi vận chuyển* | Thông tin vận chuyển và điều kiện ưu đãi là yếu tố có thể ảnh hưởng đến quyết định mua hàng. | Giúp khách hàng cân nhắc chi phí tổng thể của đơn hàng. | Người dùng có thể khó ước lượng số tiền cần mua thêm nếu điều kiện miễn phí vận chuyển không được thể hiện trực quan ở thời điểm kiểm tra giỏ hàng. | Thêm thanh tiến trình Freeship trong giỏ hàng trượt. Thanh hiển thị số tiền còn thiếu để đạt ngưỡng miễn phí vận chuyển demo 499.000₫ và tự cập nhật theo giá trị giỏ hàng. |
| *8. Tốc độ tải hình ảnh* | Hình ảnh là thành phần quan trọng trong quá trình duyệt và lựa chọn mỹ phẩm. | Giúp khách hàng quan sát sản phẩm trực quan hơn. | Nhiều hình ảnh có thể làm tăng lượng dữ liệu cần tải khi mở trang. Hiệu quả thực tế cần được đánh giá bằng công cụ đo hiệu suất. | Bổ sung loading="lazy" và decoding="async" cho hình ảnh phù hợp. Trình duyệt có thể trì hoãn tải hình nằm ngoài vùng hiển thị ban đầu, qua đó hạn chế tải ảnh không cần thiết ngay khi mở trang. |
| *9. Sản phẩm yêu thích và trải nghiệm trên điện thoại* | Đây là những khía cạnh cần xem xét khi đánh giá sự thuận tiện trong quá trình duyệt và so sánh sản phẩm. | Cho phép định hướng các cải tiến phục vụ nhu cầu mua sắm trên nhiều thiết bị. | Thao tác so sánh sản phẩm và sử dụng các chức năng trên màn hình nhỏ cần được tổ chức thuận tiện. | Bổ sung chức năng đánh dấu yêu thích, lọc danh sách yêu thích và bố cục responsive cho máy tính, máy tính bảng và điện thoại. Một nút mở giỏ hàng riêng cũng được bố trí cho màn hình di động. |

### Nhận xét chung

Qua khảo sát ban đầu, website Thế Giới SkinFood cung cấp nhiều khu vực hỗ trợ khách hàng tìm kiếm, duyệt và lựa chọn mỹ phẩm. Dựa trên các chức năng tham khảo và những cơ hội cải thiện trải nghiệm mua sắm, nhóm xây dựng phiên bản Redesign v2 với trọng tâm là tổ chức thông tin rõ ràng, giảm thao tác chuyển trang và hỗ trợ tìm kiếm sản phẩm thuận tiện hơn.

Các cải tiến chính gồm giỏ hàng dạng trượt, nhãn tóm tắt nhanh trên ảnh sản phẩm, tìm kiếm có gợi ý và khớp gần đúng, thanh tiến trình Freeship, bộ lọc linh hoạt và tải hình ảnh theo nhu cầu.

Các hạn chế được nêu trong quá trình khảo sát là những cơ hội cải thiện UX/UI, không mặc nhiên được xem là lỗi đã xác nhận của website tham khảo. Website Redesign v2 là bản demo học tập độc lập, không phải phiên bản chính thức của Thế Giới SkinFood.

## 4. Giao diện và chức năng đã xây dựng

Phiên bản *Thế Giới SkinFood Redesign v2* được xây dựng theo hướng tối ưu trải nghiệm mua sắm mỹ phẩm, giúp người dùng tiếp cận thông tin chính nhanh hơn, tìm sản phẩm theo nhu cầu dễ dàng hơn và quản lý giỏ hàng mà không phải rời khỏi trang hiện tại.

### 4.1. Giao diện trang chủ

- Thiết kế lại giao diện theo phong cách mỹ phẩm hiện đại, sử dụng bảng màu kem, xanh lá trầm và các thành phần đồ họa tối giản.
- Bổ sung khu vực giới thiệu, thanh tìm kiếm và các liên kết nhanh đến danh sách sản phẩm.
- Sắp xếp nội dung theo các khu vực rõ ràng nhằm giúp người dùng định hướng khi bắt đầu mua sắm.
- Bố trí giao diện responsive để phù hợp với màn hình máy tính và điện thoại.
- Hiển thị thông báo rõ ràng rằng đây là bản redesign phục vụ học tập, không phải website chính thức.

### 4.2. Danh sách sản phẩm và bộ lọc

- Xây dựng danh sách gồm 8 sản phẩm mỹ phẩm mẫu với hình minh họa, tên, thương hiệu, giá, giá tham chiếu và thông tin tóm tắt.
- Bổ sung nhãn tóm tắt nhanh trên ảnh để làm nổi bật nhu cầu hoặc đặc điểm được minh họa của sản phẩm.
- Hỗ trợ lọc theo danh mục, nhu cầu chăm sóc và ngân sách.
- Hỗ trợ sắp xếp theo giá tăng dần, giá giảm dần và tên sản phẩm.
- Hiển thị các điều kiện lọc đang áp dụng để người dùng có thể theo dõi và xóa từng điều kiện khi cần.
- Bổ sung trạng thái không có kết quả và nút đặt lại bộ lọc để người dùng dễ tiếp tục tìm kiếm.

### 4.3. Tìm kiếm có định hướng (Guided Search)

- Thiết kế lại thanh tìm kiếm với nội dung hướng dẫn và ví dụ về từ khóa, chẳng hạn tên mỹ phẩm hoặc thương hiệu Romand.
- Hiển thị danh sách gợi ý khi người dùng nhập từ khóa.
- Hỗ trợ tìm theo tên sản phẩm, thương hiệu, danh mục và thông tin nhu cầu đã được thiết lập trong dữ liệu mẫu.
- Hỗ trợ từ khóa tiếng Việt có dấu hoặc không dấu và cơ chế khớp gần đúng đơn giản để xử lý một số trường hợp nhập sai.
- Cho phép chọn gợi ý hoặc nhấn Enter để thực hiện tìm kiếm.
- Khi không tìm thấy kết quả, hiển thị thông báo và hướng dẫn thay đổi từ khóa hoặc xóa bộ lọc.

### 4.4. Nhãn tóm tắt nhanh và xem nhanh sản phẩm

- Hiển thị nhãn ngắn ngay trên ảnh sản phẩm để khách hàng dễ quét thông tin.
- Bổ sung cửa sổ xem nhanh ngay trên trang danh sách.
- Hiển thị thông tin minh họa như tên sản phẩm, thương hiệu, giá, mô tả và nhãn liên quan trong cửa sổ xem nhanh.
- Cho phép thêm sản phẩm vào giỏ hàng từ cửa sổ này, hạn chế việc phải quay lại danh sách để thực hiện thao tác.

### 4.5. Giỏ hàng dạng trượt (Slide-out Cart)

- Mở giỏ hàng bằng khung trượt từ cạnh phải màn hình thay vì điều hướng sang một trang giỏ hàng riêng.
- Cho phép thêm sản phẩm, tăng hoặc giảm số lượng và xóa sản phẩm.
- Tự động cập nhật số lượng sản phẩm, tạm tính và tổng tiền minh họa khi giỏ hàng thay đổi.
- Hiển thị thanh tiến trình Freeship với ngưỡng miễn phí vận chuyển demo là *499.000₫*.
- Cập nhật số tiền còn thiếu để đạt ngưỡng Freeship dựa trên giá trị giỏ hàng.
- Bổ sung khu vực gợi ý thêm sản phẩm và ô nhập mã voucher demo SKINFOOD10.
- Hiển thị thông báo khi áp dụng voucher và cập nhật giá trị giảm giá minh họa.

### 4.6. Sản phẩm yêu thích

- Bổ sung nút đánh dấu và bỏ đánh dấu sản phẩm yêu thích.
- Hiển thị số lượng sản phẩm yêu thích.
- Hỗ trợ lọc để chỉ xem những sản phẩm đã được đánh dấu.
- Cập nhật trạng thái yêu thích trên giao diện khi người dùng thao tác.

### 4.7. Tối ưu tải hình ảnh và khả năng tương thích

- Sử dụng thuộc tính loading="lazy" cho các hình ảnh phù hợp nhằm trì hoãn tải hình nằm ngoài vùng hiển thị ban đầu.
- Bổ sung decoding="async" để hỗ trợ giải mã hình ảnh theo cơ chế không đồng bộ.
- Sử dụng HTML5, CSS3 và JavaScript thuần, không yêu cầu cài đặt các gói phụ thuộc để chạy bản demo.
- Tổ chức tài nguyên hình ảnh minh họa SVG trong thư mục nội bộ.
- Thiết kế bố cục co giãn theo kích thước màn hình, bao gồm khu vực sản phẩm, bộ lọc và giỏ hàng.

### 4.8. Cấu trúc source code

Website được chia thành các thành phần chính:

| *Tệp/thư mục* | *Vai trò* |
|---|---|
| index.html | Khung giao diện và cấu trúc nội dung của trang web. |
| style.css | Quy định màu sắc, bố cục, hiệu ứng và giao diện responsive. |
| app.js | Xử lý tìm kiếm, lọc, sắp xếp, yêu thích, xem nhanh, giỏ hàng, voucher và tiến trình Freeship. |
| images/ | Chứa các hình minh họa sản phẩm và biểu tượng SVG phục vụ website. |
| README.md | Hướng dẫn sử dụng, chạy thử và triển khai website. |
| COMPARISON.md | Đối chiếu các hướng cải tiến UX/UI và cách kiểm tra tính năng. |
| AI_USAGE.md | Ghi chú việc sử dụng AI trong quá trình xây dựng dự án. |

### 4.9. Giới hạn của phiên bản hiện tại

- Website là bản demo giao diện và chức năng phía trình duyệt, chưa có backend hoặc cơ sở dữ liệu.
- Chưa triển khai đăng nhập, quản lý tài khoản, kiểm tra tồn kho, tạo đơn hàng thực tế hoặc cổng thanh toán.
- Giá bán, hình minh họa, đánh giá, nhãn sản phẩm, voucher và điều kiện Freeship là dữ liệu mẫu, không đại diện cho thông tin bán hàng chính thức.
- Tìm kiếm gần đúng chỉ xử lý một tập dữ liệu nhỏ bằng quy tắc JavaScript đơn giản; chưa phải hệ thống tìm kiếm quy mô lớn hoặc ứng dụng AI.
- Giỏ hàng và danh sách yêu thích có thể được lưu bằng localStorage trên trình duyệt nếu môi trường hỗ trợ. Dữ liệu này không được đồng bộ lên máy chủ.
- Hiệu quả thực tế về tốc độ tải trang, tỷ lệ chuyển đổi hoặc mức độ hài lòng chưa được xác định vì chưa có kiểm thử người dùng và số liệu đo lường.

## 5. Công nghệ

- HTML5
- CSS3
- JavaScript thuần (không dùng thư viện bên ngoài), chỉ phục vụ tìm kiếm, lọc, sắp xếp và giỏ hàng minh họa trên trình duyệt.

## 6. Cách chạy

1. Tải hoặc sao chép toàn bộ repository về máy tính, giữ nguyên cấu trúc thư mục.
2. Mở index.html bằng trình duyệt web hiện đại.
3. Dùng ô tìm kiếm, bộ lọc danh mục và lựa chọn sắp xếp để thử danh sách sản phẩm.
4. Nhấn *Thêm vào giỏ*, thử tăng/giảm số lượng hoặc xóa sản phẩm và kiểm tra tổng tạm tính.
5. Thu nhỏ cửa sổ trình duyệt hoặc mở công cụ kiểm tra giao diện di động để kiểm tra bố cục responsive.

Không cần cài đặt package hoặc chạy máy chủ. Các hình minh họa được lưu cục bộ trong thư mục images/.

## 7. Cải tiến đã thực hiện

- Tổ chức trang theo trình tự: tìm kiếm, điều hướng danh mục, giới thiệu sản phẩm, bộ lọc/sắp xếp, danh sách sản phẩm và giỏ hàng.
- Thống nhất cách trình bày tên, giá và nút thao tác trên các thẻ sản phẩm.
- Bổ sung trạng thái không có kết quả tìm kiếm.
- Tách CSS khỏi HTML và dùng media query để bố cục thích ứng với màn hình nhỏ.
- Bổ sung giỏ hàng minh họa để khách kiểm tra số lượng và tổng tạm tính mà không cần hệ thống phía máy chủ.

## 8. Hỗ trợ từ AI

AI được dùng để gợi ý cấu trúc trang, nội dung giao diện, các vấn đề UX cần khảo sát và cách tổ chức HTML/CSS/JavaScript phía trình duyệt. Chi tiết câu lệnh, phần được tạo và checklist kiểm tra được ghi trong (AI_USAGE.md).

Người thực hiện cần tự mở trang, thử từng thao tác, kiểm tra giao diện trên máy tính/điện thoại và điều chỉnh ít nhất một chi tiết trước khi nộp.

Tôi cần tự kiểm tra giao diện với website tham khảo, rà soát tính chính xác của các nhận xét, thử nghiệm hiển thị trên trình duyệt và điều chỉnh nội dung hoặc mã nguồn trước khi nộp.

Các câu lệnh đã sử dụng, kết quả tham khảo và phần kiểm tra, điều chỉnh được ghi trong file AI_USAGE.md.