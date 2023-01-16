import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [selected, setSelected] = useState('Profile')

  const apiFetch = async()=>{
    await axios.get("https://panorbit.in/api/users.json").then((res) => {
      setUsers(res.data.users)
    });
  }

  useEffect(() => {
    apiFetch()
  }, []);
  console.log(users)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home users={users} />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
