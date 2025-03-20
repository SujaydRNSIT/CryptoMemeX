
import { useEffect, useState } from 'react';

const ParallaxBackground = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setOffset({ x, y });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      {/* Background base */}
      <div className="absolute inset-0 bg-cyber-darker bg-opacity-90"></div>
      
      {/* Animated grid */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(15, 16, 32, 0.9), rgba(5, 8, 22, 0.95)), 
            linear-gradient(90deg, rgba(155, 135, 245, 0.1) 1px, transparent 1px), 
            linear-gradient(rgba(155, 135, 245, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '100% 100%, 40px 40px, 40px 40px',
          transform: `translate(${offset.x * 0.5}px, ${offset.y * 0.5}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      />
      
      {/* Floating orbs with parallax effect */}
      <div 
        className="absolute w-96 h-96 rounded-full bg-cyber-purple/10 blur-[100px]"
        style={{ 
          top: '20%', 
          left: '10%', 
          transform: `translate(${offset.x * 1.5}px, ${offset.y * 1.5}px)`,
          transition: 'transform 0.2s ease-out'
        }}
      />
      
      <div 
        className="absolute w-80 h-80 rounded-full bg-cyber-blue/10 blur-[80px]"
        style={{ 
          bottom: '15%', 
          right: '10%', 
          transform: `translate(${-offset.x * 2}px, ${-offset.y * 2}px)`,
          transition: 'transform 0.2s ease-out'
        }}
      />
      
      <div 
        className="absolute w-64 h-64 rounded-full bg-cyber-cyan/10 blur-[120px]"
        style={{ 
          top: '40%', 
          right: '30%', 
          transform: `translate(${-offset.x * 1}px, ${-offset.y * 1}px)`,
          transition: 'transform 0.2s ease-out'
        }}
      />
      
      {/* Crypto symbols floating */}
      <div 
        className="absolute text-8xl text-cyber-purple/5 font-bold"
        style={{ 
          top: '10%', 
          right: '15%', 
          transform: `translate(${-offset.x * 3}px, ${-offset.y * 3}px) rotate(${offset.x}deg)`,
          transition: 'transform 0.3s ease-out'
        }}
      >
        ₿
      </div>
      
      <div 
        className="absolute text-7xl text-cyber-blue/5 font-bold"
        style={{ 
          bottom: '20%', 
          left: '10%', 
          transform: `translate(${offset.x * 2.5}px, ${offset.y * 2.5}px) rotate(${-offset.y}deg)`,
          transition: 'transform 0.3s ease-out'
        }}
      >
        Ξ
      </div>
    </div>
  );
};

export default ParallaxBackground;
