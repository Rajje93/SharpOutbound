import React from 'react';
import { motion } from 'framer-motion';

const PricingSection = () => {
  const handlePurchase = (url) => {
    window.location.href = url;
  };

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
            {/* ... other plan details */}
            <button 
              onClick={() => handlePurchase('https://buy.stripe.com/aEU00O2YYdgYc80144')}
              className="inline-block w-full py-3 px-6 text-center rounded-lg bg-primary hover:bg-primary-hover transition-colors cursor-pointer"
            >
              Get Started
            </button>
          </motion.div>

          {/* Premium Plan */}
          <motion.div 
            className="pricing-card p-8 rounded-2xl bg-dark-lighter"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Premium</h3>
            {/* ... other plan details */}
            <button 
              onClick={() => handlePurchase('https://buy.stripe.com/dR68xkczygta5JC9AB')}
              className="inline-block w-full py-3 px-6 text-center rounded-lg bg-primary hover:bg-primary-hover transition-colors cursor-pointer"
            >
              Get Started
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection; 