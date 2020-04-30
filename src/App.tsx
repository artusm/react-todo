import React, { useState, useCallback, useMemo } from "react";
import update from "react-addons-update";
import { Todo, AddTodo, ToggleCompleteState, DeleteTodo } from "./types/todo";
import TodoInput from "./components/todo-input";
import TodoElement from "./components/todo-element";
import { v1 as uuidv1 } from "uuid";
import "./App.css";

interface IProps {
  todos?: Todo[];
}

const App: React.FC<IProps> = ({ todos: defaultTodos = [] }: IProps) => {
  const [todos, setTodos] = useState<Todo[]>(defaultTodos);

  const completeTodosCount = useMemo(
    () =>
      todos.reduce(
        (total, currentTodo: Todo) =>
          currentTodo.isComplete ? total + 1 : total,
        0
      ),
    [todos]
  );

  const addTodo: AddTodo = useCallback(
    (title: string) => {
      const newTodo: Todo = {
        id: uuidv1(),
        title,
        isComplete: false,
      };

      setTodos([...todos, newTodo]);
    },
    [todos]
  );

  const toggleTodo: ToggleCompleteState = useCallback(
    (id: string) => {
      console.log(id);
      const todoIndex = todos.findIndex((todo) => todo.id === id);

      if (todoIndex !== -1) {
        const newTodos = update(todos, {
          [todoIndex]: {
            isComplete: { $apply: (isComplete: boolean) => !isComplete },
          },
        });

        setTodos(newTodos);
      }
    },
    [todos]
  );

  const deleteTodo: DeleteTodo = useCallback(
    (id) => {
      const newTodos = todos.filter((todo) => todo.id !== id);

      setTodos(newTodos);
    },
    [todos]
  );

  return (
    <div className="App">
      {completeTodosCount} / {todos.length}
      <TodoInput addTodo={addTodo} />
      <div>
        {todos.map(({ id, title, isComplete }) => (
          <TodoElement
            key={id}
            id={id}
            title={title}
            isCompleted={isComplete}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
          />
        ))}
      </div>
    </div>
  );
};

App.defaultProps = {
  todos: [],
};

export default App;
