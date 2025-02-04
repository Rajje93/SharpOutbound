import React from 'react';
import './ClientLogos.css';
import { motion } from 'framer-motion';

const ClientLogos: React.FC = () => {
  const logos = [
    {
      name: "Ansuite",
      src: "https://cdn.prod.website-files.com/66ddd8483555ab75c693c7bd/66f6efc4171fc1eb2b665c9b_logo-p-500.png",
      alt: "Ansuite logo"
    },
    {
      name: "Elate",
      src: "https://cdn.prod.website-files.com/66ddd8483555ab75c693c7bd/66f6ef3a8716b43026efd910_2024-03-13__2_-removebg-preview-p-500.png",
      alt: "Elate logo"
    },
    {
      name: "Proton",
      src: "https://cdn.prod.website-files.com/66ddd8483555ab75c693c7bd/66e323d23e13ba1522e13228_proton.png",
      alt: "Proton logo"
    },
    {
      name: "Instantly",
      src: "https://cdn.prod.website-files.com/66ddd8483555ab75c693c7bd/66e32397a43751f0cf189f3f_instantly.png",
      alt: "Instantly logo"
    },
    {
      name: "Vention",
      src: "https://cdn.prod.website-files.com/66ddd8483555ab75c693c7bd/66e323ea6abeba72d48ce9ab_ventor-p-500.png",
      alt: "Vention logo"
    }
  ];

  return (
    <div className="client-logos">
      <div className="container">
        <div className="logos-grid">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              className="logo-wrapper"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <img src={logo.src} alt={logo.alt} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientLogos; 