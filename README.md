# 📚 FocusFlow — Study Productivity Platform

A modern, full-stack productivity platform designed to help students and developers stay organized, focused, and consistent.  
Built with **Next.js**, **TypeScript**, **TailwindCSS**, **ShadCN**, and **PostgreSQL**, FocusFlow brings together tasks, notes, Pomodoro timer, and study analytics into one clean dashboard.

> 🚀 This project was created as a portfolio-quality application to demonstrate real-world full-stack architecture and clean UI/UX design.

---

## ✨ Features

### 🧠 Dashboard
A centralized view with:
- Weekly study minutes
- Completed tasks statistics
- Total notes
- Streak tracker
- Recent notes preview
- Session stats from the Pomodoro timer

### 📝 Tasks Manager
- Create, edit, delete tasks  
- Categories (School, Coding, Personal…)  
- Deadlines & priority levels  
- Subtasks  
- Filters & search  
- Completion tracking  

### ⏱ Pomodoro Timer
- 25/5 classic timer or custom lengths  
- Auto-start next session option  
- Daily session tracking  
- Syncs with dashboard stats  

### 🗒 Notes System
- Markdown or rich-text editor  
- Tags support  
- Search by title/content  
- Autosave  
- Clean list and preview UI  

### 🔐 Authentication
- Secure authentication (JWT or NextAuth)  
- Hashed passwords (bcrypt)  
- User profiles with avatar support  

### 🌓 Theme + Internationalization (Basic)
- Light/Dark mode  
- English / Spanish UI  

---

## 🛠 Tech Stack

### **Frontend & Backend**
- **Next.js 15** (App Router)
- **React**
- **TypeScript**
- **TailwindCSS**
- **ShadCN/UI**
- **Framer Motion**

### **Database**
- **PostgreSQL** (Neon, Supabase, or Railway)
- **Prisma ORM**

### **Charts**
- **Recharts** or **Tremor**

### **Validation**
- **Zod**

---

## 📁 Folder Structure

```bash
src/
 ├─ app/
 │   ├─ dashboard/
 │   ├─ tasks/
 │   ├─ notes/
 │   ├─ pomodoro/
 │   ├─ api/
 │   │   ├─ auth/
 │   │   ├─ tasks/
 │   │   └─ notes/
 │   └─ layout.tsx
 │
 ├─ components/
 │   ├─ ui/
 │   ├─ charts/
 │   ├─ task/
 │   └─ notes/
 │
 ├─ lib/
 │   ├─ prisma.ts
 │   ├─ auth.ts
 │   ├─ utils.ts
 │   └─ validations.ts
 │
 ├─ hooks/
 ├─ styles/
 └─ types/
