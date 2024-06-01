import { Button, Grid, TextField } from "@mui/material";
import linkedin from "../images/linkedin.png";
import developer from "../images/developer.png";
import React, { useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, database, googleProvider } from "../firebase/setup";
import { addDoc, collection } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignIn = () => {
  const [username, setUsername] = useState("");

  const addUser = async () => {
    const userRef = collection(database, "Users");
    try {
      await addDoc(userRef, {
        username: username,
      });
    } catch (err) {
      console.error(err);
    }
  };

  const signInWithGoogle = async () => {
    !username && toast.warning("Please Enter Username");
    try {
      username && (await signInWithPopup(auth, googleProvider));
      username && addUser();
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <Grid
        container
        sx={{
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            p: { xs: 2, sm: 3, md: 4 },
          }}
        >
          <ToastContainer autoClose={2000} position="top-right" />
          <img style={{ width: "130px" }} src={linkedin} alt="linkedin logo" />
          <div>
            <h2
              style={{ fontWeight: "100", fontSize: "60px", color: "#b26f28" }}
            >
              Find Jobs Through This Clone
            </h2>
            <label style={{ color: "grey" }}>Enter Username</label>
            <br />
            <TextField
              onChange={(e) => setUsername(e.target.value)}
              size="small"
              variant="outlined"
              label="Username"
              sx={{ width: "100%", maxWidth: "400px", mt: "10px" }}
            />
          </div>
          <Button
            onClick={signInWithGoogle}
            size="large"
            variant="contained"
            sx={{
              width: "100%",
              maxWidth: "400px",
              borderRadius: "50px",
              textTransform: "none",
              mt: "25px",
            }}
          >
            Sign in with Google
          </Button>
        </Grid>
        <Grid
          item
          xs={12} // Full width on smaller screens, hidden
          sm={6} // Half width from small devices and visible
          sx={{
            justifyContent: "center",
            alignItems: "center",
            display: { xs: "none", md: "flex" }, // Hide on xs, show on md and larger
          }}
        >
          <img src={developer} alt="developer" style={{ maxWidth: "100%" }} />
        </Grid>
      </Grid>
    </div>
  );
};

export default SignIn;
