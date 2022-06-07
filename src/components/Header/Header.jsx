import React, { useState } from 'react';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import languagesArray from '../../assets/languages';
import './Header.scss';

const Header = () => {
  const [language, setLanguage] = useState('en');
  const { t } = useTranslation();

  const changeLanguage = event => {
    const buttonLanguage = event.target.innerText.toLowerCase();
    if (buttonLanguage !== language) {
      setLanguage(buttonLanguage);
      i18next.changeLanguage(buttonLanguage);
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
          <li>{t('homePage')}</li>
          <li>{t('page1')}</li>
          <li>{t('page2')}</li>
          <li>{t('page3')}</li>
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
