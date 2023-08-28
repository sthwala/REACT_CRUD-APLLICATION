import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./components/Home"
import Create from "./components/Create"
import Edit from "./components/Edit"
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/Create" element={<Create/>}/>
          <Route path="/edit/:id" element={<Edit />} />
          {/* <Route path="/delete:id" element={<Delete/>}/> */}
      </Routes>
  </Router>
  );
}

export default App;
