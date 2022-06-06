import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header className='header-wrapper'>
      <ul className='header-pages-list'>
        <li>Home</li>
        <li>page 1</li>
        <li>page 2</li>
        <li>page 3</li>
      </ul>
      <h1 className='header-title'>React App</h1>
    </header>
  );
};

export default Header;
