import React from 'react'
// import Login from '../pages/login/login'
// import Register from '../pages/register/register'
import { Link } from 'react-router-dom'
import Nav from './Nav'

const Main = () => {
  return (
    <div>
        <Nav/>
        <Link to="/login"><button>Login</button></Link>
        main component
        
        {/* <Register/> */}
    </div>
    
  )
}

export default Main