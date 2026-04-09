import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import Logo from "../Assets/logo-arcanawa.jpg";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? 'bg-white/95 backdrop-blur-md shadow-lg py-4'
        : 'bg-transparent py-6'
        }`}
      style={{
        backgroundImage: isScrolled ? 'none' : `url()`, // Ganti dengan path gambar background yang diinginkan
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay untuk readability saat background gambar aktif */}
      {!isScrolled && (
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
      )}

      <div className="relative container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="relative group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="flex items-center space-x-3"
            >
              <div className="w-12 h-12 rounded-lg overflow-hidden">
                <ImageWithFallback
                  src={Logo}
                  alt="Arcanawa Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className={`text-2xl font-felix tracking-tight ${isScrolled ? 'text-primary' : 'text-white'}`}>
                  ARCANAWA
                </h1>
                <p className={`text-xs font-felix tracking-widest ${isScrolled ? 'text-muted-foreground' : 'text-white/80'}`}>
                  INTERIOR-ARSITEK
                </p>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} className="relative group">
                <motion.span
                  className={`text-sm tracking-wider transition-colors duration-300 ${location.pathname === link.path
                    ? (isScrolled ? 'text-primary' : 'text-white')
                    : (isScrolled ? 'text-foreground hover:text-primary' : 'text-white/80 hover:text-white')
                    }`}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  {link.label}
                </motion.span>
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 ${isScrolled ? 'bg-primary' : 'bg-white'}`}
                    initial={false}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden lg:block"
          >
            <Link
              to="/contact"
              className={`px-6 py-3 rounded-2xl transition-all duration-300 font-medium ${isScrolled ? 'text-primary' : 'text-white'}`}
            >
              Contact Us
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden transition-colors duration-300 relative z-10 ${isScrolled ? 'text-foreground hover:text-primary' : 'text-white hover:text-white/80'}`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-border mt-4"
          >
            <div className="container mx-auto px-6 py-6 space-y-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block py-2 text-lg transition-colors duration-300 ${location.pathname === link.path
                      ? 'text-primary'
                      : 'text-foreground hover:text-primary'
                      }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
              >
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full py-3 px-6 bg-primary text-white text-center rounded-lg hover:bg-accent transition-colors duration-300"
                >
                  Contact Us
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}