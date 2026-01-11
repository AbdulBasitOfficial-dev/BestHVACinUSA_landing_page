import { Link } from 'react-router-dom';
import { FaSnowflake, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const services = [
    'HVAC Installation',
    'Repair & Maintenance',
    'Emergency Services',
    'Commercial HVAC',
    'Air Quality Solutions',
  ];

  return (
    <footer className="bg-[#071220] border-t border-white/5">
      {/* Main Footer */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 lg:gap-14">
          {/* Company Info */}
          <div className="text-center sm:text-left">
            <Link to="/" className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 justify-center sm:justify-start">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#1e3a5f] rounded-xl flex items-center justify-center">
                <FaSnowflake className="text-[#38bdf8] text-lg sm:text-2xl" />
              </div>
              <div>
                <span className="text-white font-bold text-lg sm:text-xl">Best</span>
                <span className="text-[#f97316] font-bold text-lg sm:text-xl">HVAC</span>
                <p className="text-xs text-gray-400 -mt-0.5">in USA</p>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 sm:mb-8">
              Your trusted partner for all HVAC needs. We provide reliable heating, ventilation, and air conditioning solutions across the USA.
            </p>
            <div className="flex gap-3 sm:gap-4 justify-center sm:justify-start">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#1e3a5f]/50 flex items-center justify-center text-gray-400 hover:bg-[#1e3a5f] hover:text-[#38bdf8] transition-colors"
                >
                  <Icon className="text-sm sm:text-base" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-white font-semibold text-base sm:text-lg mb-5 sm:mb-8">Quick Links</h3>
            <ul className="space-y-3 sm:space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 text-sm sm:text-base hover:text-[#38bdf8] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="text-center sm:text-left">
            <h3 className="text-white font-semibold text-base sm:text-lg mb-5 sm:mb-8">Our Services</h3>
            <ul className="space-y-3 sm:space-y-4">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-400 text-sm sm:text-base">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left">
            <h3 className="text-white font-semibold text-base sm:text-lg mb-5 sm:mb-8">Contact Us</h3>
            <ul className="space-y-4 sm:space-y-5">
              <li className="flex items-center gap-3 sm:gap-4 justify-center sm:justify-start">
                <a href="tel:+13213860371" className="flex items-center gap-3 sm:gap-4 text-gray-400 hover:text-[#f97316] transition-colors">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#f97316]/10 flex items-center justify-center flex-shrink-0">
                    <FiPhone className="text-[#f97316] text-base sm:text-lg" />
                  </div>
                  <span className="text-sm sm:text-base">+1 (321) 386-0371</span>
                </a>
              </li>
              <li className="flex items-center gap-3 sm:gap-4 justify-center sm:justify-start">
                <a href="mailto:info@besthvacusa.com" className="flex items-center gap-3 sm:gap-4 text-gray-400 hover:text-[#38bdf8] transition-colors">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#38bdf8]/10 flex items-center justify-center flex-shrink-0">
                    <FiMail className="text-[#38bdf8] text-base sm:text-lg" />
                  </div>
                  <span className="text-sm sm:text-base break-all">info@besthvacusa.com</span>
                </a>
              </li>
              <li className="flex items-center gap-3 sm:gap-4 text-gray-400 justify-center sm:justify-start">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-green-400/10 flex items-center justify-center flex-shrink-0">
                  <FiMapPin className="text-green-400 text-base sm:text-lg" />
                </div>
                <span className="text-sm sm:text-base">Colorado, USA</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-5">
            <p className="text-gray-500 text-xs sm:text-sm text-center sm:text-left">
              © {new Date().getFullYear()} BestHVACinUSA. All rights reserved.
            </p>
            <div className="flex items-center gap-6 sm:gap-8 text-xs sm:text-sm">
              <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
