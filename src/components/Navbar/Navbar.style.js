import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const Nav = styled.nav`
  position: relative;
  background: #000;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  z-index: 10;
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 10px;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #05f43e;
  }

  @media screen and (max-width: 768px) {
    text-align: center;
    justify-content: center;
    padding: 20px;
    width: 100vw;
  }
`;

export const NavLinkLogo = styled(Link)`
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center;
`;

export const Bars = styled.svg`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    font-size: 18px;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -20px;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 80px;
    left: -100%;
    opacity: 0;
    transition: all 0.3s ease;

    &.active {
      left: 0;
      opacity: 1;
      background: #000;
    }
  }
`;
