import React from 'react';
import './Navbar.css';
import { motion } from 'framer-motion';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <div className="brand-section" onClick={scrollToTop} style={{ cursor: 'pointer' }}>
          <img src="/brain-logo.svg" alt="Sharp Outbound" className="navbar-logo" />
          <span className="brand-text">SharpOutbound</span>
        </div>
        
        <div className="navbar-links">
          <a href="#why-us" className="nav-link">Why Us</a>
          <a 
            href="https://mud-mandrill-95f.notion.site/SharpOutbound-Wall-of-success-17fd188da23480e3aa13cccc41f5bc47" 
            className="nav-link"
            style={{ cursor: 'pointer', textDecoration: 'none' }}
          >
            Wall of Success
          </a>
          <a href="#how" className="nav-link">Our Process</a>
          <a href="#case-studies" className="nav-link">Case Studies</a>
          <a href="#pricing" className="nav-link">Pricing</a>
          <a href="#faq" className="nav-link">FAQs</a>
          <motion.a 
            href="https://cal.com/rahimsharpoutbound/30min?date=2025-01-20&month=2025-01"
            className="btn btn-primary"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            Book more meetings
          </motion.a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 