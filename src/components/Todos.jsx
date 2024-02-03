import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <div
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          marginBottom: "10px",
        }}
      >
        Todos
      </div>

      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              listStyle: "none",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px",
              border: "1px solid #3e3e3e",
              margin: "10px",
            }}
          >
            <div>{todo.text}</div>
            <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
