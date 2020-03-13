import React, { useState, ChangeEvent, FormEvent } from "react";

// Components
import { TodoListItem } from "./TodoListItem";

// Semantic UI
import { List, Form, Button, Container, Header } from "semantic-ui-react";

interface TodoListProps {
  todos: Array<Todo>;
  toggleTodo: ToggleTodo;
  addTodo: AddTodo;
}

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleTodo,
  addTodo
}) => {
  const [newTodo, setNewTodo] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <Container style={{ width: "400px" }}>
      <Form>
        <Form.Field>
          <Header as="h1" color="blue" style={{ marginTop: "10px" }}>
            Add Todo
          </Header>
          <input
            placeholder="New Todo"
            type="text"
            value={newTodo}
            onChange={handleChange}
          />
          <Button
            type="submit"
            style={{ margin: "10px 0 10px 0" }}
            color="blue"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Form.Field>
        <List
          style={{
            border: "0.1rem solid lightgrey",
            borderRadius: "5px",
            marginTop: "50px",
            minHeight: "300px"
          }}
        >
          {todos.map((todo, i) => {
            return (
              <TodoListItem todo={todos[i]} key={i} toggleTodo={toggleTodo} />
            );
          })}
        </List>
      </Form>
    </Container>
  );
};
