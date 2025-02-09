import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initScrollAnimations = () => {
  // Image animations
  gsap.utils.toArray('.animate-image').forEach((image) => {
    gsap.fromTo(
      image,
      { x: '100%', opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: image,
          start: 'top 80%',
          end: 'top 30%',
          scrub: 1,
          toggleActions: 'play none none reverse'
        }
      }
    );
  });

  // Text animations
  gsap.utils.toArray('.animate-text').forEach((text) => {
    gsap.fromTo(
      text,
      { y: '50px', opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: text,
          start: 'top 80%',
          end: 'top 30%',
          scrub: 1,
          toggleActions: 'play none none reverse'
        }
      }
    );
  });
}; 