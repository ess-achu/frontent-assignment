import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  const selected = props.selected;
  const setSelected = props.setSelected;

  const colorPicker = (current) => {
    if (current === selected) {
      return "white";
    } else {
      return "#C0BFBF";
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "250px",
        background:
          "linear-gradient(0deg, rgba(167,47,196,1) 0%, rgba(45,141,253,1) 100%)",
        top: "35px",
        left: "35px",
        position: "absolute",
        borderRadius: "25px",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "25px",
          display: "grid",
          rowGap: "15px",
        }}
      >
        <Link to={"/profile/" + props.id} style={{ textDecoration: "none" }}>
          <span
            style={{
              color: colorPicker('Profile'),
              fontFamily: "sans-serif",
              fontSize: "20px",
              gridRow: "1",
              marginTop: "10pxx",
            }}
            onClick={() => {
              setSelected("Profile");
            }}
          >
            Profile
          </span>
        </Link>
        <div
          style={{
            background: "#C0BFBF",
            width: "180px",
            height: "1px",
            gridRow: "2",
            marginTop: "10px",
          }}
        ></div>

        <Link to={"/posts/" + props.id} style={{ textDecoration: "none" }}>
          <span
            style={{
              color: colorPicker('Posts'),
              fontFamily: "sans-serif",
              fontSize: "20px",
              gridRow: "3",
              marginTop: "10pxx",
            }}
            onClick={() => {
              setSelected("Posts");
            }}
          >
            Posts
          </span>
        </Link>
        <div
          style={{
            background: "#C0BFBF",
            width: "180px",
            height: "1px",
            gridRow: "4",
            marginTop: "10px",
          }}
        ></div>

        <Link to={"/gallery/" + props.id} style={{ textDecoration: "none" }}>
          <span
            style={{
              color: colorPicker('Gallery'),
              fontFamily: "sans-serif",
              fontSize: "20px",
              gridRow: "5",
              marginTop: "10px",
            }}
            onClick={() => {
              setSelected("Gallery");
            }}
          >
            Gallery
          </span>
        </Link>
        <div
          style={{
            background: "#C0BFBF",
            width: "180px",
            height: "1px",
            gridRow: "6",
            marginTop: "10px",
          }}
        ></div>

        <Link to={"/todo/" + props.id} style={{ textDecoration: "none" }}>
          <span
            style={{
              color: colorPicker('ToDo'),
              fontFamily: "sans-serif",
              fontSize: "20px",
              gridRow: "7",
              marginTop: "10px",
            }}
            onClick={() => {
              setSelected("ToDo");
            }}
          >
            ToDo
          </span>
        </Link>
        <div
          style={{
            background: "#C0BFBF",
            width: "180px",
            height: "1px",
            gridRow: "8",
            marginTop: "10px",
          }}
        ></div>
      </div>
    </div>
  );
};

export default NavBar;
