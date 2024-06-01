import React from "react";
import profile from "../images/profile.png";
import video from "../images/video.png";
import article from "../images/article.png";
import image from "../images/image.png";
import { Card, CardContent, CardMedia, TextField } from "@mui/material";

function Middle() {
  return (
    <div style={{ margin: "20px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          background: "white",
          padding: "20px",
        }}
      >
        <img style={{ width: "50px" }} src={profile} alt="profile" />
        <TextField
          variant="outlined"
          label="Start a Post"
          style={{ width: "450px" }}
          InputProps={{ sx: { borderRadius: "150px" } }}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          background: "white",
          padding: "20px",
        }}
      >
        <img style={{ width: "35px" }} src={image} alt="icon" />
        <img style={{ width: "35px" }} src={video} alt="video" />
        <img style={{ width: "35px" }} src={article} alt="article" />
      </div>

      <Card>
        <CardContent></CardContent>
        <CardMedia></CardMedia>
      </Card>
    </div>
  );
}

export default Middle;
