import React, { useState } from "react";

const defaultTodos = localStorage.getItem("Esma's todo");
console.log("lol", defaultTodos);

const SimpleTodo = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([defaultTodos]);

  const onChangeHandler = (e) => {
    setTodo(e.target.value);
  };

  const onClickHandler = () => {
    setTodoList([...todoList, todo]);
    localStorage.setItem("Esma's toDo", todoList);

    setTodo(""); // reset the input
    console.log("hello", todoList);
  };

  const showTodoList = todoList.map((el) => {
    return <p> {el} </p>;
  });

  return (
    <div className="container">
      <div className="todo-inputs">
        <h1>TODO</h1>
        <input
          placeholder="add your todos"
          onChange={onChangeHandler}
          value={todo}
        />
        <button onClick={onClickHandler}> ADD </button>

        {showTodoList}
      </div>
    </div>
  );
};

export default SimpleTodo;
