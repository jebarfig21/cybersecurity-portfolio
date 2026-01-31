// src/components/Header.tsx
import { NavLink } from "react-router-dom";

const Header = ()  => {
  
  // Definimos la función de estilos con tipado explícito
  const linkStyles = ({ isActive }: { isActive: boolean }): string => {
    return isActive
      ? "text-cyan-400 font-bold border-b-2 border-cyan-400 pb-1"
      : "text-slate-400 hover:text-cyan-300 transition-colors duration-200";
  };

  return (
    <header className="bg-slate-950 shadow-md border-b border-slate-800 sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-mono text-cyan-500 font-bold select-none">
          Jesus Barajas Portfolio
        </div>
        
        <ul className="flex gap-6 font-medium">
          <li>
            <NavLink to="/" end className={linkStyles}>
              /Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={linkStyles}>
              /Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/talksAndPubs" end className={linkStyles}>
              /Talks And Publications
            </NavLink>
          </li>
 
        </ul>
      </nav>
    </header>
  );
};

export default Header;