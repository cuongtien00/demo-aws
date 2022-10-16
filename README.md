# Create pineline

1 . Tạo Elastic Beanstalk 
- phải tạo tên beanstalk 
- chọn Ngôn ngữ muốn build
- chọn phiên bản lưu ý chọn đúng với phiên bản đang sử dụng 

2 . Tạo pineline 
- đặt tên pineline -> next 
- Source provider : chọn github  sau đó kết nối đến github chứa repositories 
- Chọn repositories muốn kết nối
- Chọn nhánh muốn build -> next
- ở bước chọn Add build stage  thì chọn skip build stage  để set up là no build  -> next 
- Add deploy stage 
+ chọn Deploy provider chọn  AWS Elastic Beanstalk
+ chọn Application name phải chọn giống với name khi tạo Beanstalk
 Sau khi kiểm tra các thông tin đầy đủ thì chọn build .


