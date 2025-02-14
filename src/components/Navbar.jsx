import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { COLORS } from '../../constants';

const Navbar = () => {
  const [section, setSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollTo = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      });
    }
    setSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  const navItems = ['home', 'about', 'projects', 'contacts'];

  return (
    <NavbarWrapper>
      <Container>
        <Logo>J</Logo>
        <NavLinks>
          {navItems.map((element) => (
            <NavItem
              key={element}
              onClick={() => scrollTo(element)}
              $isActive={section === element}
            >
              {element}
            </NavItem>
          ))}
        </NavLinks>
        <MobileMenuButton
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span />
          <span />
          <span />
        </MobileMenuButton>
      </Container>
      {isMobileMenuOpen && (
        <MobileNav>
          {navItems.map((element) => (
            <MobileNavItem
              key={element}
              onClick={() => scrollTo(element)}
              $isActive={section === element}
            >
              {element}
            </MobileNavItem>
          ))}
        </MobileNav>
      )}
    </NavbarWrapper>
  );
};

const NavbarWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: var(--background);
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
  z-index: 1000;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--accent);
  border-radius: 12px;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  position: relative;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &::after {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border-radius: 12px;
    border: 2px solid rgba(255, 255, 255, 0.1);
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    border: 1px solid var(--accent);
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 2rem;
  }
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
  margin: 0;
  padding: 0;
  text-transform: uppercase;
  font-size: 0.9rem;
  font-weight: 500;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.li`
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  position: relative;

  ${({ $isActive }) =>
    $isActive &&
    css`
      color: var(--foreground);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      border-bottom: 1px solid var(--accent);
    `}

  &:hover {
    color: var(--accent);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    transition: transform 0.2s ease;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  span {
    width: 2rem;
    height: 0.25rem;
    background: var(--accent);
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const MobileNav = styled.ul`
  list-style: none;
  padding: 1rem 2rem;
  margin: 0;
  background-color: var(--background);
  text-transform: uppercase;
  font-size: 0.9rem;
  font-weight: 500;

  @media (min-width: 769px) {
    display: none;
  }
`;

const MobileNavItem = styled.li`
  padding: 0.5rem 0;
  cursor: pointer;
  ${({ $isActive }) =>
    $isActive &&
    css`
      color: var(--foreground);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      text-decoration: underline 1px solid var(--accent);
    `}

  &:hover {
    color: var(--accent);
  }
`;

export default Navbar;
