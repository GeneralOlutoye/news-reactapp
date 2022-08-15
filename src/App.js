import React from 'react'
import './App.css'
import "antd/dist/antd.min.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Dashboard } from './view/Dashboard';
import { Sports } from './view/sports';
import { Politics } from './view/politics';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/sports' element={<Sports />} />
        <Route path='/politics' element={<Politics />} />
      </Routes>
    </Router>
  )
}