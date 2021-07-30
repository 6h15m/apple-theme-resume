import React from 'react';
import styled from 'styled-components';
import palette from '../../styles/palette';
import { Link } from 'react-router-dom';

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  background: ${palette.gray[9]};
  display: flex;
  z-index: 999;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  height: 3.3rem;
  display: flex;
  flex-grow: 1;
  max-width: 1112px;
  align-items: center;
  justify-content: space-between;
  .logo {
    margin-left: 2rem;
    font-size: 20px;
    font-weight: 600;
    color: ${palette.gray[0]};
  }
  @media screen and (max-width: 1112px) {
    min-width: 768px;
  }
`;

const Menu = styled.div`
  display: flex;
  margin-right: 2rem;
  .menu-item {
    padding: 8px 14px;
  }
  .menu-cta {
    margin-left: 8px;
    border-radius: 41px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 5.4rem;
    height: 2rem;
    background: ${palette.theme[2]};
    color: ${palette.gray[0]};
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Spacer = styled.div`
  filter: blur(30px);
  height: 3.3rem;
`;

const Header = () => {
  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <div className="logo">Yeseo Lee</div>
          <Menu>
            <Link to="/">
              <div className="menu-item">About</div>
            </Link>
            <Link to="/project">
              <div className="menu-item">Project</div>
            </Link>
            <Link to="/contact">
              <div className="menu-cta">Contact</div>
            </Link>
          </Menu>
        </Wrapper>
      </HeaderBlock>
      <Spacer />
    </>
  );
};

export default Header;
