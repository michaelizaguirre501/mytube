import React from "react";
import "./VideoItem.css";

const VideoItem = ({ info }) => {
  console.log(info);
  return (
    <div className="item videoItem">
      <img
        className="ui image videoItemImage"
        src={info.thumbnails.medium.url}
        alt={info.description}
      />
      <div className="content ">
        <div className="header videoItemContent">
          <p> {info.title}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
