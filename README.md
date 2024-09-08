## Structure

    ├── app             # Chứa các folder là các route của ứng dụng. (Vd: (auth)/sign-in/index.ts -> route: (auth)/sign-in)
        ├── (auth)      # Định nghĩa route page cho các page không cần auth
        ├── (root)      # Định nghĩa route page cho các page cần auth
    ├── assets # Chứa các source như icons, fonts, images
        ├── fonts
        ├── icons  
        ├── images     
    ├── components      # Chứa các components của project, tất cả component của page được đặt trong folder là tên page, nếu sử dụng nhiều nơi thì đặt trong folder `ui`
    ├── constants
        ├── enum        # Common enum
        ├── types       # Common type, interface 
    ├── helpers         # Chứa các hàm init, config, ... cho toàn bộ app
    ├── hooks           # Chứa các custom hooks
    ├── libs            # Chứa các library sử dụng của bên thứ 3: firebase, appwrite, ...
   
