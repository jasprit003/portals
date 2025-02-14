import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { ChevronRight } from 'lucide-react';
import Container from './Container';
import ExtraSkills from './ExtraSkills.jsx';

import pic from '../assets/pic.jpg';

const About = () => {
  const tag = 'about';
  const stack = ['React.js', 'Node.js', 'JavaScript', 'Figma', 'C++'];
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            imageRef.current.classList.add('animate');
          } else {
            imageRef.current.classList.remove('animate');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Container
      id={tag}
      heading={tag}
    >
      <Wrapper>
        <ImageSection>
          <ImageWrapper>
            <Image
              ref={imageRef}
              src={pic}
              alt="Profile"
              width="220px"
            />
          </ImageWrapper>
        </ImageSection>
        <TextSection>
          <IntroPara>
            Hi, I'm <Highlighter>Jaspreet</Highlighter>, a B.Tech student at
            Chitkara University with a passion for crafting beautiful,
            functional digital experiences. Over time, I've immersed myself in
            building projects with React, which has allowed me to blend my love
            for design with my technical expertise.
          </IntroPara>
          <IntroPara>
            These are some technologies I've been working with:
          </IntroPara>
          <StackList>
            {stack.map((element) => (
              <Stack key={element}>
                <ChevronRight size={12} /> {element}
              </Stack>
            ))}
          </StackList>
        </TextSection>
      </Wrapper>
      <ExtraSkillsWrapper>
        <ExtraSkillsHeading>Skillset</ExtraSkillsHeading>
        <ExtraSkills />
      </ExtraSkillsWrapper>
      <ExtraSkillsWrapper>
        <ExtraSkillsHeading>Tools I use</ExtraSkillsHeading>
        <ExtraSkills
          list={['VS Code', 'Sublime', 'Figma', 'Hyper', 'Photoshop']}
        />
      </ExtraSkillsWrapper>
    </Container>
  );
};

const Highlighter = styled.span`
  color: var(--accent);
`;

const Wrapper = styled.div`
  padding-top: 1.4rem;
  width: 100%;
  display: flex;
  gap: 1rem;
  margin-bottom: 2.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TextSection = styled.div`
  width: 55%;
  font-size: 1.1rem;

  @media (max-width: 768px) {
    width: 100%;
    order: 2;
  }
`;

const IntroPara = styled.p`
  padding: 1rem;
  opacity: 0.8;
`;

const StackList = styled.ul`
  padding-top: 0.5rem;
  list-style: none;
  font-style: italic;
  font-size: 1rem;
  padding-left: 1rem;
`;

const Stack = styled.li`
  &:hover {
    color: var(--accent);
    opacity: 1;
  }
`;

const ExtraSkillsWrapper = styled.div`
  width: 100%;
  margin-top: 1.5rem;
  padding: 0 1rem;
  margin-bottom: 3rem;
`;

const ExtraSkillsHeading = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: var(--primary-text);
  background: linear-gradient(to right, #8892b0, #a8b2d1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
`;

const ImageSection = styled.div`
  padding: 1rem;
  width: 40%;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 1rem;
    order: 1;
  }
`;

const ImageWrapper = styled.div`
  width: 220px;
  height: 220px;
  background-color: var(--accent);
`;

const Image = styled.img`
  transform: translateY(0) translateX(0);
  transition: transform 600ms ease-in-out;
  filter: grayscale(100%);
  &.animate {
    transform: translateY(20px) translateX(-16px);
  }
`;

export default About;
