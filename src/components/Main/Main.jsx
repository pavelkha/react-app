import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Page1 from './Page1/Page1';
import './Main.scss';

const Main = () => {
  return (
    <main className='main-wrapper'>
      <Routes>
        <Route exact path={'/'} element={<div>Home</div>} />
        <Route path={'/page1'} element={<Page1 />} />
        <Route path={'/page2'} element={<div>Page 2</div>} />
        <Route path={'/page3'} element={<div>Page 3</div>} />
      </Routes>
    </main>
  );
};

export default Main;
