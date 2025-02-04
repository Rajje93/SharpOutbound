import React from 'react';
import { motion, MotionProps } from 'framer-motion';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  duration?: number;
}

const FadeIn: React.FC<FadeInProps> = ({ children, delay = 0, direction = 'up', duration = 0.5 }) => {
  const directions = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 }
  };

  const motionProps: MotionProps = {
    initial: {
      opacity: 0,
      ...directions[direction]
    },
    whileInView: {
      opacity: 1,
      x: 0,
      y: 0
    },
    viewport: { once: true, margin: "-100px" },
    transition: {
      duration,
      delay,
      ease: [0.25, 0.1, 0.25, 1]
    }
  };

  return (
    <motion.div {...motionProps}>
      {children}
    </motion.div>
  );
};

export default FadeIn; 