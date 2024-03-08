import React, { useState } from "react";
import './App.css';
import { Login } from "./component/Login";
import { Register } from "./component/Register";
import { Home } from "./component/Home"; // Import halaman Home

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      {currentForm === "login" && <Login onFormSwitch={toggleForm} />}
      {currentForm === "register" && <Register onFormSwitch={toggleForm} />}
      {currentForm === "home" && <Home />}
    </div>
  );
}

export default App;