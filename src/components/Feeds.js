import React, { useEffect, useState } from 'react'
import './styles/Feeds.css'
import CreateIcon from '@mui/icons-material/Create';
import AssignmentIcon from '@mui/icons-material/Assignment';
import EventIcon from '@mui/icons-material/Event';
import PhotoIcon from '@mui/icons-material/Photo';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import InputOptions from './InputOptions';
import Post from './Post';
import { db } from "./firebase";
import firebase from "firebase";
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import FlipMove from "react-flip-move";



function Feeds() {
  const [ posts, setPosts ] = useState([]);
  const [ input, setInput ] = useState('');
  const user = useSelector(selectUser);

  useEffect(() => {
    db.collection("posts").orderBy("timestamp", "desc").onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => (
        {
          id: doc.id,
          data: doc.data(),
        }
      )))
    })
  }, [])

  const submitPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="feed">
    <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
             onChange={(e => setInput(e.target.value))}
              type="text"
            />
            <button onClick={submitPost} type="submit">
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
    <FlipMove>
    {posts.map(({ id, data: { name, message, description, photoUrl } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      ))}
      </FlipMove>
  </div>
  )
}

export default Feeds;