import "./studentList.style.css";

import React from "react";

const students = [
  "Tom",
  "Elnura",
  "Aidina",
  "Shahzod",
  "Murat",
  "Esma",
  "Alina",
  "Tink",
];

const StudentList = () => {
  const showStudents = students.map((el, index) => {
    return <p>{el}</p>;
  });

  return (
    <div>
      <h1> Student List </h1>
      <input />
    </div>
  );
};

export default StudentList;
