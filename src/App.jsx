import React from "react";
import App1 from "./App1";
import Login from "./Login";
import Signup from "./Signup";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/app1" element={<App1 />} />
      </Routes>
    </div>
  );
};

export default App;
