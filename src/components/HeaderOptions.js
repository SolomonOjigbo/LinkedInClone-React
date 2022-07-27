import React from 'react'
import './HeaderOptions.css';

function HeaderOptions({title, Icon, }) {
  return (
    <div className="headerOptions">
      {Icon && <Icon className="headerOptions__icon" />}
        <h3 className='HeaderOptions__title'>{title}</h3>
    </div>
  )
}

export default HeaderOptions