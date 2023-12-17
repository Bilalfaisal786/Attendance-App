// /src/components/AdminPanel/AdminPanel.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getDocs, collection } from 'firebase/firestore';
import { db, auth } from '../../firebase/firebase';
import './AdminPanel.css';

const AdminPanel = () => {
  const [selectedOption, setSelectedOption] = useState('students');
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch student data from Firestore when component mounts
    const fetchStudents = async () => {
      try {
        const studentsCollection = collection(db, 'students');
        const studentsSnapshot = await getDocs(studentsCollection);
        const studentList = studentsSnapshot.docs.map((doc) => doc.data());
        setStudents(studentList);
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };

    fetchStudents();
  }, []); // Empty dependency array to fetch students only once on mount

  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        // Redirect to the login page after successful logout
        navigate('/');
      })
      .catch((error) => {
        console.error('Logout error:', error);
      });
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    if (option === 'addStudent') {
      navigate('/add-student'); // Navigate to the "Add Student" page
    }
  };

  return (
    <div className="admin-panel-container">
      <div className="admin-panel-sidebar">
        <div className="admin-panel-logo">Admin Panel</div>
        <div
          className={`admin-panel-option ${selectedOption === 'students' ? 'selected' : ''}`}
          onClick={() => handleOptionChange('students')}
        >
          Students
        </div>
        <div
          className={`admin-panel-option ${selectedOption === 'attendance' ? 'selected' : ''}`}
          onClick={() => handleOptionChange('attendance')}
        >
          Attendance
        </div>
        <div
          className={`admin-panel-option ${selectedOption === 'addStudent' ? 'selected' : ''}`}
          onClick={() => handleOptionChange('addStudent')}
        >
          Add Student
        </div>
        <div className="admin-panel-option" onClick={handleLogout}>
          Logout
        </div>
      </div>
      <div className="admin-panel-content">
        {selectedOption === 'students' && (
          <div>
            <h3>Student Information</h3>
            <table>
              {/* ... (existing student table code) */}
            </table>
          </div>
        )}
        {selectedOption === 'attendance' && <h3>Attendance Content Goes Here</h3>}
        {/* ... (existing code for other options) */}
      </div>
    </div>
  );
};

export default AdminPanel;
