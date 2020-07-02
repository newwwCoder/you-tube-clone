import React from "react";

import { Paper, Typography } from "@material-ui/core";

const VideoDetail = ({ video }) => {
  if (!video) return <div>Loading...</div>;

  console.log(video.id.videoId);

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <React.Fragment>
      <Paper elevation={8} style={{ height: "30%" }}>
        <iframe
          frameBorder="100"
          height="100%"
          width="100%"
          title="Video Player"
          src={videoSrc}
        />
      </Paper>
      <Paper elevation={6} style={{ padding: "20px" }}>
        <Typography varient="h2">
          {video.snippet.title} - {video.snippet.channelTitle}
        </Typography>
        <Typography varient="subtitle1">
          {video.snippet.channelTitle}
        </Typography>
        <Typography varient="subtitle2">{video.snippet.description}</Typography>
      </Paper>
    </React.Fragment>
  );
};

export default VideoDetail;
