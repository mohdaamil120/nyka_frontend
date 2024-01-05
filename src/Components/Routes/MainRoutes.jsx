import React from 'react'
import { Routes, Route } from "react-router-dom";
import Register from '../Pages/Register';
import Login from '../Pages/Login';
import Home from '../Pages/Home';
import Dashboard from '../Pages/Dashboard';
import Analytics from '../Pages/Analytics';

export default function MainRoutes() {
  return (
    <div>
    <Routes>
      <Route path="/" element={< Home/>}/>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />}/>
      <Route path="/dashboard" element={< Dashboard/>}/>
      <Route path="/analytics" element={< Analytics/>}/>
    </Routes>
    </div>
  )
}
