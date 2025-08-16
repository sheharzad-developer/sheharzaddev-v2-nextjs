import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener('mousemove', updateMousePosition);
    
    // Add hover detection for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .glass-card, .tech-badge');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <style jsx>{`
        .custom-cursor {
          position: fixed;
          top: 0;
          left: 0;
          width: 20px;
          height: 20px;
          background: rgba(99, 102, 241, 0.3);
          border: 2px solid rgba(99, 102, 241, 0.8);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          transition: all 0.1s ease;
          transform: translate(-50%, -50%);
        }
        
        .custom-cursor.hover {
          width: 40px;
          height: 40px;
          background: rgba(99, 102, 241, 0.1);
          border: 2px solid rgba(99, 102, 241, 1);
        }
        
        .custom-cursor-dot {
          position: fixed;
          top: 0;
          left: 0;
          width: 4px;
          height: 4px;
          background: rgba(99, 102, 241, 1);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          transition: all 0.15s ease;
          transform: translate(-50%, -50%);
        }
      `}</style>
      
      <div 
        className={`custom-cursor ${isHovering ? 'hover' : ''}`}
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
      />
      <div 
        className="custom-cursor-dot"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
      />
    </>
  );
};

export default CustomCursor;
