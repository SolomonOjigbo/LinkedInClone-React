import React from 'react'
import './styles/Feeds.css'
import CreateIcon from '@mui/icons-material/Create';
import AssignmentIcon from '@mui/icons-material/Assignment';
import EventIcon from '@mui/icons-material/Event';
import PhotoIcon from '@mui/icons-material/Photo';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import InputOptions from './InputOptions';



function Feeds() {
  return (
    <div className="feed">
    <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
             
              type="text"
            />
            <button onClick="" type="submit">
              submit
            </button>
          </form>
        </div>
        <div className="feed__inputOption">
          <InputOptions Icon={PhotoIcon} text="Photo" color="#0384fc" />
          <InputOptions Icon={VideoCameraFrontIcon} text="Video" color="#fc9803" />
          <InputOptions Icon={EventIcon} text="Event" color="#6703fc" />
          <InputOptions
            Icon={AssignmentIcon}
            text="Write article"
            color="#fc5e03"
          />
        </div>
    </div>
  </div>
  )
}

export default Feeds;