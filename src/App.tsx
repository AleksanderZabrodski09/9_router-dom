import React from 'react';
import './App.css';
import {NavLink, Outlet, Route, Routes, useParams} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <NavLink to={'/'}>main</NavLink>---
      <NavLink to={'/login'}>login</NavLink>---
      <NavLink
        to={'/profile'}
        style={(params) => {
          return {color: params.isActive ? 'lime' : 'black'}
        }}
      >
        profile
      </NavLink>---
      <NavLink
        to={'/profile/settings'}
        className={({isActive}) => isActive ? 'act' : 'def'}
      >
        settings
      </NavLink>---

      <a
        href={'https://www.udemy.com/course/the-complete-javascript-course/'}
        target={'_blank'}
        rel={'noreferrer nofollow noopener '}
      >
        xxx
      </a>
      <Routes>
        <Route path={'/*'} element={<div>404</div>}/>
        <Route path={'/'} element={<div>main</div>}/>
        <Route path={'/login'} element={<div>login</div>}/>
        <Route path={'/profile'} element={<div>profile</div>}/>
        <Route path={'/profile/settings'} element={<div>settings</div>}/>

      </Routes>
    </div>
  );
}

export default App;
