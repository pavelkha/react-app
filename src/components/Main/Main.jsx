import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './Main.scss';
 
const Main = () => {
  return (
    <main className='main-wrapper'>
      <h1 className='main-title'>Main</h1>
      <Routes>
        <Route exact path={'/'} element={<div>Home</div>} />
        <Route path={'/page1'} element={<div>Page 1</div>} />
        <Route path={'/page2'} element={<div>Page 2</div>} />
        <Route path={'/page3'} element={<div>Page 3</div>} />
      </Routes>
    </main>
  );
};

export default Main;
