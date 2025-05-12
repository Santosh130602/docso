import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const navLinkClass = (path) =>
    `transition hover:font-semibold hover:text-[#2A5F72] ${currentPath === path ? 'font-semibold text-[#2A5F72]' : 'text-black'
    }`;

  const mobileLinkClass = (path) =>
    `hover:font-semibold ${currentPath === path ? 'font-semibold text-[#2A5F72]' : 'text-black'
    }`;

  return (
    <header className="bg-[#DFFDFF] font-[Lexend] shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        
        <div className="text-2xl font-bold text-[#2A5F72]">
          <Link to="/">Docso</Link>
        </div>

        
        <nav className="hidden md:flex items-center space-x-12 text-sm font-light">
          <Link to="/" className={navLinkClass('/')}>Home</Link>
          <Link to="/service" className={navLinkClass('/service')}>Services</Link>
          <Link to="/doctor" className={navLinkClass('/doctor')}>Doctors</Link>
          <Link to="/order" className={navLinkClass('/order')}>Order medicine</Link>
          <Link to="/about" className={navLinkClass('/about')}>About</Link>
        </nav>

        
        <div className="hidden md:flex space-x-4">
          <button className="border border-[#2A5F72] text-[#2A5F72] px-5 py-2 rounded-md text-sm hover:bg-[#2A5F72] hover:text-white transition">Log in</button>
          <button className="border border-[#2A5F72] text-[#2A5F72] px-5 py-2 rounded-md text-sm hover:bg-[#2A5F72] hover:text-white transition">Sign up</button>
        </div>

        
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="text-[#2A5F72]" size={28} /> : <Menu className="text-[#2A5F72]" size={28} />}
          </button>
        </div>
      </div>

      
      {menuOpen && (
        <div className="md:hidden px-6 pb-4">
          <nav className="flex flex-col space-y-3 text-sm text-[#2A5F72]">
            <Link to="/" className={mobileLinkClass('/')}>Home</Link>
            <Link to="/service" className={mobileLinkClass('/service')}>Services</Link>
            <Link to="/doctor" className={mobileLinkClass('/doctor')}>Doctors</Link>
            <Link to="/order" className={mobileLinkClass('/order')}>Order medicine</Link>
            <Link to="/about" className={mobileLinkClass('/about')}>About</Link>
            <button className="mt-4 border border-[#2A5F72] text-[#2A5F72] px-5 py-2 rounded-md text-sm hover:bg-[#2A5F72] hover:text-white transition">Log in</button>
            <button className="mt-2 border border-[#2A5F72] text-[#2A5F72] px-5 py-2 rounded-md text-sm hover:bg-[#2A5F72] hover:text-white transition">Sign up</button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
