import React from "react";
import Layout from "../layout/Layout";
import { useParams } from "react-router-dom";

const Posts = (props) => {
  const params = useParams();
  const id = params.id;
  return (
    <div>
      <Layout
        users={props.users}
        id={id}
        selected={props.selected}
        setSelected={props.setSelected}
      ></Layout>
      <h1 style={{position:'absolute',left:'300px',top:'200px',fontSize:'150px',color:'#C0BFBF'}} >Coming Soon</h1>
    </div>
  );
};

export default Posts;
