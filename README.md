## Structure

    ├── app             # Chứa các folder là các route của ứng dụng. (Vd: (auth)/sign-in/index.ts -> route: (auth)/sign-in)
        ├── (auth)      # Định nghĩa route page cho các page không cần auth
        ├── (tabs)      # Định nghĩa tab cho các page cần auth - Đã hoàn thành, chỉ được thay đổi nội dung các file index.tsx ở các folder home/liked/notification/order/user
    ├── assets # Chứa các source như icons, fonts, images
        ├── fonts
        ├── icons  
        ├── images     
    ├── components      # Chứa các components của project
        ├── auth        # Chứa các component liên quan đến Auth Screen
        ├── home        # Chứa các component liên quan đến Home Screen
        ├── liked       # Chứa các component liên quan đến LikedScreen
        ├── notification    # Chứa các component liên quan đến Notification Screen
        ├── onboarding      # Chứa các component liên quan đến Onboarding Screen khi user sử dụng app lần đầu tiên
        ├── order       # Chứa các component liên quan đến Order Screen
        ├── user        # Chứa các component liên quan đến User Screen
        ├── ui          # Chứa các component sử dụng chung cho project. (VD CustomInput, Checkbox, Button, ...)
    ├── helpers         # Chứa các hàm init, config, ... cho toàn bộ app
    ├── constants
        ├── enums       # Common enum
        ├── paths       # Chứa các biến định nghĩa các route của project - Không được thay đổi các biến đã định nghĩa nếu không cần thiết
        ├── types       # Common type, interface 
    ├── helpers         # Chứa các hàm init, config, ... cho toàn bộ app
    ├── hooks           # Chứa các custom hooks
    ├── libs            # Chứa các library sử dụng của bên thứ 3. VD: firebase, appwrite, ...
   
#### Cách lấy thông tin của user hiện tại sử dụng khi login bằng OAuth (Gmail, Facebook)
```javascript
const { user } = useUser();
- Các thông tin cơ bản của user như fullname, email, id, avatar sẽ lấy từ biến này.
- Số điện thoại, địa chỉ,... của user sẽ viết Back-end lấy sau.
```

```javascript
- [https://react-svgr.com/playground/?native=true](https://react-svgr.com/playground/?native=true): 
- Sử dụng web này để convert svg sang Svg của react-native-svg.
- Cách lưu xem mẫu các file Icon ở: [assets/icons](./assets/icons)
```