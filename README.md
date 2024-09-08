├── app 
│   └── # Chứa các folder là các route của ứng dụng. (Vd: (auth)/sign-in/index.ts -> route: (auth)/sign-in)
     
├── assets
│   ├── fonts 
│   │   └── # Chứa các font sử dụng trong project
│   ├── icons 
│   │   └── # Tất cả icon sẽ lưu ở đây
│   └── images 
│       └── # Tất cả images sẽ lưu ở đây
├── components 
│   └── # Chứa các component của project, bắt đầu là folder với tên là tên của page đó
├── constant
│   ├── enum         
│   │   └── # Common enum
│   └── types       
│       └── # Common type, interface
├── helpers 
│   └── # Chứa các hàm init, config, ...
├── hooks 
│   └── # Chứa các custom hooks
├── libs 
│   └── # Chứa các library sử dụng của bên thứ 3: firebase, appwrite, ...