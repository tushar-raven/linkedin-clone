import React from "react";
import banner from "../images/Dark_Purple__Coral_Gradient_Content_Creator_LinkedIn_Banner_(1).png";
import profile from "../images/profile.png";

const Sidebar = () => {
  return (
    <div
      style={{
        border: "1px solid #d6d6d6",
        height: "400px",
        borderRadius: "15px",
        overflow: "hidden",
        margin: "20px",
      }}
    >
      <img
        style={{
          height: "65px",
          width: "100%",
          objectFit: "cover",
        }}
        src={banner}
        alt="banner"
      />

      <div
        style={{
          textAlign: "center",
          margin: "10px 0",
        }}
      >
        <img
          style={{ width: "55px", objectFit: "cover" }}
          src={profile}
          alt="profile"
        />
        <h3
          style={{
            color: "#6f6f6f",
          }}
        >
          Name
        </h3>
        <h4
          style={{
            color: "#6f6f6f",
            position: "relative",
          }}
        >
          Designation
        </h4>
      </div>

      <div
        style={{
          color: "#6f6f6f",
          fontWeight: "1",
          borderTop: "1px solid #d6d6d6",
          borderBottom: "1px solid #d6d6d6",
          padding: "10px",
          margin: "10px 0",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <h5 style={{ fontWeight: "100" }}>Connections</h5>
        <h5 style={{ fontWeight: "100" }}>Invitations</h5>
      </div>
    </div>
  );
};

export default Sidebar;
