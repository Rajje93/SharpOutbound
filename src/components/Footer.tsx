import React from 'react';
import './Footer.css';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      {/* CTA Section */}
      <div className="cta-section">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="no-credit-card">No credit card required.</div>
            <h2>Get started today with a 25min intro call</h2>
            <h3>With Rahim</h3>
            
            <motion.a 
              href="https://cal.com/rahimsharpoutbound/30min?date=2025-01-20&month=2025-01"
              className="btn btn-secondary btn-mobile-full"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}
            >
              Book a Strategy Call <FaArrowRight className="icon" />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="footer-content">
        <div className="container">
          <div className="footer-main">
            {/* Logo and Description Section */}
            <div className="footer-brand-section">
              <h2 className="footer-logo">SharpOutbound</h2>
              <p className="footer-description">
                <em>SharpOutbound</em> is an <span className="highlight">AI</span>-driven growth optimization agency that uses 
                cutting-edge tech to scale your B2B company.
              </p>
            </div>

            {/* Navigation Section */}
            <div className="footer-section">
              <h3>Navigation</h3>
              <ul>
                <li>
                  <a 
                    href="https://mud-mandrill-95f.notion.site/SharpOutbound-181d188da23480d38717e75b30a43ffe"
                    className="footer-link"
                  >
                    Fulfillment Policy
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:Rahim@sharpoutbound.com"
                    className="footer-link"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Wall of Success Section */}
            <div className="footer-section">
              <h3>Wall Of Success</h3>
              <ul>
                <li>
                  <a 
                    href="https://mud-mandrill-95f.notion.site/SharpOutbound-0-45K-Using-AI-Sales-Systems-in-52-days-17fd188da23480959906d67441ea8186"
                  >
                    How We Bootstrapped SharpOutbound To $45K In 62 Days
                  </a>
                </li>
                <li>
                  <a 
                    href="https://mud-mandrill-95f.notion.site/Vention-100K-Transforming-Skepticism-into-Success-17fd188da23480d2968bfdc173284c00"
                  >
                    How We Generated +100K For A Software Company In A Quarter
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Information */}
          <div className="footer-contact">
            <p>Kungsgatan 65, 111 22 Stockholm, Sweden, Rahim@sharpoutbound.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 