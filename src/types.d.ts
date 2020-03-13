type Todo = {
  text: string;
  complete: boolean;
};

type ToggleTodo = (selectedTodo: Todo) => void;

type I = decimal;

type AddTodo = (newTodo: string) => void;
