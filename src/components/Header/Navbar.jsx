import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

// Styled component for the navbar container
const NavbarContainer = styled.nav`
  background-color: #1e1e1e;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

// Styled component for the branding/title
const Branding = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
`;

// Styled component for the navigation links container
const NavLinks = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

// Styled component for each navigation link
const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 10px;
  cursor: pointer;
  position: relative;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 5px;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: ${props => props.active ? '100%' : '0'};
    height: 2px;
    background-color: #f0f0f0; /* Highlight color */
    transition: width 0.3s ease;
  }
`;

// Navbar component definition
const Navbar = () => {
  const location = useLocation(); // Hook from react-router-dom to get current location

  return (
    <NavbarContainer>
      <Branding>Weather</Branding> {/* Branding/title of the navbar */}
      <NavLinks>
        {/* Navigation links with active state based on current pathname */}
        <NavLink to="/farmer" active={location.pathname === '/farmer'}>Farmer</NavLink>
        <NavLink to="/event-planner" active={location.pathname === '/event-planner'}>Event Planners</NavLink>
        <NavLink to="/travelers" active={location.pathname === '/travelers'}>Travelers</NavLink>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
