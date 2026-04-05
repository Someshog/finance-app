# Finance Dashboard UI

A clean, modern, and responsive finance dashboard built with **Next.js**, **Shadcn UI**, and **TanStack Query**.

![Dashboard Preview](https://github.com/Someshog/finance-app/raw/main/public/preview.png)

## 🚀 Features

- **📊 Dashboard Overview**: Summary cards (Balance, Income, Expenses) with dynamic time-based trends and category-based spending charts.
- **💸 Transaction Management**: Comprehensive audit trail with multi-filtering (Payee, Type, Category), custom sorting, and pagination.
- **📥 Advanced Import**: Unified support for **XLSX**, **XLS**, and **CSV** files with intelligent column mapping.
- **📤 CSV Export**: One-click portability for your transaction history.
- **🛡️ Role-Based Access (RBAC)**: Interface simulation for **Admin** (Full Write Access) and **Viewer** (Read-Only) permissions.
- **💡 Financial Insights**: Automatic calculation of top spending categories, savings rates, and month-over-month growth.
- **🎨 Premium UI/UX**: 
  - 🌙 Native Dark & Light mode support.
  - ✨ Smooth entrance animations with Framer Motion.
  - 📱 Fully responsive, mobile-first design.

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Data Fetching**: [TanStack Query](https://tanstack.com/query)
- **Database (ORM)**: [Drizzle ORM](https://orm.drizzle.team/)
- **Authentication**: [Clerk](https://clerk.com/)

## 🏁 Getting Started

### 1. Clone & Install
```bash
git clone https://github.com/Someshog/finance-app.git
cd finance-app
npm install --legacy-peer-deps
```

### 2. Environment Variables
Create a `.env.local` file with your credentials:
```env
# Clerk Auth
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=...
CLERK_SECRET_KEY=...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# Database (Neon/PostgreSQL)
DATABASE_URL=...
```

### 3. Database Setup
```bash
npm run db:push
```

### 4. Run Locally
```bash
npm run dev
```

## 📐 Design Decisions

- **Defensive Components**: Generic UI components (like `DataTable`) include safety checks to prevent crashes when specific columns are missing.
- **XLSX Integration**: Leveraged `xlsx` (SheetJS) to provide robust Excel parsing, overcoming standard CSV data type limitations.
- **Glassmorphism**: Employed subtle backgrounds and shadows to achieve a high-end "Fintech" aesthetic.
- **Role Simulation**: Implemented a frontend-only role toggle to demonstrate conditional UI rendering without backend complexity.

---
Built with ❤️ by [Somesh](https://github.com/Someshog)
