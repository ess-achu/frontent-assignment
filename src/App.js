import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import axios from "axios";
import { useEffect, useState } from "react";
import Posts from "./components/Posts";
import Gallery from "./components/Gallery";
import ToDo from "./components/ToDo";

function App() {
  const [users, setUsers] = useState([]);
  const [selected, setSelected] = useState('Profile')

  const apiFetch = async () => {
    await axios.get("https://panorbit.in/api/users.json").then((res) => {
      setUsers(res.data.users);
    });
  };

  useEffect(() => {
    apiFetch();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home users={users} />} />
        <Route path="/profile/:id" element={<Profile users={users} selected={selected} setSelected={setSelected} />} />
        <Route path="/posts/:id" element={<Posts users={users} selected={selected} setSelected={setSelected} />}  />
        <Route path="/gallery/:id" element={<Gallery users={users} selected={selected} setSelected={setSelected} />} />
        <Route path="/todo/:id" element={<ToDo users={users} selected={selected} setSelected={setSelected} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
