import React from 'react'
import Logo from '../../../assets/logo.png'
import Button from '@material-ui/core/Button';

export default function Navbar() {
    return (
        <div className='navbar-main'>
            <div className='navbar-container'>
                <div className='logo'>
                    <div>
                        <img src={Logo} alt='logo' width='60px' />
                    </div>
                    <div className='logo-text'>
                        Mobius Technologies
                    </div>
                </div>
                <div className='signup-button'>
                    <Button variant="outlined" color="primary">
                        Sign In
                    </Button>

                </div>
            </div>
        </div>
    )
}
