// /src/components/AddStudent/AddStudent.js
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

  const handleAddStudent = async () => {
    try {
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

      // Clear form fields after successful registration
      setName('');
      setId('');
      setPassword('');
      setPicture('');
      setCourseName('');
    } catch (error) {
      console.error('Error adding student: ', error);
    }
  };

  return (
    <div className="add-student-container">
      <h2>Add Student</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="add-student-input"
      />
      <input
        type="text"
        placeholder="ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
        className="add-student-input"
      />
      <input
        type="password"
        placeholder="Password"
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
