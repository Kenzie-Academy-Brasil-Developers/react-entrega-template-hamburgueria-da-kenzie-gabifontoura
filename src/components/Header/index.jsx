import React from 'react'
import logo from '../../assets/logo.svg';
import { StyledHeader } from './style';

const Header = () => {
  return (
    <StyledHeader>
        <div className='container'>
            <img src={logo} alt="Burger Kenzie" />
        </div>
    </StyledHeader>
  )
}

export default Header