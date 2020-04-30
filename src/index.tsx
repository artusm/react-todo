import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Todo } from "./types/todo";
import { v1 as uuidv1 } from "uuid";

const todos: Todo[] = [
  {
    id: uuidv1(),
    title: "test",
    isComplete: true,
  },
];

ReactDOM.render(
  <React.StrictMode>
    <App todos={todos} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
