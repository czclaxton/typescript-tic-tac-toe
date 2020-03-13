import React, { useState } from "react";

// Components
import { TodoList } from "./TodoList";

const initialTodos: Array<Todo> = [
  { text: "Walk the dog", complete: false },
  { text: "Practice Typescript", complete: true },
  { text: "Do the dishes", complete: false }
];

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);

  // Toggles todo between complete and incomplete
  const toggleTodo: ToggleTodo = selectedTodo => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  // Adds new todo to overall todo list
  const addTodo: AddTodo = newTodo => {
    setTodos([{ text: newTodo, complete: false }, ...todos]);
  };

  return <TodoList todos={todos} toggleTodo={toggleTodo} addTodo={addTodo} />;
};

export default App;
