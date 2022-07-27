import React from 'react';
import './styles/Sidebar.css';
import coverimg from '../images/coverimg.jpg';
import Avatar from '@mui/material/Avatar';


function Sidebar() {
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
        <Avatar src="" />
        <h2>Solomon Ojigbo</h2>
        <h4>solomonojigbo@gmail.com</h4>
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