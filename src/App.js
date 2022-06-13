import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { themeInitialState, applyTheme } from './assets/theme';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

function App() {
  themeInitialState ? applyTheme(true) : applyTheme(false);

  return (
    <BrowserRouter>
      <Header />
      <Main />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
