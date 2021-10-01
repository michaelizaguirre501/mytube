import React from "react";
import "./VideoItem.css";

const VideoItem = ({ video, onVideoSelect }) => {
  console.log("Video Item", video);
  return (
    <div onClick={() => onVideoSelect(video)} className="item videoItem">
      <img
        className="ui image videoItemImage"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.description}
      />
      <div className="content ">
        <div className="header videoItemContent">
          <p> {video.snippet.title}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
