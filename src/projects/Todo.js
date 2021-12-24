import React, { useState, useEffect } from "react";

function Todo() {
  const [todo, setTodo] = useState("");
  const [items, setItems] = useState([]);
  const [list, setList] = useState(JSON.parse(localStorage.getItem("data")));

  const handleTodoSubmit = (e) => {
    e.preventDefault();

    setItems([...items, todo]);
    setTodo("");
    let todoJSON = JSON.stringify(items);
    localStorage.setItem("data", todoJSON);
  };

  console.log(list);

  const removeData = (id) => {
    console.log(id);
    const updatedItems = items.filter((x, ind) => {});
    setItems(updatedItems);
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

          {list.map((x, id) => (
            <div className="todo-content" key={id}>
              <p className="todo-text-content">{x}</p>
              <p className="todo-delete-option" onClick={() => removeData(id)}>
                Delete
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Todo;
