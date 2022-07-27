import React from 'react'
import {Search} from '@mui/icons-material'
import LinkedInImg from '../images/linkedin.svg'
import './Header.css';
import HeaderOptions from './HeaderOptions';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';

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
            <HeaderOptions Icon={HomeIcon} title="Home" />
            <HeaderOptions Icon={SupervisorAccountIcon} title="My Network" />
            <HeaderOptions Icon={BusinessCenterIcon} title="Jobs" />
            <HeaderOptions Icon={ChatIcon} title="Messaging" />
            <HeaderOptions Icon={NotificationsIcon} title="Notifications" />
        </div>

    </div>
  )
}

export default Header