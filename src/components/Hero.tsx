import React from 'react';
import './Hero.css';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <div className="top-button">
            <motion.div
              className="btn btn-outline"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Automate your lead acquisition
            </motion.div>
          </div>

          <h1 className="hero-title">
            <span>We build hands-off</span>
            <span>growth systems for</span>
            <span>B2B leaders.</span>
          </h1>
          
          <p className="hero-subtitle">
            We've helped our clients unlock over $10,000,000 in potential deals, freeing them from the hassle of referrals, expensive SDRs, amateur agencies, and worries about the declining economy.
          </p>
          
          <div className="button-container">
            <motion.a 
              href="https://cal.com/rahimsharpoutbound/30min?date=2025-01-20&month=2025-01"
              className="btn btn-primary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Book More Meetings <FaArrowRight className="icon" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 