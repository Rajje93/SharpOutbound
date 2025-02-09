import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './ScrollAnimations.css';

gsap.registerPlugin(ScrollTrigger);

const ScrollAnimations = () => {
  useEffect(() => {
    // Image animations
    gsap.utils.toArray<HTMLElement>('.animate-image').forEach((image) => {
      gsap.from(image, {
        x: 100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: image,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse"
        }
      });
    });

    // Text animations
    gsap.utils.toArray<HTMLElement>('.animate-text').forEach((text) => {
      gsap.from(text, {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: text,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse"
        }
      });
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return null;
};

export default ScrollAnimations; 