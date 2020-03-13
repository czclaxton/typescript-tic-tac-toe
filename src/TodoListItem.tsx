import React from "react";
import "./TodoListItem.css";

// Semantic UI
import { List } from "semantic-ui-react";

interface TodoListItemProps {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({
  todo,
  toggleTodo
}) => {
  return (
    <List.Item style={{ padding: "10px" }}>
      <List.Icon
        color={todo.complete ? "green" : "red"}
        name={todo.complete ? "checkmark" : "close"}
        onClick={() => toggleTodo(todo)}
      />
      <List.Content className={todo.complete ? "complete" : undefined}>
        {todo.text}
      </List.Content>
    </List.Item>
  );
};
