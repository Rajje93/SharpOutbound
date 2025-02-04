import { useState, useRef } from 'react';
import './FAQ.css';
import { 
  FaChevronDown, 
  FaDollarSign, 
  FaClock, 
  FaCreditCard,
  FaRocket,
  FaShieldAlt
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
  icon: JSX.Element;
  category: string;
}

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const faqRefs = useRef<(HTMLDivElement | null)[]>([]);

  const faqItems: FAQItem[] = [
    {
      question: "Why do this instead of hiring an SDR?",
      answer: "$8,595 /mo, minimum Is what you'd pay a single good SDR—except for 17x the output. You're also on the hook for benefits + severance, and there's no guarantee they'll deliver what you want them to. Our system is simply quantitatively & qualitatively better for the vast majority of companies under $3M/yr: you pay less, get results faster.",
      icon: <FaDollarSign className="category-icon" />,
      category: "Cost"
    },
    {
      question: "How much more cost-effective is this, really?",
      answer: "When you take into account payroll, benefits, severance, and the opportunity cost of hiring, our service is ~30% of the price of hiring in-house, and ~70% of the price of hiring an agency. You also get access to two world-class ops executives that have helped scale several 8-figure companies, as well as a 100% satisfaction guarantee.",
      icon: <FaDollarSign className="category-icon" />,
      category: "Cost"
    },
    {
      question: "How does payment work?",
      answer: "Our pricing is mostly based on results. When you click one of the payment options above, you'll be taken to a Stripe Checkout page. After you pay, we'll automatically create a subscription for you that renews on the same day every month. You can cancel or pause at any time.",
      icon: <FaCreditCard className="category-icon" />,
      category: "Payment"
    },
    {
      question: "How quickly do we see results?",
      answer: "We don't waste 14 days on \"warm-up\" nonsense or infrastructure fluff like other lead gen agencies. While they're busy warming up domains, we're busy delivering results. We can get started in just a few days, and you'll start seeing results within 3-5 days. Most of our clients see a positive ROI within the first month—no delays, no excuses.",
      icon: <FaClock className="category-icon" />,
      category: "Timeline"
    },
    {
      question: "What's your refund policy?",
      answer: "If you're not 100% satisfied with your service, we'll keep working for free until you are. We are committed to ensuring your satisfaction and will work diligently to address any concerns during your notice period.",
      icon: <FaShieldAlt className="category-icon" />,
      category: "Guarantee"
    }
  ];

  const toggleFAQ = (index: number) => {
    // Scroll into view when opening
    if (activeIndex !== index) {
      setTimeout(() => {
        faqRefs.current[index]?.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      }, 100);
    }
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="faq-grid">
          {faqItems.map((item, index) => (
            <motion.div 
              key={index}
              ref={el => faqRefs.current[index] = el}
              className={`faq-item glass-effect ${activeIndex === index ? 'active' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <div className="question-content">
                  {item.icon}
                  <h3>{item.question}</h3>
                </div>
                <motion.div 
                  className="icon-wrapper"
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaChevronDown className="chevron-icon" />
                </motion.div>
              </div>
              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div 
                    className="faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <p>{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ; 