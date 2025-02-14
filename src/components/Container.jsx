import React from 'react';
import styled from 'styled-components';

const NAVBAR_HEIGHT = 80;

const Container = ({ id, heading, children }) => {
  return (
    <Section id={id}>
      <Wrapper>
        <HeadingRow>
          <Heading>{heading}</Heading>
          <Hr />
        </HeadingRow>
        {children}
      </Wrapper>
    </Section>
  );
};

const Section = styled.section`
  scroll-margin-top: ${NAVBAR_HEIGHT}px;
  width: 100%;
`;

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;

  /* Adjust padding on mobile devices */
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const HeadingRow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
`;

const Heading = styled.span`
  font-size: 2rem;
  font-style: italic;
  color: var(--foreground);
  opacity: 0.8;
  padding: 0.3rem 1rem;

  /* Responsive font size for mobile */
  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

const Hr = styled.hr`
  flex: 1;
  border: none;
  border-top: 1px solid white;
  margin-left: 1rem;
  opacity: 0.9;
`;

export default Container;
