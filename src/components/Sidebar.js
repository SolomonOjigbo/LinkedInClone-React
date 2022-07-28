import React from 'react';
import './styles/Sidebar.css';
import coverimg from '../images/coverimg.jpg';
import Avatar from '@mui/material/Avatar';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';


function Sidebar() {
  const user = useSelector(selectUser);

const recentPost = (topic) => (
    <div className="recentPost">
      <span className="sidebar__hashtag">#</span>
      <p>{topic}</p>
    </div>
  );


  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img className="sidebar__img" src={coverimg} alt="" />
        <Avatar src={user.photoURL} />
        <h2>{ user.displayName } </h2>
        <h4>{ user.email}</h4>
      </div>
      <div className="sidebar__status">
        <span className="sidebar__stat">
          Who viewed you <p>1,252</p>
        </span>

        <span className="sidebar__stat">
          View on Post <p>3,224</p>
        </span>
      </div>
      <div className="sidebar__footer">
        <h4 className="sidebar__footer_tags">Recent Post</h4>
        {recentPost("JavaScript")}
        {recentPost("ReactJS")}
        {recentPost("AngularJS")}
        {recentPost("DevOps")}
        {recentPost("Softwareengineer")}
      </div>
    </div>
  )
}

export default Sidebar