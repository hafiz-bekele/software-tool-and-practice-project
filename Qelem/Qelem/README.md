# Qelem Meda Technologies - Login & Registration System

A modern, responsive login and registration system built with React and Tailwind CSS.

## 🚀 Features

- ✅ Clean and modern UI design
- ✅ Responsive layout (mobile-friendly)
- ✅ Login page with remember me functionality
- ✅ Registration page with photo upload
- ✅ Password visibility toggle
- ✅ Form validation
- ✅ Reusable components
- ✅ React Router for navigation

## 📁 Project Structure

```
project/
├── public/
│   └── logo.png                  # Company logo
├── src/
│   ├── components/
│   │   ├── Login.jsx            # Login page component
│   │   ├── Register.jsx         # Registration page component
│   │   └── InputField.jsx       # Reusable input field component
│   ├── App.jsx                  # Main app with routing
│   ├── main.jsx                 # React entry point
│   └── index.css                # Global styles with Tailwind
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## 🛠️ Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Move your logo:**
   Make sure `logo.png` is in the `public/` folder

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173`

## 📄 Available Routes

- `/login` - Login page
- `/register` - Registration page
- `/` - Redirects to login

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize colors:
```javascript
colors: {
  'navy-dark': '#0a1f3d',
  'navy-blue': '#1a3a5c',
  'orange-primary': '#f59e0b',
}
```

### Form Fields
Modify form fields in `src/components/Login.jsx` or `src/components/Register.jsx`

## 📦 Build for Production

```bash
npm run build
```

The build output will be in the `dist/` folder.

## 🔧 Technologies Used

- **React 18** - UI library
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server

## 📝 License

