import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';

const navItems = [
  { id: 'home', label: 'ホーム' },
  { id: 'about', label: '事業概要' },
  { id: 'vision', label: 'ビジョン' },
  { id: 'services', label: '事業内容' },
  { id: 'blog', label: 'サービス' },
  { id: 'contact', label: 'お問い合わせ' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Find the section currently in view
      const sections = navItems.map(item => item.id);
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const offset = window.innerHeight * 0.3;
          if (rect.top <= offset) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getItemClasses = (id: string) => {
    const baseClasses = 'px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors duration-200';
    const activeClasses = isScrolled
      ? 'text-primary font-bold'
      : 'text-white font-bold';
    const inactiveClasses = isScrolled
      ? 'text-gray-600 hover:text-primary'
      : 'text-white hover:text-gray-300';
    
    return `${baseClasses} ${id === activeSection ? activeClasses : inactiveClasses}`;
  };

  const getMobileItemClasses = (id: string) => {
    const baseClasses = 'block px-3 py-2 rounded-md text-base font-medium cursor-pointer';
    return `${baseClasses} ${
      id === activeSection
        ? 'text-primary font-bold'
        : 'text-gray-600 hover:text-primary'
    }`;
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="flex items-center cursor-pointer"
            >
              <img 
                src={isScrolled ? "https://i.imgur.com/amhTL5S.png" : "https://i.imgur.com/XELgn5B.png"}
                alt="Uniseed Logo" 
                className="h-8 w-auto transition-opacity duration-300"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                smooth={true}
                duration={500}
                className={getItemClasses(item.id)}
                spy={true}
                offset={-64}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${
                isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white hover:text-gray-300'
              } transition-colors`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white rounded-lg shadow-lg">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.id}
                  smooth={true}
                  duration={500}
                  className={getMobileItemClasses(item.id)}
                  onClick={() => setIsOpen(false)}
                  spy={true}
                  offset={-64}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
