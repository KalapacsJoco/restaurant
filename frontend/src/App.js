import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dishes from './components/Dishes';
import CreateDish from './components/Admin/CreateDish';
import './App.css';
import Logout from './components/Logout';
import Layout from './components/Layout';
import Navbar from './components/Navbar';



function App() {
  return (
    <Router>
      <Navbar/>
      {/* <Layout
          backgroundImage="../public/images/background.jpg" /> */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dishes" element={<Dishes />} />
        <Route path="/dishes/create" element={<CreateDish />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>

  );
}

export default App;