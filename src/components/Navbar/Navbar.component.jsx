import React, { useState } from 'react';
import { Nav, NavLink, NavLinkLogo, NavMenu, Bars } from './Navbar.style';

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div>
      <Nav>
        <NavLinkLogo to='/'>
          <h2>Logo</h2>
        </NavLinkLogo>
        <NavMenu className={!clicked ? 'active' : null}>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/services' activeStyle>
            Services
          </NavLink>
          <NavLink to='/signup' activeStyle>
            Login / Register
          </NavLink>
          <NavLink to='/contact' activeStyle>
            Contact Us
          </NavLink>
        </NavMenu>
        {clicked ? (
          <Bars
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
            onClick={handleClick}
          >
            <path
              fillRule='evenodd'
              d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z'
              clipRule='evenodd'
            />
          </Bars>
        ) : (
          <Bars
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            onClick={handleClick}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M6 18L18 6M6 6l12 12'
            />
          </Bars>
        )}
      </Nav>
    </div>
  );
};

export default Navbar;
