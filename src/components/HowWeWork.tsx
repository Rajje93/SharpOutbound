import React from 'react';
import './HowWeWork.css';
import { motion } from 'framer-motion';
import { 
  FaSearchDollar, 
  FaUserCheck, 
  FaComments, 
  FaChartLine,
  FaRocket,
  FaTools,
  FaHandshake,
  FaChartBar
} from 'react-icons/fa';

const HowWeWork: React.FC = () => {
  const steps = [
    {
      icon: <FaSearchDollar className="step-icon primary" />,
      secondaryIcon: <FaRocket className="step-icon secondary" />,
      title: "Discovery & Strategy",
      description: "We analyze your business, target market, and competition to create a customized outreach strategy."
    },
    {
      icon: <FaUserCheck className="step-icon primary" />,
      secondaryIcon: <FaTools className="step-icon secondary" />,
      title: "Prospect Identification",
      description: "Using AI and advanced tools, we identify prospects who are most likely to need your services."
    },
    {
      icon: <FaComments className="step-icon primary" />,
      secondaryIcon: <FaHandshake className="step-icon secondary" />,
      title: "Personalized Outreach",
      description: "We craft and execute highly personalized campaigns that speak directly to your prospects' pain points."
    },
    {
      icon: <FaChartLine className="step-icon primary" />,
      secondaryIcon: <FaChartBar className="step-icon secondary" />,
      title: "Optimization & Scaling",
      description: "We continuously optimize campaigns based on data and scale what works best."
    }
  ];

  return (
    <section id="how" className="how-we-work">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          How We Work
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          A proven process that delivers results
        </motion.p>

        <div className="steps-grid">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="step-card glass-effect"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <div className="step-number">{index + 1}</div>
              <div className="step-icons">
                <div className="icon-wrapper primary">{step.icon}</div>
                <div className="icon-wrapper secondary">{step.secondaryIcon}</div>
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              <div className="step-hover-effect" />
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="process-summary glass-effect"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3>Why Our Process Works</h3>
          <div className="summary-points">
            <motion.div 
              className="summary-point"
              whileHover={{ x: 10 }}
              transition={{ duration: 0.2 }}
            >
              <FaRocket className="point-icon" />
              <p>Data-driven approach ensures targeted results</p>
            </motion.div>
            <motion.div 
              className="summary-point"
              whileHover={{ x: 10 }}
              transition={{ duration: 0.2 }}
            >
              <FaChartLine className="point-icon" />
              <p>Continuous optimization for maximum ROI</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowWeWork; 