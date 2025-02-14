import React from 'react';
import styled from 'styled-components';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    {
      icon: <Github size={24} />,
      href: 'https://github.com/jasprit003',
      label: 'GitHub',
    },
    {
      icon: <Linkedin size={24} />,
      href: 'https://www.linkedin.com/in/jasprit003/',
      label: 'LinkedIn',
    },
    {
      icon: <Mail size={24} />,
      href: 'mailto:jaspritsingh002@gmail.com',
      label: 'Mail',
    },
  ];

  return (
    <Section id="contacts">
      <ContentWrapper>
        <MainHeading>Connect With Me</MainHeading>
        <Description>
          Feel free to reach out to discuss potential projects, collaborations,
          or any inquiries you may have. You can contact me via email or connect
          with me on{' '}
          <TextHighlight
            href={'https://www.linkedin.com/in/jasprit003/'}
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedIn.
          </TextHighlight>
        </Description>
        <ButtonLink
          href="mailto:jaspritsingh002@gmail.com"
          aria-label="Send email"
        >
          Say Hello
        </ButtonLink>
        <SocialLinks>
          {socialLinks.map((link, index) => (
            <SocialLink
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
            >
              {link.icon}
            </SocialLink>
          ))}
        </SocialLinks>
      </ContentWrapper>
    </Section>
  );
};

const TextHighlight = styled.a`
  color: var(--accent);
  text-decoration: underline;
`;

const Section = styled.section`
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background-color: var(--background);
`;

const ContentWrapper = styled.div`
  max-width: 600px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainHeading = styled.h2`
  font-size: 4rem;
  margin-bottom: 2rem;
  background: linear-gradient(to right, #8892b0, #a8b2d1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Description = styled.p`
  color: #8892b0;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 3rem;
  max-width: 540px;
`;

const ButtonLink = styled.a`
  all: unset;
  padding: 1rem 3rem;
  border: 1px solid var(--accent);
  color: var(--accent);
  font-size: 1rem;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  margin-bottom: 3rem;

  &:hover {
    background-color: rgba(100, 255, 218, 0.1);
    transform: translateY(-3px);
    transform: scale(1.1);
  }

  &:focus {
    box-shadow: 0 0 0 2px var(--accent);
    transform: scale(0.9);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
`;

const SocialLink = styled.a`
  color: #8892b0;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: var(--accent);
    transform: translateY(-3px);
  }
`;

export default Contact;
