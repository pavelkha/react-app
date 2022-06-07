import React, { useState } from 'react';
import './Header.scss';

const Header = () => {
  const [language, setLanguage] = useState('en');
  const languagesArray = ['en', 'ru'];

  const changeLanguage = event => {
    const buttonLanguage = event.target.innerText.toLowerCase();
    if (buttonLanguage !== language) {
      setLanguage(buttonLanguage);
    };
  };
  
  const renderLanguageButtons = () => {
    return (
      languagesArray.map((currentLang, index) => {
        const className = currentLang === language ? 
        'header-language-button header-active-language-button' : 
        'header-language-button';
        return (
          <li key={index}>
            <button onClick={changeLanguage} className={className}>
              {currentLang}
            </button>
          </li>
        );
      })
    );
  };

  return (
    <header className='header-wrapper'>
      <div className='header-flex-container'>
        <ul className='header-pages-list'>
          <li>Home</li>
          <li>page 1</li>
          <li>page 2</li>
          <li>page 3</li>
        </ul>
        <ul className='header-languages-list'>
          {renderLanguageButtons()}
        </ul>
      </div>
      <h1 className='header-title'>React App</h1>
    </header>
  );
};

export default Header;
