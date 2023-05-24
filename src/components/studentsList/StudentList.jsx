import "./studentList.style.css";

import React from "react";

const students = [
  {
    name: "Tom",
    hobby: "soccer",
    picture: "https://source.unsplash.com/random/?portraits&1",
  },
  {
    name: "Elnura",
    hobby: "soccer",
    picture: "https://source.unsplash.com/random/?portraits&2",
  },
  {
    name: "Aidina",
    hobby: "bootcamps",
    picture: "https://source.unsplash.com/random?portraits&3",
  },
  {
    name: "Shahzod",
    hobby: "travel",
    picture: "https://source.unsplash.com/random?portraits&4",
  },
  {
    name: "Murat",
    hobby: "chess",
    picture: "https://source.unsplash.com/random/?portraits&5",
  },
  {
    name: "Esma",
    hobby: "yoga",
    picture: "https://source.unsplash.com/random?portraits&6",
  },
  {
    name: "Alina",
    hobby: "bicycle",
    picture: "https://source.unsplash.com/?portraits&7",
  },
  {
    name: "Tink",
    hobby: "soccer",
    picture: "https://source.unsplash.com/random/?portraits&8",
  },
];

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
