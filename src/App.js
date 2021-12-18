import React from "react"
import './App.css';
import { BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Login from "./components/login";
import Signup from "./components/signup";
import Price from "./price";
import Api from "./api"

function App() {
  return (
    <div className="App" >
   <Router>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="signup" element={<Signup />}/>
        <Route path="price" element={<Price />}/>
        <Route path="api" element={<Api />}/>
    </Routes>
  </Router>
    </div>
  );
}

export default App;
