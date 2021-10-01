import React from "react";
import "./VideoItem.css";

const VideoItem = ({ info }) => {
  console.log(info);
  return (
    <div className="item videoItem">
      <img
        className="ui image videoItemImage"
        src={info.snippet.thumbnails.medium.url}
        alt={info.snippet.description}
      />
      <div className="content ">
        <div className="header videoItemContent">
          <p> {info.snippet.title}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
