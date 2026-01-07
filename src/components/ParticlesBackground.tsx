'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  opacity: number;
  animationX: number[];
  animationY: number[];
  duration: number;
}

export default function ParticlesBackground() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mounted, setMounted] = useState(false);
  const isInitialized = useRef(false);
  
  useEffect(() => {
    if (isInitialized.current) return;
    isInitialized.current = true;
    
    setMounted(true);
    
    const generateParticles = () => {
      const newParticles: Particle[] = [];
      const colors = ['#14b8a6', '#06b6d4', '#10b981', '#2dd4bf'];
      
      for (let i = 0; i < 50; i++) {
        const animX = [
          Math.random() * 50 - 25,
          Math.random() * 50 - 25,
          Math.random() * 50 - 25,
        ];
        
        const animY = [
          Math.random() * 50 - 25,
          Math.random() * 50 - 25,
          Math.random() * 50 - 25,
        ];
        
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 4 + 1,
          color: colors[Math.floor(Math.random() * colors.length)],
          opacity: Math.random() * 0.5 + 0.1,
          animationX: animX,
          animationY: animY,
          duration: 10 + Math.random() * 20,
        });
      }
      
      setParticles(newParticles);
    };
    
    generateParticles();
  }, []);
  
  if (!mounted) return null;
  
  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            opacity: particle.opacity,
          }}
          animate={{
            x: particle.animationX,
            y: particle.animationY,
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      ))}
    </div>
  );
} 