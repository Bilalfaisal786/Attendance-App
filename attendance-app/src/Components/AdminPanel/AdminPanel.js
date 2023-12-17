// /src/components/AdminPanel/AdminPanel.js
import React from 'react';
import { Link } from 'react-router-dom';
import './AdminPanel.css';

const AdminPanel = () => {
  return (
    <div className="admin-panel-container">
      <h2>Admin Panel</h2>
      <Link to="/add-student" className="admin-link">
        Add Student
      </Link>
      <Link to="/attendance" className="admin-link">
        Attendance Tab
      </Link>
    </div>
  );
};

export default AdminPanel;
