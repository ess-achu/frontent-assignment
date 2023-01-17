import React from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <div style={{ height: "100vh", width: "100%", position: "relative" }}>
      <div
        style={{
          alignContent: "center",
          borderRadius: "25px",
          width: "36%",
          height: "70%",
          position: "absolute",
          top: "20%",
          left: "31%",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "20%",
            background: "#f6f6f6",
            borderRadius: "25px 25px 0 0",
            top: "0%",
            position: "absolute",
            textAlign: "center",
            fontFamily: "sans-serif",
            fontWeight: "none",
          }}
        >
          <h2 style={{ position: "absolute", top: "20%", left: "30%" }}>
            Select an account
          </h2>
        </div>
        <div
          style={{
            width: "100%",
            height: "80%",
            position: "absolute",
            top: "20%",
            overflowX: "hidden",
            overflowY: "auto",
            borderRadius: "0 0 25px 25px",
          }}
        >
          {props.users.map((user,i) => (
            <Link to={"/profile/" + i} key={i} style={{textDecoration:'none'}} >
              <div>
                <div
                  style={{
                    display: "grid",
                    alignContent: "center",
                    alignItems: "center",
                    margin: "15px",
                    
                  }}
                >
                  <img
                    src={user.profilepicture}
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      gridColumn: "1/2",
                      gridRow: "1",
                    }}
                  />
                  <span
                    style={{
                      gridAutoColumns: "3",
                      gridRow: "1",
                      textAlign: "left",
                      fontFamily: "sans-serif",
                      color:'gray'
                    }}
                  >
                    {user.name}
                  </span>
                </div>
                <div
                  style={{
                    background: "#f6f6ff",
                    width: "80%",
                    height: "2px",
                    position: "absolute",
                    left: "10%",
                  }}
                ></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
