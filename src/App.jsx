import "./App.css";
import Landing from "./components/Landing_Screen";
import Profile from "./components/Profile";
import Login from "./components/Login_Screen";
import Signup from "./components/Signup_Screen";
import { Routes, Route } from "react-router-dom";

function App() {
  return <div className="app">
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  </div>;
}

export default App;
