import "./studentList.style.css";
import { students } from "./studentData";
import React from "react";

const StudentList = () => {
  const showStudents = students.map((el, index) => {
    return (
      <div className="card" key={index}>
        <img className="img" src={el.picture} />
        <h3 className="names"> {el.name}</h3>

        <h3>likes {el.hobby} </h3>
      </div>
    );
  });
  return <div className="container">{showStudents}</div>;
};

export default StudentList;

// with map we should always pass a key to a high parent- key={index}
// key will not be shown in the browser, this is for REACT
