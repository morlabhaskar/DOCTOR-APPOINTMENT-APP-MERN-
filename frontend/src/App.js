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
import ApplyDoctor from './pages/Doctor/ApplyDoctor';
import Appointments from './pages/Doctor/Appointments';
import Notifications from './components/Notifications';
import UsersList from './pages/admin/UsersList';
import DoctorsList from './pages/admin/DoctorsList';
import Profile from './pages/Doctor/Profile';
import BookAppointments from './pages/Doctor/BookAppointments';
import Main from './components/main';
import Footer from '../src/components/Footer/Footer.jsx';
import Profile1 from './pages/admin/Profile.jsx';
// import Nav from './components/Nav';


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
        <Route path='/main' element={<PublicRoutes><Main /></PublicRoutes>} />
        {/* <Route path='/main' element={<PublicRoutes><Nav /></PublicRoutes>} /> */}
        <Route path='/login' element={<PublicRoutes><Login /></PublicRoutes>} />
        <Route path='/register' element={<PublicRoutes><Register /></PublicRoutes>} />
        <Route path='/' element={<ProtectedRoutes> <Home /></ProtectedRoutes>} />
        <Route path='/apply-doctor' element={<ProtectedRoutes> <ApplyDoctor /></ProtectedRoutes>} />
        <Route path='/appointments' element={<ProtectedRoutes> <Appointments /></ProtectedRoutes>} />
        <Route path='/notifications' element={<ProtectedRoutes> <Notifications /></ProtectedRoutes>} />
        <Route path='/admin/users-list' element={<ProtectedRoutes> <UsersList /></ProtectedRoutes>} />
        <Route path='/admin/doctorlist' element={<ProtectedRoutes> <DoctorsList /></ProtectedRoutes>} />
        <Route path='/doctor/profile/:userId' element={<ProtectedRoutes> <Profile /></ProtectedRoutes>} />
        <Route path='/book-appointment/:doctorId' element={<ProtectedRoutes> <BookAppointments /></ProtectedRoutes>} />
        <Route path='/profile' element={<ProtectedRoutes> <Profile1 /></ProtectedRoutes>} />
      </Routes>
      <Footer/>

    </BrowserRouter>
  );
}

export default App;
