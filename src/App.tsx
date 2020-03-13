import React from "react";
import { TodoListItem } from "./TodoListItem";

const todos: Array<Todo> = [
  { text: "Walk the dog", complete: false },
  { text: "Practice Typescript", complete: true },
  { text: "Do the dishes", complete: false }
];

const App = () => {
  const renderCell = () => {};
  return (
    <>
      {todos.map((todo, i) => {
        return <TodoListItem todo={todos[i]} key={i} />;
      })}
    </>
  );
};

export default App;
