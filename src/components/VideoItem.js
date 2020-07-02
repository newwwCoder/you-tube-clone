import React from "react";

import { Grid, Paper, Typography } from "@material-ui/core";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <Grid item xs={12}>
      <Paper
        style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        onClick={() => onVideoSelect(video)}
      >
        <img
          style={{ margin: "15px" }}
          alt="thumbnail"
          alignItems="center"
          src={video.snippet.thumbnails.medium.url}
        />
      </Paper>
      <Typography
        varient="subtitle1"
        style={{
          display: "flex",
          alignItems: "center",
          padding: "20px",
          margin: "0px",
          cursor: "pointer",
        }}
        onClick={() => onVideoSelect(video)}
      >
        <b>{video.snippet.title}</b>
      </Typography>
    </Grid>
  );
};

export default VideoItem;
