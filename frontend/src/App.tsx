import React from 'react';
import './App.css';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Post from "./pages/Post";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/sign-in" element={<SignIn/>}/>
          <Route path="/sign-up" element={<SignUp/>}/>
          <Route path="/post" element={<Post/>}/>
          <Route path="*" element={<Navigate to="/" replace={true}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
// report
/*
1. da lam gi
2. se lam gi
3. bao cao loi
*/
