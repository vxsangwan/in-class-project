# In-Class Project  
## Fullstack Development Project  

This project is a **Fullstack Application** built using **Node.js**, **Express**, **Webpack**, **Bootstrap**, **Sass**, and **Babel**. It consists of a backend API and a frontend application.  

- The **backend** is developed with **Node.js** and **Express**.  
- The **frontend** is built using modern JavaScript (ES6+), SCSS for styling, and Bootstrap for layout and components.  

---

## **Project Structure**  
```
in-class-project/
│
├── api/                # Backend (API)
│   ├── index.js        # API entry file
│   └── package.json    # npm initialization (API)
│
├── app/                # Frontend (App)
│   ├── index.html      # Home page
│   ├── index.js        # Main JavaScript file
│   ├── index.scss      # SCSS styles for the home page
│   ├── webpack.config.js  # Webpack configuration file
│   ├── package.json    # npm initialization (App)
│   └── .gitignore      # Files to be ignored by Git
│
├── README.md           # Project description file
└── .gitignore          # Files to be ignored by Git (project root)
```

---

## **Features**  

### **Backend (API)**  
- Built with **Node.js** and **Express**.  
- Basic API structure with a single route (`/`) that returns a simple message.  
- Ready for future expansion with additional routes and controllers.  

### **Frontend (App)**  
- Developed using **Webpack** for bundling and **Babel** for transpiling modern JavaScript (ES6+).  
- Styled with **Sass** (SCSS) and **Bootstrap** for responsive design.  
- Includes a simple homepage with a navigation menu (Home, List, About).  
- Uses **Webpack Dev Server** for live reloading during development.  

### **Webpack Configuration**  
- Transpiles JavaScript using **Babel**.  
- Compiles SCSS into CSS and extracts it into a separate file using **MiniCssExtractPlugin**.  
- Injects the generated HTML into the project using **HtmlWebpackPlugin**.  
- Configures a development server with hot reloading.  

---

## **Technologies Used**  

- **Frontend**:  
  - HTML, CSS (SCSS), JavaScript (ES6+)  
  - Bootstrap (for styling and layout)  
  - Webpack (for bundling)  
  - Babel (for transpiling JavaScript)  

- **Backend**:  
  - Node.js  
  - Express  

- **Development Tools**:  
  - Webpack Dev Server  
  - Sass  
  - Git (for version control)  

---

## **Setup Instructions**  

### **Prerequisites**  
- **Node.js** (v14 or higher)  
- **npm** (Node Package Manager)  

### **Step 1: Clone the Repository**  
```bash
git clone https://github.com/your-username/in-class-project.git
cd in-class-project
```

### **Step 2: Install Dependencies**  

#### **Backend Setup**  
```bash
cd api
npm install
```
#### **Frontend Setup**  
```bash
cd ../app
npm install
```

### **Step 3: Run the Project**  

#### **Start the Backend Server**  
```bash
cd api
node index.js
```
Server will run at: `http://localhost:3000/`  

#### **Start the Frontend Development Server**  
```bash
cd app
npm run dev
```
Frontend will run at: `http://localhost:8080/`  

---

## **How It Works**  

### **Backend (API)**  
- The backend is a simple Express server with a single route (`/`).  
- When you visit `http://localhost:3000`, the server responds with:  
  ```
  API is running
  ```  

### **Frontend (App)**  
- The frontend is a single-page application with a navigation menu.  
- The homepage (`index.html`) is styled using Bootstrap and SCSS.  
- Webpack bundles the JavaScript and SCSS files into a single `bundle.js` and `styles.css` file.  
- The development server supports live reloading, so changes to the code are reflected immediately in the browser.  

---

## **Author**  
**Vivek Sangwan**  

- **GitHub**: [vxsangwan](https://github.com/vxsangwan)  
- **Email**: [vxsangwan@example.com](mailto:vxsangwan@example.com)  

---

## **Acknowledgments**  
- Thanks to **Bootstrap** for providing a great framework for building responsive layouts.  
- Thanks to **Webpack** and **Babel** for making modern JavaScript development easier.  
