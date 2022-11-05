import Search from '@mui/icons-material/Search';
import React from 'react'
import "./Widgets.css";
import { 
  TwitterTimelineEmbed, 
  TwitterShareButton, 
  TwitterTweetEmbed, 
} from 'react-twitter-embed';

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets_input">
        <Search className="widgets_searchIcon" />
        <input placeholder="キーワード検索" type="text"></input>
      </div>
      <div className="widgets_widgetContainer">
        <h2>いまどうしてる？</h2>
        {/* ライブラリを追加 */}
        <TwitterTweetEmbed tweetId={"1533123603981643776"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="mories_dev"
          options={{height: 400}}
        />
        <TwitterShareButton
          url={"https://twitter.com/mories_dev"}
          options={{text: "#React.js勉強中", via: "mories_dev"}}
        />
      </div>
    </div>
  )
}

export default Widgets
