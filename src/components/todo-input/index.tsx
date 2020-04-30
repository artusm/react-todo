import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { AddTodo } from "../../types/todo";

interface IProps {
  addTodo: AddTodo;
}

let rendersCount = 0;

const TodoInput: React.FC<IProps> = ({ addTodo }: IProps) => {
  const { handleSubmit, register, errors, reset } = useForm();

  const onSumbit = useCallback(
    (values) => {
      addTodo(values.input);

      reset();
    },
    [addTodo, reset]
  );
  rendersCount++;
  return (
    <form onSubmit={handleSubmit(onSumbit)}>
      <input
        name="input"
        ref={register({
          required: "Required",
        })}
      />
      {rendersCount}
      {errors.input?.message}
      <button>add</button>
    </form>
  );
};

export default TodoInput;
