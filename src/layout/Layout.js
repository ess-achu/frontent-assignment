import React from "react";
import NavBar from "./NavBar";
import "./Layout.css";
import { Link } from "react-router-dom";

const Layout = (props) => {
  if (props.users[props.id] !== undefined) {
    return (
      <div>
        <div
          style={{
            position: "absolute",
            left: "300px",
            display: "grid",
            fontFamily: "sans-serif",
            fontSize: "20px",
            color: "#000",
          }}
        >
          <span
            style={{
              gridRow: "1",
              gridColumn: "1/5",
              padding: "13px",
              marginTop: "50px",
              fontWeight: "bold",
            }}
          >
            {props.selected}
          </span>
          <div
            style={{
              gridColumn: "6",
              gridRow: "1",
              display: "grid",
              textAlign: "center",
              justifyContent: "center",
              marginLeft:'670px',
              marginTop: "50px"
              /* position:'absolute',
              left:'800px' */
            }}
            className="dropdown"
          >
            <img
              src={props.users[props.id].profilepicture}
              alt=""
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                gridColumn: "1",
                gridRow: "1",
              }}
            />
            <span style={{ gridRow: "1", gridColumn: "2/5", padding: "13px" }} className="dropdown" >
              {props.users[props.id].name}
            </span>
            <ul>
              <li><img
                src={props.users[props.id].profilepicture}
                alt=""
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  gridColumn: "1",
                  gridRow: "1",
                }}
              /></li>
              <li> <Link  ></Link> </li>
            </ul>
          </div>
        </div>
        <div
          style={{
            background: "#C0BFBF",
            width: "950px",
            height: "2px",
            gridRow: "2",
            gridColumn:'1/6',
            marginTop: "10px",
            position:'absolute',
            left:'315px',
            top:'100px'
          }}
        ></div>
        <NavBar id={props.id} selected={props.selected} setSelected={props.setSelected} />
      </div>
    );
  }
};

export default Layout;
