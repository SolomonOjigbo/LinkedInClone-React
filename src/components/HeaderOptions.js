import React from 'react'
import './styles/HeaderOptions.css';
import Avatar from '@mui/material/Avatar';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

function HeaderOptions({title, Icon, avatar, onClick }) {
    const user = useSelector(selectUser);
  return (
    <div className="headerOptions">
      {Icon && <Icon className="headerOptions__icon" />}
        {avatar && (
        <Avatar 
        className="headerOptions__avatar" src={user?.photoURL} > {user?.email[0]}</Avatar>
        )}
       <h5 className='HeaderOptions__title'>{title}</h5>
    </div>
  )
}

export default HeaderOptions