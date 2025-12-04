import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Activity, Facebook, Twitter, Instagram, Mail } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Product', path: '/product' },
    { name: 'About', path: '/about' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* NAV BAR */}
      <nav className="fixed w-full z-50 bg-[#0B1120]/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="text-2xl font-extrabold tracking-tight text-white flex items-center gap-2 group">
            <Activity className="text-sky-500 group-hover:rotate-12 transition-transform" /> 
            THERAJAW
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-400">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`hover:text-white transition ${location.pathname === link.path ? 'text-white' : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <Link to="/product" className="hidden md:block bg-white text-slate-900 px-6 py-2.5 rounded-full font-bold text-sm hover:bg-slate-200 transition shadow-lg shadow-white/10">
            Order Now
          </Link>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0B1120] border-b border-white/10 p-4 space-y-4 absolute w-full left-0 top-20 shadow-2xl">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className="block text-slate-400 hover:text-white py-2 px-2 hover:bg-white/5 rounded-lg"
              >
                {link.name}
              </Link>
            ))}
            <Link to="/product" className="block text-center bg-sky-500 text-white py-3 rounded-lg font-bold mt-4">
              Order Now
            </Link>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#050914] border-t border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-1 md:col-span-2">
              <Link to="/" className="text-xl font-bold text-white flex items-center gap-2 mb-4">
                <Activity className="text-sky-500" size={20} /> THERAJAW
              </Link>
              <p className="text-slate-500 text-sm max-w-sm mb-6">
                The first clinical-grade massager designed to release the Masseter and Temporalis muscles. Eliminate morning headaches and jaw locking in 5 minutes a day.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-sky-500 hover:text-white transition">
                  <Facebook size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-sky-500 hover:text-white transition">
                  <Twitter size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-sky-500 hover:text-white transition">
                  <Instagram size={18} />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link to="/about" className="hover:text-sky-400 transition">About Us</Link></li>
                <li><Link to="/product" className="hover:text-sky-400 transition">Technology</Link></li>
                <li><Link to="/faq" className="hover:text-sky-400 transition">FAQ</Link></li>
                <li><Link to="/contact" className="hover:text-sky-400 transition">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex items-center gap-2">
                  <Mail size={14} className="text-sky-500" /> support@therajaw.com
                </li>
                <li>123 Wellness Blvd, Suite 100<br />Austin, TX 78701</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/5 pt-8 text-center text-slate-600 text-xs">
            <p>&copy; {new Date().getFullYear()} TheraJaw. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;