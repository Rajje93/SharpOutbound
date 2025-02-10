import React from 'react';
import './Pricing.css';
import { motion } from 'framer-motion';

const Pricing = () => {
  const plans = [
    {
      name: "STANDARD",
      price: "3458",
      period: "/month",
      features: [
        "10 Ideal clients in 30 days guaranteed",
        "Ad-hoc sales system build",
        "Save 15+ hours a week from prospecting",
        "Pause or cancel anytime",
        "Expand to new markets"
      ],
      buttonText: "Get started today",
      buttonStyle: "light",
      stripeUrl: "https://buy.stripe.com/aEU00O2YYdgYc80144"
    },
    {
      name: "COMMIT TO 3 MONTHS & SAVE $2,000",
      price: "8374",
      period: "/month",
      features: [
        "10 Ideal clients in 30 days guaranteed",
        "Ad-hoc sales system build",
        "Save 15+ hours a week from prospecting",
        "Pause or cancel anytime",
        "Expand to new markets"
      ],
      buttonText: "Sign up now →",
      buttonStyle: "primary",
      isPopular: true,
      stripeUrl: "https://buy.stripe.com/dR68xkczygta5JC9AB"
    },
    {
      name: "NEED MORE CLIENTS?",
      title: "CUSTOM",
      features: [
        "Documentation with every solution",
        "45-minute systems consultation",
        "Discounted subscription transition"
      ],
      buttonText: "Let's talk",
      buttonStyle: "gradient"
    }
  ];

  const handleClick = (url?: string) => {
    if (url) {
      console.log('Navigating to:', url);
      window.location.href = url;
    }
  };

  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Your Investment
        </motion.h2>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <motion.div 
              key={index} 
              className={`pricing-card ${plan.isPopular ? 'popular' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              <h3>{plan.name}</h3>
              {plan.price && (
                <div className="price-container">
                  <span className="currency">$</span>
                  <span className="price">{plan.price}</span>
                  <span className="period">{plan.period}</span>
                </div>
              )}
              {plan.title && <h2 className="custom-title">{plan.title}</h2>}
              <ul className="features-list">
                {plan.features.map((feature, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + index * 0.2 }}
                  >
                    {feature}
                  </motion.li>
                ))}
              </ul>
              <div className="button-wrapper">
                <motion.button 
                  className={`btn btn-${plan.buttonStyle}`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleClick(plan.stripeUrl)}
                >
                  {plan.buttonText}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing; 