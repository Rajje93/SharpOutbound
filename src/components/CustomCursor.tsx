import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './CustomCursor.css';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const lerp = (start: number, end: number, amount: number) => {
      return (1 - amount) * start + amount * end;
    };

    const animate = () => {
      if (cursor && cursorDot) {
        cursorX = lerp(cursorX, mouseX, 0.1);
        cursorY = lerp(cursorY, mouseY, 0.1);
        
        cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
        cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }
      requestAnimationFrame(animate);
    };

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    document.addEventListener('mousemove', onMouseMove);
    animate();

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor"></div>
      <div ref={cursorDotRef} className="cursor-dot"></div>
    </>
  );
};

export default CustomCursor; 