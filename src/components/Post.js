import React, { forwardRef } from "react";
import "./styles/Post.css";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import InputOptions from "./InputOptions";
import MessageIcon from "@mui/icons-material/Message";
import ShareIcon from "@mui/icons-material/Share";
import SendIcon from "@mui/icons-material/Send";
import { Avatar } from "@mui/material";

const Post = forwardRef(({name, description, message, photoUrl}, ref) => {
  return (
    <div ref={ref} className="post">
      <div className="post__header">
        <Avatar src={photoUrl}> </Avatar>
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className="post__buttons">
        <InputOptions Icon={ThumbUpAltIcon} text="Like" color="gray" />
        <InputOptions Icon={MessageIcon} text="Comment" color="gray" />
        <InputOptions Icon={ShareIcon} text="Share" color="gray" />
        <InputOptions Icon={SendIcon} text="Send" color="gray" />
      </div>
    </div>
  );
})

export default Post;
