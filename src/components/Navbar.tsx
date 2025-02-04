import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }

    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isMenuOpen]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <div className="brand-section" onClick={scrollToTop} style={{ cursor: 'pointer' }}>
          <img src="/brain-logo.svg" alt="Sharp Outbound" className="navbar-logo" />
          <span className="brand-text">SharpOutbound</span>
        </div>
        
        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <a href="#why-us" className="nav-link" onClick={() => setIsMenuOpen(false)}>Why Us</a>
          <a 
            href="https://mud-mandrill-95f.notion.site/SharpOutbound-Wall-of-success-17fd188da23480e3aa13cccc41f5bc47" 
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Wall of Success
          </a>
          <a href="#how" className="nav-link" onClick={() => setIsMenuOpen(false)}>Our Process</a>
          <a href="#case-studies" className="nav-link" onClick={() => setIsMenuOpen(false)}>Case Studies</a>
          <a href="#pricing" className="nav-link" onClick={() => setIsMenuOpen(false)}>Pricing</a>
          <a href="#faq" className="nav-link" onClick={() => setIsMenuOpen(false)}>FAQs</a>
          <motion.a 
            href="https://cal.com/rahimsharpoutbound/30min?date=2025-01-20&month=2025-01"
            className="btn btn-primary"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsMenuOpen(false)}
          >
            Book more meetings
          </motion.a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 