import React from 'react'
import {Search} from '@mui/icons-material'
import LinkedInImg from '../images/linkedin.svg'
import './Header.css';


function Header() {
  return (
    
    <div className='header'>
        <div className='header__left'>
            <img src={LinkedInImg} alt='logo' />
            <div className='header__search'>
                <Search />
                <input type='text' />
            </div>
        </div>
        <div className='header__right'>

        </div>

    </div>
  )
}

export default Header