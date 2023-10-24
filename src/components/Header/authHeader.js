import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  height: 80px;
  background-color: rgba(23, 34, 52, 1);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 10px;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin-right: 80px;
  display: flex;
  gap: 10px;
`;

const AuthButton = styled.button`
  background: rgba(178, 159, 126, 1);
  font-family: 'Merriweather', serif;
  border-radius: 8px;
  color: rgba(255, 255, 255, 1);
  padding: 10px 24px;
  width: 160px;
`;

const LoginButton = styled.button`
  background: transparent;
  font-family: 'Merriweather', serif;
  border-radius: 8px;
  border: 2px solid rgba(255, 255, 255, 1);
  color: rgba(255, 255, 255, 1);
  padding: 10px 24px;
  width: 160px;
`;

function Header() {
  const location = useLocation();

  return (
    <HeaderContainer>
      <NavList>
        {location.pathname !== '/auth' && (
          <Link to="/auth">
            <LoginButton>Log in</LoginButton>
          </Link>
        )}

        {location.pathname !== '/auth' && (
          <Link to="/auth">
            <AuthButton>Sign up</AuthButton>
          </Link>
        )}
      </NavList>
    </HeaderContainer>
  );
}

export default Header;
