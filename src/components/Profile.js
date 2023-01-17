import React, { useState } from "react";
import Layout from "../layout/Layout";
import { Route, Routes, useParams } from "react-router-dom";
import Gallery from "./Gallery";
import Posts from "./Posts";
import ToDo from "./ToDo";
import {Map,Marker} from 'google-maps-react'

const Profile = (props) => {

  const mapStyles = {
    width: '200px',
    height: '200px'
  };

  const params = useParams();

  const id = params.id;
  if (props.users[id] !== undefined) {
    return (
      <div>
        <Layout
          users={props.users}
          id={id}
          selected={props.selected}
          setSelected={props.setSelected}
        ></Layout>
        <div style={{ display: "grid" }}>
          <div
            style={{
              gridRow: "1",
              gridColumn: "1",
              display: "grid",
              placeItems: "center",
              marginLeft: "100px",
              marginTop: "150px",
            }}
          >
            <img
              src={props.users[id].profilepicture}
              alt=""
              style={{
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                gridRow: "1",
              }}
            />
            <span
              style={{
                gridRow: "2",
                fontSize: "20px",
                fontWeight: "bold",
                fontFamily: "sans-serif",
              }}
            >
              {props.users[id].name}
            </span>
            <table
              style={{
                gridRow: "3",
                fontSize: "20px",
                fontFamily: "sans-serif",
              }}
            >
              <tbody>
                <tr>
                  <td style={{ color: "grey", textAlign: "right" }}>
                    Username
                  </td>
                  <td style={{ color: "grey" }}>:</td>
                  <td>{props.users[id].username}</td>
                </tr>
                <tr>
                  <td style={{ color: "grey", textAlign: "right" }}>email</td>
                  <td style={{ color: "grey" }}>:</td>
                  <td>{props.users[id].email}</td>
                </tr>
                <tr>
                  <td style={{ color: "grey", textAlign: "right" }}>Phone</td>
                  <td style={{ color: "grey" }}>:</td>
                  <td>{props.users[id].phone}</td>
                </tr>
                <tr>
                  <td style={{ color: "grey", textAlign: "right" }}>Website</td>
                  <td style={{ color: "grey" }}>:</td>
                  <td>{props.users[id].website}</td>
                </tr>
              </tbody>
            </table>
            <div
              style={{
                background: "#C0BFBF",
                width: "380px",
                height: "1px",
                gridRow: "4",
                marginTop: "10px",
              }}
            ></div>
            <span
              style={{
                gridRow: "5",
                fontSize: "20px",
                fontFamily: "sans-serif",
                color: "grey",
              }}
            >
              Company
            </span>
            <table
              style={{
                gridRow: "6",
                fontSize: "20px",
                fontFamily: "sans-serif",
              }}
            >
              <tbody>
                <tr>
                  <td style={{ color: "grey", textAlign: "right" }}>Name</td>
                  <td style={{ color: "grey" }}>:</td>
                  <td>{props.users[id].company.name}</td>
                </tr>
                <tr>
                  <td style={{ color: "grey", textAlign: "right" }}>
                    Catchphrase
                  </td>
                  <td style={{ color: "grey" }}>:</td>
                  <td>{props.users[id].company.catchPhrase}</td>
                </tr>
                <tr>
                  <td style={{ color: "grey", textAlign: "right" }}>bs</td>
                  <td style={{ color: "grey" }}>:</td>
                  <td>{props.users[id].company.bs}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div
            style={{
              background: "#C0BFBF",
              width: "1px",
              height: "600px",
              gridRow: "1",
              gridColumn: "2",
              marginTop: "150px",
              marginLeft: "0px",
            }}
          ></div>
          <div
            style={{
              gridRow: "1",
              gridColumn: "3",
              display: "grid",
              placeItems: "center",
              fontFamily: "sans-serif",
              fontSize: "20px",
            }}
          >
            <span style={{ textAlign: "left", color: "grey",gridRow:'1',gridColumn:'1' }}>Address :</span>
            <table style={{gridRow:'2',gridColumn:'1'}}>
              <tbody>
                <tr>
                  <td style={{ color: "grey", textAlign: "right" }}>Street</td>
                  <td>:</td>
                  <td>{props.users[id].address.street}</td>
                </tr>
                <tr>
                  <td style={{ color: "grey", textAlign: "right" }}>Suite</td>
                  <td>:</td>
                  <td>{props.users[id].address.suite}</td>
                </tr>
                <tr>
                  <td style={{ color: "grey", textAlign: "right" }}>City</td>
                  <td>:</td>
                  <td>{props.users[id].address.city}</td>
                </tr>
                <tr>
                  <td style={{ color: "grey", textAlign: "right" }}>Zipcode</td>
                  <td>:</td>
                  <td>{props.users[id].address.zipcode}</td>
                </tr>
              </tbody>
            </table>
            <div style={{gridRow:'3',gridColumn:'1'}} ></div>
          </div>
        </div>
      </div>
    );
  }
};

export default Profile;
