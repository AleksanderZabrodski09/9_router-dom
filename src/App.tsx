import React, {useEffect} from 'react';
import './App.css';
import {Navigate, NavLink, Outlet, Route, Routes, useNavigate, useParams} from 'react-router-dom';

const Profile= ()=>{
  const navigate = useNavigate()

  // useEffect(()=>{
  //   if(true) navigate('/login')
  // },[])

  return(
    <div>
      profile
      <button onClick={()=>{navigate(-1)}}>loguot</button>
    </div>
  )
}
// <div>
//   {true ? (
//     <Navigate to={'/login'}/>
//   ) : (
//     <>profile
//       <button onClick={() => {
//         navigate('/login')
//       }}>loguot</button>
//     </>
//   )}
function App() {
  return (
    <div className="App">
      <NavLink to={'/'}>main</NavLink>---
      <NavLink to={'/login'}>login</NavLink>---
      <NavLink to={'/profile'}>profile</NavLink>---
      <NavLink to={'/profile/settings'}>settings</NavLink>---


      <Routes>
        <Route path={'/*'} element={<div>404</div>}/>
        <Route path={'/'} element={<div>main</div>}/>
        <Route path={'/login'} element={<div>login</div>}/>
        <Route path={'/profile'} element={<Profile/>}/>
        <Route path={'/profile/settings'} element={<div>settings</div>}/>
      </Routes>
    </div>
  );
}

export default App;
