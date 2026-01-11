import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiPhone } from 'react-icons/fi';
import { FaSnowflake } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0a1628]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#1e3a5f] rounded-lg flex items-center justify-center">
              <FaSnowflake className="text-[#38bdf8] text-base sm:text-xl m-[2px]" />
            </div>
            <div>
              <span className="text-white font-bold text-base sm:text-lg">Best</span>
              <span className="text-[#f97316] font-bold text-base sm:text-lg">HVAC</span>
              <p className="text-[10px] sm:text-[11px] text-gray-400 -mt-1">in USA</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm lg:text-[15px] font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-[#38bdf8]'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Phone CTA */}
          <a
            href="tel:+13213860371"
            className="hidden md:flex items-center gap-2 px-4 lg:px-5 py-2 lg:py-2.5 bg-[#f97316] text-white rounded-lg font-semibold text-xs lg:text-sm hover:bg-[#ea580c] transition-colors"
          >
            <FiPhone className="text-sm lg:text-base" />
            <span>+1 (321) 386-0371</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
          >
            {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col gap-4 bg-[#0a1628]">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3.5 rounded-xl text-sm font-medium text-center ${
                    location.pathname === link.path
                      ? 'bg-[#1e3a5f] text-[#38bdf8]'
                      : 'text-gray-300 hover:bg-[#1e3a5f]/50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="tel:+13213860371"
                className="flex items-center justify-center gap-2 mx-4 mt-3 px-5 py-3.5 bg-[#f97316] text-white rounded-xl font-semibold text-md "
              >
                <FiPhone />
                <span>+1 (321) 386-0371</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
