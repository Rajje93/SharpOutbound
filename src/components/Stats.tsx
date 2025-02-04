import React from 'react';
import './Stats.css';
import { motion } from 'framer-motion';

const Stats: React.FC = () => {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-header">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            In 2024
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            We generated our clients:
          </motion.p>
        </div>

        <div className="stats-grid">
          <motion.div 
            className="stat-box"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="stat-amount">+1,111,288$</div>
            <div className="stat-label">New revenue</div>
          </motion.div>

          <motion.div 
            className="stat-box"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="stat-amount">+2,028</div>
            <div className="stat-label">Sales meetings</div>
          </motion.div>

          <motion.div 
            className="stat-box"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="stat-amount">+10,280,288$</div>
            <div className="stat-label">Sales pipelines</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Stats; 