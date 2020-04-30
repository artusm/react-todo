export type Todo = {
  id: string;
  title: string;
  isComplete: boolean;
};

export type ToggleCompleteState = (id: string) => void;

export type DeleteTodo = (id: string) => void;

export type AddTodo = (title: string) => void;
