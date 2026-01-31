// src/components/Layout.tsx
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Aquí se inyectan las páginas hijas */}
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;