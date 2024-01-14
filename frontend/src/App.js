import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login/login';
import Register from './pages/register/register';
import {Toaster} from 'react-hot-toast' 
import Home from './pages/home/home';




function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-center" reverseOrder={false}/>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>




  );
}

export default App;
