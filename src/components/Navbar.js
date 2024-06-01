import { Grid, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import linkedin from "../images/linked.png";
import lens from "../images/lens.png";
import home from "../images/home.png";
import message from "../images/message.png";
import network from "../images/network.png";
import profile from "../images/profile.png";

const Navbar = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div
      style={{
        padding: "10px",
        borderBottom: "1px solid #d6d6d6",
      }}
    >
      <Grid container justifyContent="space-between" spacing={2}>
        <Grid item xs={12} sm={6}>
          <div
            style={{
              display: "flex",
              justifyContent: isSmallScreen ? "center" : "flex-start",
            }}
          >
            <img
              style={{
                width: "25px",
                marginLeft: isSmallScreen ? "0px" : "80px",
                cursor: "pointer",
              }}
              src={linkedin}
              alt="linkedin-logo"
            />
            <img
              style={{ width: "25px", marginInline: "20px", cursor: "pointer" }}
              src={lens}
              alt="search-logo"
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div
            style={{
              display: "flex",
              justifyContent: isSmallScreen ? "center" : "flex-end",
              alignItems: "center",
            }}
          >
            <img
              style={{ width: "25px", marginInline: "20px", cursor: "pointer" }}
              src={home}
              alt="home-logo"
            />
            <img
              style={{ width: "25px", marginInline: "20px", cursor: "pointer" }}
              src={network}
              alt="network-logo"
            />
            <img
              style={{ width: "25px", marginInline: "20px", cursor: "pointer" }}
              src={message}
              alt="message-logo"
            />
            <img
              style={{ width: "30px", marginInline: "20px", cursor: "pointer" }}
              src={profile}
              alt="profile-logo"
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Navbar;
