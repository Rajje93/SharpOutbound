import React from 'react';
import './ConnectClients.css';
import { motion } from 'framer-motion';
import FadeIn from './animations/FadeIn';

const ConnectClients: React.FC = () => {
  return (
    <section className="connect-clients">
      <div className="container">
        <div className="dream-clients">
          <FadeIn>
            <motion.h2 
              className="dream-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              We connect you with<br />your dream clients.
            </motion.h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="dream-subtitle">
              We win you the deals; your sales team just takes the sales calls—a lot of them. 
              We're on track to $10,0000M in pipeline for companies this year.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img 
                src="https://cdn.prod.website-files.com/66ddd8483555ab75c693c7bd/66e578ceace93d08049df061_Untitled%20design%20(27)-p-2000.png" 
                alt="Dream clients visualization"
                className="dream-image"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              />
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default ConnectClients; 