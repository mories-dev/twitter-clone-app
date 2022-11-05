import { ChatBubbleOutline, FavoriteBorder, PublishOutlined, Repeat, VerifiedUser } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import React from 'react'
import "./Post.css";

function Post() {
  return (
    <div className="post">
      <div className="post_avatar">
        <Avatar />
      </div>
      <div className="post_body">
        <div className="post_header">
          <div className="post_headerText">
            <h3>
              プログラミングチュートリアル
              <span className="post_headerSpecial">
                <VerifiedUser className="post_badge"/>
                @Shin_Enginner
              </span>
              </h3>
            </div>
            <div className="post_headerDescription">
              <p>Reactなう。</p>
            </div>
          </div>
          <img src="https://source.unsplash.com/random" alt="ツイートの画像" />
          <div className="post_footer">
            <ChatBubbleOutline fontSize="small" />
            <Repeat fontSize="small" />
            <FavoriteBorder fontSize="small" />
            <PublishOutlined fontSize="small" />
          </div>
      </div>
    </div>
  )
}

export default Post
