import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import './AddStudent.css';

const AddStudent = () => {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [picture, setPicture] = useState('');
  const [courseName, setCourseName] = useState('');
  const [error, setError] = useState('');

  const isEmailValid = (email) => {
    // Simple email validation
    return email.includes('@');
  };

  const handleAddStudent = async () => {
    try {
      // Validate form fields
      if (!name || !id || !password || !isEmailValid(id) || password.length < 8) {
        setError('Please fill in all required fields, provide a valid email, and ensure the password is at least 8 characters long.');
        return;
      }

      // Reference to the 'students' collection
      const studentRef = collection(db, 'students');

      // Data for the new student
      const newStudent = {
        name,
        id,
        password,
        picture,
        courseName,
      };

      // Add student to Firebase
      const docRef = await addDoc(studentRef, newStudent);
      console.log('Student added with ID: ', docRef.id);

      // Clear form fields and error message after successful registration
      setName('');
      setId('');
      setPassword('');
      setPicture('');
      setCourseName('');
      setError('');
    } catch (error) {
      console.error('Error adding student: ', error);
      setError('An error occurred while adding the student. Please try again later.');
    }
  };

  return (
    <div className="add-student-container">
      <h2>Add Student</h2>
      {error && <div className="error-message">{error}</div>}
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="add-student-input"
      />
      <input
        type="text"
        placeholder="ID (Email)"
        value={id}
        onChange={(e) => setId(e.target.value)}
        className="add-student-input"
      />
      <input
        type="password"
        placeholder="Password (At least 8 characters)"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="add-student-input"
      />
      <input
        type="text"
        placeholder="Picture URL"
        value={picture}
        onChange={(e) => setPicture(e.target.value)}
        className="add-student-input"
      />
      
      <input
        type="text"
        placeholder="Course Name"
        value={courseName}
        onChange={(e) => setCourseName(e.target.value)}
        className="add-student-input"
      />
      <button onClick={handleAddStudent} className="add-student-button">
        Add Student
      </button>
    </div>
  );
};

export default AddStudent;
