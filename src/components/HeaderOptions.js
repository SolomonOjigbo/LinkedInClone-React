import React from 'react'
import './styles/HeaderOptions.css';
import Avatar from '@mui/material/Avatar';

function HeaderOptions({title, Icon, avatar, }) {
  return (
    <div className="headerOptions">
      {Icon && <Icon className="headerOptions__icon" />}
        {avatar && (
        <Avatar 
        className="headerOptions__avatar" src=""
        />
      )}
       <h3 className='HeaderOptions__title'>{title}</h3>
    </div>
  )
}

export default HeaderOptions