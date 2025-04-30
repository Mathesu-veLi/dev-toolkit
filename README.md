# 🧰 Dev Toolkit

**Dev Toolkit** is an interactive frontend application focused on utilities for developers and testers. It provides tools to generate and validate data like CPF numbers (Brazilian taxpayer registry), secure passwords, and IP addresses — all within a clean, responsive, and modular interface.

## 📜 Table of Contents

- [✨ Features](#-features)
- [🛠 Technologies Used](#-technologies-used)
- [📦 Installation](#-installation)
  - [⚙ Requirements](#-requirements)
- [▶️ Running the Project](#-running-the-project)
- [📁 Project Structure](#-project-structure)
- [🧪 Testing](#-testing)
- [🎥 Demo](#-demo)
- [📄 License](#-license)

---

## ✨ Features

✅ **CPF Generator:** Instantly generates valid CPF numbers  
✅ **CPF Validator:** Validates any CPF input using official algorithms  
✅ **Password Generator:** Creates strong, customizable passwords  
✅ **IP Generator:** Randomly generates valid IP addresses  
✅ **User-Friendly UI:** Simple navigation with reusable components and modern design  
✅ **Responsive Layout:** Fully functional on mobile and desktop devices

---

## 🛠 Technologies Used

- ⚛️ **React** + **TypeScript**
- ⚡ **Vite**
- 🎨 **Tailwind CSS**
- 🧪 **Jest** for testing
- 🧹 **ESLint** + **Prettier**
- 🧰 **clsx**, **Class Variance Authority (CVA)** for conditional styling

---

## 📦 Installation

### ⚙ Requirements

- Node.js (recommended LTS version)
- PNPM (or NPM/Yarn)

### 🔧 Steps

```bash
git clone https://github.com/Mathesu-veLi/dev-toolkit.git
cd dev-toolkit
pnpm install
```

---

## ▶️ Running the Project

Start the development server with:

```bash
pnpm dev
```

Then access: [http://localhost:5173](http://localhost:5173) (or your configured Vite port)

---

## 📁 Project Structure

```
src/
├── components/       # Reusable components (UI + tools)
│   └── Cpf/          # CPF Generator and Validator
├── containers/       # Main views: Home, Cpf, Ip, Password
├── classes/          # CPF validation and generation logic
├── lib/              # Utility functions
├── App.tsx           # Main app component with routes
├── main.tsx          # Entry point
└── index.css         # Global styles using Tailwind
```

---

## 🎥 Demo

You can watch a demo of the Dev Toolkit on YouTube:

[![Watch the demo](https://img.youtube.com/vi/2PR0bKBoqZ4/0.jpg)](https://www.youtube.com/watch?v=2PR0bKBoqZ4)

---

## 📄 License

This project is licensed under the terms specified in the [`LICENSE`](./LICENSE) file.

---

Built with 💻 to streamline testing and automation for developers!
