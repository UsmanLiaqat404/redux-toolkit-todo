import React from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6 text-blue-600">
        Learn about Redux Toolkit
      </h1>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
