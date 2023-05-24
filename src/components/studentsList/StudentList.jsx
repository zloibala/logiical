import "./studentList.style.css";
import { students } from "./studentData";
import React from "react";

const StudentList = () => {
  const showStudents = students.map((el, index) => {
    return (
      <li key={index}>
        {el.name}, prefers {el.hobby}{" "}
        <img src={el.picture} width="150px" height="150px" />
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
