import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../../store/toolkitSlice';
import { applyTheme } from '../../assets/theme';
import lightTheme from '../../assets/images/light-theme-icon.svg';
import darkTheme from '../../assets/images/dark-theme-icon.svg';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import languagesArray from '../../assets/languages';
import './Header.scss';

const Header = () => {
  const [language, setLanguage] = useState(
    localStorage.getItem('i18nextLng') ? 
    localStorage.getItem('i18nextLng') : document.querySelector('html').lang
  );
  const isLight = useSelector(state => state.themeState.isLight);
  const { t } = useTranslation();
  const dispatch = useDispatch();

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

  const renderPagesLinks = () => {
    const pagesLinksArray = [
      { path: '/', content: 'homePage' },
      { path: '/page1', content: 'page1' },
      { path: '/page2', content: 'page2' },
      { path: '/page3', content: 'page3' },
    ];
    return (
      pagesLinksArray.map((link, index) => {
        return (
          <li key={index}>
            <Link to={link.path}>{t(link.content)}</Link>
          </li>
        );
      })
    );
  };

  const themeHandler = () => {
    dispatch(changeTheme());
    applyTheme(!isLight);
    localStorage.setItem('isLightTheme', JSON.stringify(!isLight));
  };

  return (
    <header className='header-wrapper'>
      <ul className='header-pages-list'>
        {renderPagesLinks()}
      </ul>
      <div className='header-flex-container'>
        <button className='header-theme-button' onClick={themeHandler}>
          {isLight ? <img src={lightTheme} alt='light theme' /> : 
          <img src={darkTheme} alt='dark theme' />}
        </button>          
        <ul className='header-languages-list'>
          {renderLanguageButtons()}
        </ul>
        <h1 className='header-title'>React App</h1>
      </div>  
    </header>
  );
};

export default Header;
