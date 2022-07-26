import React from 'react'
import {Search} from '@mui/icons-material'
import LinkedInImg from '../images/linkedin.svg'
import './styles/Header.css';
import HeaderOptions from './HeaderOptions';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
import { useDispatch } from 'react-redux';
import { logout } from '../features/userSlice';
import { auth } from './firebase';

function Header() {
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  }

  return (
    
    <div className='header'>
        <div className='header__left'>
            <img src={LinkedInImg} alt='logo' />
            <div className='header__search'>
                <Search />
                <input type='text' placeholder='Search' />
            </div>
        </div>
        <div className='header__right'>
            <HeaderOptions Icon={HomeIcon} title="Home" />
            <HeaderOptions Icon={SupervisorAccountIcon} title="My Network" />
            <HeaderOptions Icon={BusinessCenterIcon} title="Jobs" />
            <HeaderOptions Icon={ChatIcon} title="Messaging" />
            <HeaderOptions Icon={NotificationsIcon} title="Notifications" />
            <HeaderOptions avatar={true} title="me" onClick={logoutOfApp} />
        </div>

    </div>
  )
}

export default Header