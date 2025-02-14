import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const TypeWriterEffect = ({ text, speed = 50, delay = 2000 }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    if (!text) return;

    setDisplayText('');

    const startTimeout = setTimeout(() => {
      let currentIndex = 0;

      const intervalId = setInterval(() => {
        if (currentIndex >= text.length) {
          clearInterval(intervalId);
          return;
        }

        setDisplayText(text.slice(0, currentIndex + 1));
        currentIndex++;
      }, speed);

      return () => clearInterval(intervalId);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [text, speed, delay]);

  return (
    <Text>
      {displayText}
      <AnimatedPulse>.</AnimatedPulse>
    </Text>
  );
};

const pulse = keyframes`
  10% { opacity: .3 }
  50% { opacity: .6}
  100% {opacity: 1}
`;

const Text = styled.span``;

const AnimatedPulse = styled.span`
  color: var(--accent);
  animation: ${pulse} 1000ms infinite ease-in-out;
`;

export default TypeWriterEffect;
