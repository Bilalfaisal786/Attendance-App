// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './Components/Login/Login';
import Attendance from './Components/Attendance/Attendance';
import AddStudent from './Components/AddStudent/AddStudent';
import AdminPanel from './Components/AdminPanel/AdminPanel';

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/add-student" element={<AddStudent />} />
        <Route path="/admin-panel" element={<AdminPanel />} />

        {/* Add a default route for the root path */}
        <Route path="/*" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
