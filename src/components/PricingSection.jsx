import React from 'react';
import { motion } from 'framer-motion';

const PricingSection = () => {
  return (
    <section id="pricing" className="relative py-20 bg-dark">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Standard Plan */}
          <motion.div 
            className="pricing-card"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3>STANDARD</h3>
            <div className="price-container">
              <span className="currency">$</span>
              <span className="price">3458</span>
              <span className="period">/month</span>
            </div>
            <ul className="features-list">
              <li>10 Ideal clients in 30 days guaranteed</li>
              <li>Ad-hoc sales system build</li>
              <li>Save 15+ hours a week from prospecting</li>
              <li>Pause or cancel anytime</li>
              <li>Expand to new markets</li>
            </ul>
            <div className="button-wrapper">
              <a 
                href="https://buy.stripe.com/aEU00O2YYdgYc80144"
                className="btn btn-light"
                role="button"
              >
                Get started today
              </a>
            </div>
          </motion.div>

          {/* Premium Plan */}
          <motion.div 
            className="pricing-card popular"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3>COMMIT TO 3 MONTHS & SAVE $2,000</h3>
            <div className="price-container">
              <span className="currency">$</span>
              <span className="price">8374</span>
              <span className="period">/month</span>
            </div>
            <ul className="features-list">
              <li>10 Ideal clients in 30 days guaranteed</li>
              <li>Ad-hoc sales system build</li>
              <li>Save 15+ hours a week from prospecting</li>
              <li>Pause or cancel anytime</li>
              <li>Expand to new markets</li>
            </ul>
            <div className="button-wrapper">
              <a 
                href="https://buy.stripe.com/dR68xkczygta5JC9AB"
                className="btn btn-primary"
                role="button"
              >
                Sign up now →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection; 