import React from 'react';
import styled from 'styled-components';

import About from './components/About';
import Contact from './components/Contact';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

const App = () => {
  return (
    <Wrapper>
      <header>
        <Navbar />
      </header>
      <Main>
        <HeroSection />
        <About />
        <Projects />
        <Contact />
      </Main>
      <footer>
        <Footer />
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const Main = styled.main`
  padding: 20px;
`;
export default App;
