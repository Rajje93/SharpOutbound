import React from 'react';
import './CompareOptions.css';
import { motion } from 'framer-motion';
import { FaCheck, FaTimes } from 'react-icons/fa';

const CompareOptions: React.FC = () => {
  const options = [
    {
      name: "SharpOutbound",
      timeToResults: "21-30 Days",
      failureRate: "Unlikely",
      price: "Based On Results",
      hasGuarantee: true
    },
    {
      name: "Hiring an SDR",
      timeToResults: "3 Months",
      failureRate: "Medium",
      price: "+$8,000/month",
      hasGuarantee: false
    },
    {
      name: "Marketing Agency",
      timeToResults: "2-4 Weeks",
      failureRate: "High",
      price: "+$5K+ Media Buying Budget",
      hasGuarantee: "Rarely"
    },
    {
      name: "Do It Yourself",
      timeToResults: "3-6 Months",
      failureRate: "Very High",
      price: "$3K For Software, Tools + Time Wasted",
      hasGuarantee: false
    }
  ];

  return (
    <section className="compare-options">
      <div className="container">
        <motion.h2 
          className="compare-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Let's compare your options
        </motion.h2>

        <div className="comparison-table">
          <div className="table-header">
            <div className="header-cell"></div>
            {options.map((option, index) => (
              <div key={index} className="header-cell">
                <span className="header-text">
                  {option.name === "SharpOutbound" && (
                    <img src="/brain-logo.svg" alt="" className="header-logo" />
                  )}
                  {option.name}
                </span>
              </div>
            ))}
          </div>

          <div className="table-row">
            <div className="row-label">Time to get results</div>
            {options.map((option, index) => (
              <div key={index} className="table-cell">
                {option.timeToResults}
              </div>
            ))}
          </div>

          <div className="table-row">
            <div className="row-label">Failure rate</div>
            {options.map((option, index) => (
              <div key={index} className="table-cell">
                {option.failureRate}
              </div>
            ))}
          </div>

          <div className="table-row">
            <div className="row-label">Price</div>
            {options.map((option, index) => (
              <div key={index} className="table-cell">
                {option.price}
              </div>
            ))}
          </div>

          <div className="table-row">
            <div className="row-label">Guarantees</div>
            {options.map((option, index) => (
              <div key={index} className="table-cell">
                {typeof option.hasGuarantee === 'boolean' ? (
                  option.hasGuarantee ? (
                    <FaCheck className="icon-check" />
                  ) : (
                    <FaTimes className="icon-times" />
                  )
                ) : (
                  option.hasGuarantee
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompareOptions; 