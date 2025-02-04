import React from 'react';
import './ScaleFast.css';
import { motion } from 'framer-motion';
import { FaRobot, FaCrosshairs, FaInbox } from 'react-icons/fa';

const ScaleFast: React.FC = () => {
  const ingredients = [
    {
      number: "1",
      title: "We use AI carefully, to fill in the blanks.",
      description: "AI is terrible at writing entire emails, and people can easily detect when it's used. But, AI is great at writing tightly-constrained variables. We place these variables inside thoughtful templates written by humans, ensuring that each email feels personal and unique.",
      icon: <FaRobot />
    },
    {
      number: "2",
      title: "We target by pain, not persona.",
      description: "We'll scour the internet to find buyers that actually have the pain your product solves (ex. open job roles, customer reviews, company news, job changes, and more). Then, we reach out to them with our aligned offer.",
      icon: <FaCrosshairs />
    },
    {
      number: "3",
      title: "We give you a single control center for >75 inboxes",
      description: "Gone are the volume bottlenecks of 1 SDR = 1 inbox. When you work with us, you send at whatever scale you'd like to send at.",
      icon: <FaInbox />
    }
  ];

  return (
    <section className="scale-fast">
      <div className="container">
        <motion.h2 
          className="scale-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Scale fast and get new clients predictably.
        </motion.h2>

        <div className="scale-content">
          <div className="ingredients-list">
            {ingredients.map((item, index) => (
              <motion.div 
                key={index}
                className="ingredient-item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <h3>{item.number}. {item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="iphone-preview">
            <motion.img 
              src="https://cdn.prod.website-files.com/66ddd8483555ab75c693c7bd/66ddd94dae04b9432ae7bc66_Untitled%20design%20(24).png"
              alt="iPhone Preview"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScaleFast; 