import React from 'react';
import { motion } from 'framer-motion';

const PricingSection = () => {
  return (
    <section id="pricing" className="relative py-20 bg-dark">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Standard Plan */}
          <motion.div 
            className="pricing-card p-8 rounded-2xl bg-dark-lighter"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Standard</h3>
            <div className="price">$3,974/month</div>
            <ul>
              <li>10 Ideal clients in 30 days guaranteed</li>
              <li>Ad-hoc sales system build</li>
              <li>Save 15+ hours a week from prospecting</li>
              <li>Pause or cancel anytime</li>
              <li>Expand to new markets</li>
            </ul>
            <a 
              href="https://buy.stripe.com/aEU00O2YYdgYc80144"
              className="get-started-button block text-center no-underline"
            >
              Get started today
            </a>
          </motion.div>

          {/* Premium Plan */}
          <motion.div 
            className="pricing-card p-8 rounded-2xl bg-dark-lighter"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Premium</h3>
            <div className="price">$5,974/month</div>
            <ul>
              <li>10 Ideal clients in 30 days guaranteed</li>
              <li>Ad-hoc sales system build</li>
              <li>Save 15+ hours a week from prospecting</li>
              <li>Pause or cancel anytime</li>
              <li>Expand to new markets</li>
              <li>Documentation with every solution</li>
              <li>45-minute systems consultation</li>
              <li>Discounted subscription transition</li>
            </ul>
            <a 
              href="https://buy.stripe.com/dR68xkczygta5JC9AB"
              className="sign-up-button block text-center no-underline"
            >
              Sign up now →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection; 