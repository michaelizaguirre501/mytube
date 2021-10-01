import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos }) => {
  const videoMap = videos.map((video) => {
    return <VideoItem key={video.id.videoId} info={video.snippet} />;
  });
  return <div className="ui relaxed divided list">{videoMap}</div>;
};

export default VideoList;
