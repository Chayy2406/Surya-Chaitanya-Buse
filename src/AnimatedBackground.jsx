// AnimatedBackground.jsx
import React, { useEffect, useState } from 'react';

const AnimatedBackground = () => {
  const [codeElements, setCodeElements] = useState([]);
  
  const codeSnippets = [
    '<div>', 'function()', 'const', 'let', 'import', 
    'return', '{code}', '=>',  'async', 'await',
    '0101', 'class', 'npm', 'git', 'react'
  ];

  useEffect(() => {
    const createCodeElement = () => {
      const element = {
        id: Math.random(),
        text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
        left: `${Math.random() * 100}%`,
        duration: 10 + Math.random() * 20,
        delay: -Math.random() * 20,
        fontSize: `${Math.random() * 1 + 0.5}rem`
      };
      
      setCodeElements(prev => [...prev, element]);
      
      // Remove element after animation
      setTimeout(() => {
        setCodeElements(prev => prev.filter(e => e.id !== element.id));
      }, element.duration * 1000);
    };

    // Create initial elements
    for (let i = 0; i < 20; i++) {
      createCodeElement();
    }

    // Create new elements periodically
    const interval = setInterval(createCodeElement, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="code-background">
      {codeElements.map(element => (
        <div
          key={element.id}
          className="code-element"
          style={{
            left: element.left,
            animation: `floatingCode ${element.duration}s linear ${element.delay}s infinite`,
            fontSize: element.fontSize
          }}
        >
          {element.text}
        </div>
      ))}
    </div>
  );
};

export default AnimatedBackground;