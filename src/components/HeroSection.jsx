import React from 'react';
import styled from 'styled-components';
import { ChevronDown } from 'lucide-react';

import TypeWriterEffect from './TypeWriterEffect';

const NAVBAR_HEIGHT = 80;

const HeroSection = () => {
  const scrollToNextSection = () => {
    const heroSection = document.getElementById('home');
    const nextSection = heroSection.nextElementSibling;

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Section id="home">
      <Wrapper>
        <HeroHeading>
          <TypeWriterEffect text="Hi, my name is Jaspreet Singh" />
        </HeroHeading>
        <HeroText>
          I design and build websites that beautifully merge modern aesthetics
        </HeroText>
        <Summary>
          a passionate web developer and designer dedicated to creating engaging
          digital experiences. I blend creativity with clean, functional code to
          bring innovative ideas to life.
        </Summary>
        <SayHiButton
          onClick={(e) => {
            window.location.href = 'mailto:jaspritsingh002@gmail.com';
          }}
        >
          Say Hi
        </SayHiButton>
      </Wrapper>
      <ScrollButton
        onClick={scrollToNextSection}
        aria-label="Scroll to next section"
      >
        <ChevronDown size={32} />
      </ScrollButton>
    </Section>
  );
};

const Section = styled.section`
  scroll-margin-top: ${NAVBAR_HEIGHT}px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    justify-content: center;
    padding: 0 1rem;
  }
`;

const Wrapper = styled.div`
  color: var(--foreground);
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const HeroHeading = styled.h2`
  font-size: 3rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroText = styled.p`
  font-size: 1.6rem;
  opacity: 0.8;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const Summary = styled.p`
  margin-top: 0.5rem;
  max-width: 580px;
  opacity: 0.6;

  @media (max-width: 768px) {
    display: none;
  }
`;

const SayHiButton = styled.button`
  all: unset;
  padding: 1rem 3rem;
  color: var(--accent);
  border: 2px solid var(--accent);
  transition: transform 100ms ease-out;
  margin-top: 1.5rem;
  box-shadow: var(--shadow--elevation--low);
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.9);
  }

  @media (max-width: 768px) {
    margin: 1.5rem auto;
  }
`;

const ScrollButton = styled.button`
  all: unset;
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  color: var(--accent);
  cursor: pointer;
  animation: bounce 2s infinite;

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateX(-50%) translateY(0);
    }
    40% {
      transform: translateX(-50%) translateY(-30px);
    }
    60% {
      transform: translateX(-50%) translateY(-15px);
    }
  }
`;

export default HeroSection;
