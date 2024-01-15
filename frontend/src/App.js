import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login/login';
import Register from './pages/register/register';
import { Toaster } from 'react-hot-toast';
import Home from './pages/home/home';
import { useSelector } from 'react-redux';
import ProtectedRoutes from './components/protectedRoutes';
import PublicRoutes from './components/publicRoutes';


function App() {
  const { loading } = useSelector((state) => state.alerts);
  return (
    <BrowserRouter>
      {loading && (
        <div className='spinner-parent'>
          <div class="spinner-grow text-primary" role="status"></div>
          <div class="spinner-grow text-secondary" role="status"></div>
          <div class="spinner-grow text-success" role="status"></div>
        </div>
      )}

      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path='/login' element={<PublicRoutes><Login /></PublicRoutes>} />
        <Route path='/register' element={<PublicRoutes><Register /></PublicRoutes>} />
        <Route path='/' element={ <ProtectedRoutes> <Home /></ProtectedRoutes>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
