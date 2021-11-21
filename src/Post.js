import React, { forwardRef } from "react";
import "./Post.css";
import dkbor from './favic.png'
import { Avatar } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';

const Post = forwardRef(
  ({ displayName, username, verified, text, image, avatar }, ref) => {
    return (
      <div className="post">
        <div className="post__avatar">
          <Avatar src= 'http://www.shrinkpictures.com/processed/phpV7i9Pe_c1AM.jpg'/>
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                Dennies Bor
                <span className="post__headerSpecial">
                  {verified && <VerifiedIcon className="post__badge" />} @
                  dkbor
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>Heyo there, I am trying sth new in here. Django powered by React webapp</p>
            </div>
          </div>
          <img src={dkbor} alt="" />
          <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
          </div>
        </div>
      </div>
    );
  }
);

export default Post;