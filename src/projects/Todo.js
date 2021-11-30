import React, { useState } from "react";

function Todo() {
  const [todo, setTodo] = useState();

  const data = [];

  const handleTodoSubmit = (e) => {
    e.preventDefault();
    data.push(todo);
    console.log(todo);
  };

  return (
    <div className="todo">
      <div className="todo-top">
        <h2>Todo App</h2>
        <div>
          <form className="form" onSubmit={handleTodoSubmit}>
            <input
              placeholder="Type your task here"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            />
            <button>Add</button>
          </form>
        </div>
      </div>

      <div className="todo-bottom">
        <div className="todo-bottom-container">
          <h2>My Task List</h2>
          <div>
            <div className="todo-content">
              <p className="todo-text-content">My task here</p>
              <p className="todo-delete-option">Delete</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Todo;
