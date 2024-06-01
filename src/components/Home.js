import React from "react";
import Sidebar from "./Sidebar";
import Middle from "./Middle";
import RightBar from "./RightBar";
import { Grid } from "@mui/material";

const Home = () => {
  return (
    <div
      style={{ backgroundColor: "#f6f7f3", height: "100vh", padding: "20px" }}
    >
      <Grid container>
        <Grid item xs={3}>
          <Sidebar />
        </Grid>
        <Grid item xs={6}>
          <Middle />
        </Grid>
        <Grid item xs={3}>
          <RightBar />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
