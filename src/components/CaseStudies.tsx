import React, { useEffect } from 'react';
import './CaseStudies.css';
import { motion } from 'framer-motion';

interface CaseStudy {
  amount: string;
  pipeline: string;
  title: string;
  description: string;
  image: string;
  stats: {
    pipeline: string;
    meetings: {
      value: string;
      label: string;
    };
  };
}

const CaseStudies: React.FC = () => {
  const caseStudies: CaseStudy[] = [
    {
      amount: "+$145,888",
      pipeline: "in new revenue added in 3 months",
      title: "We secured seven new major partnerships for our client, resulting in over $250,000 in revenue.",
      description: "Through targeted outreach and strategic positioning...",
      image: "https://cdn.prod.website-files.com/66ddd8483555ab75c693c7bd/66f6f1b59334015ef72e84c9_%24145%2C000%20(5).png",
      stats: {
        pipeline: "+$145,000",
        meetings: {
          value: "15+",
          label: "MEETINGS/MONTH"
        }
      }
    },
    {
      amount: "+$85,000",
      pipeline: "Multiple new clients from multiple new markets",
      title: "Expanded market reach and client base significantly",
      description: "Successfully penetrated new markets...",
      image: "https://cdn.prod.website-files.com/66ddd8483555ab75c693c7bd/66f6f0b7171fc1eb2b675727_case%20study%201.png",
      stats: {
        pipeline: "+$85,000",
        meetings: {
          value: "12+",
          label: "MEETINGS/MONTH"
        }
      }
    },
    {
      amount: "+$70,221",
      pipeline: "in new revenue added in 3 months",
      title: "ForPlayers was able to raise prices and add over $70,000 in revenue.",
      description: "Through strategic pricing optimization...",
      image: "https://cdn.prod.website-files.com/66ddd8483555ab75c693c7bd/66f6f17ec548cc505ad4ef48_%24145%2C000%20(5).png",
      stats: {
        pipeline: "+$70,000",
        meetings: {
          value: "13",
          label: "MEETINGS/MONTH"
        }
      }
    }
  ];

  // Add mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.querySelectorAll('.case-study-card');
      cards.forEach((card: any) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / card.offsetWidth) * 100;
        const y = ((e.clientY - rect.top) / card.offsetHeight) * 100;
        card.style.setProperty('--mouse-x', `${x}%`);
        card.style.setProperty('--mouse-y', `${y}%`);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="case-studies" className="case-studies">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Real Results, Real Growth
        </motion.h2>

        <div className="case-studies-grid">
          {caseStudies.map((study, index) => (
            <motion.div 
              key={index}
              className="case-study-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="case-study-content">
                <div className="metrics">
                  <h3>{study.amount}</h3>
                  <div className="pipeline">{study.title}</div>
                </div>
                <p className="case-description">{study.description}</p>
                <div className="stats">
                  <div className="stat">
                    <span className="stat-value">{study.pipeline}</span>
                    <span className="stat-label">{study.stats.pipeline}</span>
                  </div>
                  <div className="stat">
                    <span className="stat-value">{study.stats.meetings.value}</span>
                    <span className="stat-label">{study.stats.meetings.label}</span>
                  </div>
                </div>
              </div>
              <div className="case-study-image">
                <img src={study.image} alt={study.title} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies; 