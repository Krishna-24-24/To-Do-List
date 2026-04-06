# ✅ To-Do List with Local Storage

> A dynamic and interactive To-Do List application built with React that helps users manage daily tasks efficiently — with data persistence using browser `localStorage`.

![React](https://img.shields.io/badge/React-18+-61DAFB?style=flat&logo=react)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat&logo=javascript)
![CSS3](https://img.shields.io/badge/CSS3-Gradient_UI-1572B6?style=flat&logo=css3)
![LocalStorage](https://img.shields.io/badge/Storage-localStorage-orange?style=flat)

---

## 🌐 Live Demo

**[https://Krishna-24-24.github.io/To-Do-List/](https://Krishna-24-24.github.io/To-Do-List/)**

---

## 📌 About the Project

This To-Do List app is built using **React** to demonstrate core frontend concepts including state management, event handling, conditional rendering, and browser-side data persistence. Tasks are saved in `localStorage` so they remain available even after the page is refreshed.

---

## ✨ Features

- ✅ Add new tasks via input field or pressing `Enter`
- ✅ Mark tasks as completed (with strikethrough style)
- ✅ Toggle task completion status by clicking on the task
- ✅ Delete tasks with a single click
- ✅ Filter tasks by **All**, **Completed**, or **Pending**
- ✅ Live task counter (Total & Completed)
- ✅ Data persists across page refreshes using `localStorage`
- ✅ Clean, responsive UI with gradient background

---

## 🖼️ Screenshots

| Empty State | Tasks Added |
|-------------|-------------|
| No tasks found message | DSA, WEB PROG PROJECT, OOPS QUIZ listed |

| Completed Filter | Pending Filter |
|-----------------|----------------|
| Shows only completed tasks with strikethrough | Shows only incomplete tasks |

---

## ⚙️ How It Works

### Adding a Task
When the user types a task and clicks **Add** (or presses Enter), the app validates that the input is not empty, creates a task object with `{ text, completed: false }`, adds it to the state array, and saves the updated list to `localStorage`.

### Completing a Task
Clicking the ✔ button updates that specific task's `completed` property to `true` using `map()`. The UI re-renders immediately, showing the task with a line-through style.

### Deleting a Task
Clicking the ✖ button removes the task using `filter()` by its index. The updated list is saved back to `localStorage`, so the task won't reappear on refresh.

### Filtering Tasks
Three filter buttons let users switch between views:
- **All** — shows every task
- **Completed** — shows tasks where `completed === true`
- **Pending** — shows tasks where `completed === false`

Filtering uses JavaScript's `filter()` function and does not modify the original task list.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 18+** | UI framework & state management |
| **useState** | Manages task list, input, and filter state |
| **useEffect** | Loads from and saves to localStorage |
| **localStorage** | Browser-side data persistence |
| **CSS3** | Gradient UI, hover effects, animations |

---

## 📂 Project Structure

```
To-Do-List/
├── public/
│   └── index.html
├── src/
│   ├── App.js         # Main component with all logic
│   ├── App.css        # Styling with gradient background
│   └── index.js       # React entry point
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v16+
- npm v8+

### Installation

```bash
# Clone the repository
git clone https://github.com/Krishna-24-24/To-Do-List.git

# Navigate into the project
cd To-Do-List

# Install dependencies
npm install

# Start development server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

---

## 📦 Build & Deploy

```bash
# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

Live at: **`https://Krishna-24-24.github.io/To-Do-List/`**

---

## 🧠 React Concepts Demonstrated

- `useState` — manages tasks array, input text, and active filter
- `useEffect` — syncs tasks with `localStorage` on every state change
- `map()` — renders task list and updates individual task properties
- `filter()` — deletes tasks and applies filter views
- Conditional rendering — shows/hides complete button based on task status
- Event handling — `onClick`, `onChange`, `onKeyDown`

---

## 👨‍💻 Author

**Krishna**

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
