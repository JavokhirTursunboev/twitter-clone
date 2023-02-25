import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@mui/icons-material/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={"1587600523363905538"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="Javokhir_ceo"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://www.facebook.com/javohir.bek.3150/"}
          options={{ text: "#reactjs is awesome", via: "Javokhir_ceo" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
