import React from "react";
import "./App.css";
import Login from "./component/Login";
import Register from "./component/Register";
import Home from "./component/Home"; // Import halaman Home
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./component/NotFound";
import Form from "./component/Form";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/form" element={<Form />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
