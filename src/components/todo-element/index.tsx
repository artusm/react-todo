import React from "react";
import { DeleteTodo, ToggleCompleteState } from "../../types/todo";

interface IProps {
  id: string;
  isCompleted: boolean;
  title: string;
  deleteTodo: DeleteTodo;
  toggleTodo: ToggleCompleteState;
}

const TodoElement: React.FC<IProps> = ({
  id,
  isCompleted,
  title,
  deleteTodo,
  toggleTodo,
}: IProps) => (
  <div onClick={() => toggleTodo(id)}>
    {title} {isCompleted ? "yes" : "no"}
  </div>
);

TodoElement.defaultProps = {
  isCompleted: true,
} as Partial<IProps>;

export default TodoElement;
