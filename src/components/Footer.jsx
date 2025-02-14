import React from 'react';
import styled from 'styled-components';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterWrapper>
      <FooterContent>
        <Copyright>
          Built with <HeartSpan>♥</HeartSpan> by{' '}
          <TextHighlight
            href="https://github.com/jasprit003"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jasprit Singh
          </TextHighlight>
        </Copyright>

        <Year>{currentYear} © All Rights Reserved</Year>
      </FooterContent>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  width: 100%;
  padding: 1rem 0;
  background-color: var(--background);
  border-top: 1px solid rgba(136, 146, 176, 0.1);
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const Copyright = styled.p`
  color: #8892b0;
  font-size: 0.9rem;
  text-align: center;
`;

const HeartSpan = styled.span`
  color: #ff0000;
`;

const TextHighlight = styled.a`
  color: var(--accent);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Year = styled.p`
  color: #8892b0;
  font-size: 0.8rem;
  opacity: 0.8;
`;

export default Footer;
