import React from "react";
import "./App.css";
import Login from "./component/Login";
import Register from "./component/Register";
import Home from "./component/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./component/NotFound";
import Form from "./component/Form";
import Detail from "./component/Detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/form/:id" element={<Form />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
