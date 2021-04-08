import React from "react";
import { observer } from 'mobx-react'
import store from './mobx/store'
import "./sass/components/todo.scss";

const Todo = observer(() => {
  let localTodos = undefined;
  store.sort
    ? (localTodos = store.todos)
    : (localTodos = [
        ...store.todos.filter((it) => !it.isDone),
        ...store.todos.filter((it) => it.isDone),
      ]);

  return (
    <div>
      {localTodos.map((it, index) => (
        <div key={it.id} className={it.isDone ? "doneTodo" : "todo"}>
          <div className="center">{it.time}</div>
          <div className="todoText">
            <div>{it.todo}</div>
          </div>
          <div className="todoCheckbox">
            <input
              type="checkbox"
              className="checkbox"
              checked={it.isDone}
              onChange={(e) => store.doneTodo(e.target.checked, it.id)}
            />
          </div>
          <div className="todoButton">
            <input
              type="button"
              className="checkbox"
              value="X"
              onClick={(e) => {
                e.preventDefault();
                store.delTodo(it.id)
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
});

export default Todo;
