import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, [role="button"], .cursor-pointer, p, h1, h2, h3, span')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  const cursorColor = isHovering ? '#33ff77' : '#60a5fa';

  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      {/* Main cursor - outer ring */}
      <div 
        className="fixed w-8 h-8 transition-all duration-100 ease-out"
        style={{ 
          left: position.x,
          top: position.y,
          transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`,
        }}
      >
        <div 
          className="absolute inset-0 rounded-full border-2 animate-pulse transition-colors duration-150"
          style={{ borderColor: cursorColor }}
        />
        
        {/* Multiple ripple rings when hovering */}
        {isHovering ? (
          <>
            <div 
              className="absolute inset-0 rounded-full border opacity-60"
              style={{ 
                borderColor: cursorColor,
                animation: 'rippleIntense 1.2s linear infinite',
              }} 
            />
            <div 
              className="absolute inset-0 rounded-full border opacity-40"
              style={{ 
                borderColor: cursorColor,
                animation: 'rippleIntense 1.2s linear infinite 0.4s',
              }} 
            />
            <div 
              className="absolute inset-0 rounded-full border opacity-20"
              style={{ 
                borderColor: cursorColor,
                animation: 'rippleIntense 1.2s linear infinite 0.8s',
              }} 
            />
          </>
        ) : (
          <div 
            className="absolute inset-0 rounded-full border opacity-50"
            style={{ 
              borderColor: cursorColor,
              animation: 'ripple 1s linear infinite',
            }} 
          />
        )}
      </div>

      {/* Inner dot */}
      <div 
        className="fixed w-2 h-2 rounded-full transition-all duration-150"
        style={{ 
          left: position.x,
          top: position.y,
          transform: `translate(-50%, -50%) scale(${isHovering ? 0.5 : 1})`,
          backgroundColor: cursorColor
        }}
      />
    </div>
  );
};

export default CustomCursor;