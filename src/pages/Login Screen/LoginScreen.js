import React from 'react'
import Navbar from '../../components/2Modules/Navbar/Navbar'
import Login from '../../components/2Modules/Login/Login'
import Footer from '../../components/2Modules/Footer/Footer'

export default function LoginScreen() {
    return (
        <div className='main'>
            <div className='navbar'>
                <Navbar />
            </div>
            <div className='login'>
                <Login/>
           </div>
           <div className='footer'>
            <Footer/>
           </div>
            </div>
            )
}
