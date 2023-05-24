import "./studentList.style.css";

import React from "react";

const students = [
  { name: "Tom", hobby: "soccer" },
  { name: "Elnura", hobby: "soccer" },
  { name: "Aidina", hobby: "bootcamps" },
  { name: "Shahzod", hobby: "travel" },
  { name: "Murat", hobby: "chess" },
  { name: "Esma", hobby: "yoga" },
  { name: "Alina", hobby: "bicycle" },
  { name: "Tink", hobby: "soccer" },
];

const StudentList = () => {
  const showStudents = students.map((el, index) => {
    return (
      <li key={index}>
        {el.name}, likes {el.hobby}
      </li>
    );
  });

  // with map we should always pass a key to a high parent- key={index}
  // key will not be shown in the browser, this is for REACT

  return (
    <div>
      <ol> {showStudents} </ol>
    </div>
  );
};
export default StudentList;
