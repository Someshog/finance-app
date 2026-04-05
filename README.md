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
  - ✨ Smooth entrance animations with **Tailwind CSS**.
  - 📱 Fully responsive, mobile-first design.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Data Fetching**: [TanStack Query](https://tanstack.com/query)
- **Database (ORM)**: [Drizzle ORM](https://orm.drizzle.team/)
- **Authentication**: [Clerk](https://clerk.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

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
```bash
npm run dev
```

## 📖 How to Use

### 1. Create your Account
The application uses **Clerk** for secure authentication. On the first launch, you will be prompted to sign up. Once registered, you will have your own private dashboard.

### 2. Initial Setup
Before adding transactions, head over to the **Categories** and **Accounts** sections in the sidebar:
- **Categories**: Create labels like "Food", "Transport", or "Rent".
- **Accounts**: Add your bank accounts or credit cards (e.g., "Main Savings", "Credit Card").

### 3. Adding Transactions
You have two ways to populate your history:
- **Manual**: Click **Add new** on the Transactions page to fill out a single entry.
- **Bulk Import**: Click **Import** to upload an **XLSX**, **XLS**, or **CSV** file. The intelligent mapper will help you link your spreadsheet columns to the dashboard fields.

### 4. Categorizing & Notes
After importing, you can click on any transaction to:
- Assign a specific **Category**.
- Add detailed **Notes** for future reference.
- Change the **Account** it belongs to.

### 5. Review Insights
Use the main dashboard to view your net balance, income/expense trends, and a breakdown of spending by category across different time periods.

- **Defensive Components**: Generic UI components (like `DataTable`) include safety checks to prevent crashes when specific columns are missing.
- **XLSX Integration**: Leveraged `xlsx` (SheetJS) to provide robust Excel parsing, overcoming standard CSV data type limitations.
- **Glassmorphism**: Employed subtle backgrounds and shadows to achieve a high-end "Fintech" aesthetic.
- **Role Simulation**: Implemented a frontend-only role toggle to demonstrate conditional UI rendering without backend complexity.

---
Built with ❤️ by [Somesh](https://github.com/Someshog)
