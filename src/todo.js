import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { doneTodo, delTodo } from "./redux/todoReducer";
import "./sass/components/todo.scss";

const Todo = () => {
  const dispatch = useDispatch();
  const state = useSelector((s) => s.todoReducer);
  let localTodos = undefined;
  state.sort
    ? (localTodos = state.todos)
    : (localTodos = [
        ...state.todos.filter((it) => !it.isDone),
        ...state.todos.filter((it) => it.isDone),
      ]);

  console.log(state);

  return (
    <div>
      {localTodos.map((it, index) => (
        <div key={index} className={it.isDone ? "doneTodo" : "todo"}>
          <div className="center">{it.time}</div>
          <div className="todoText">
            <div>{it.todo}</div>
          </div>
          <div className="todoCheckbox">
            <input
              type="checkbox"
              className="checkbox"
              checked={it.isDone}
              onChange={(e) => dispatch(doneTodo(e.target.checked, it.id))}
            />
          </div>
          <div className="todoButton">
            <input
              type="button"
              className="checkbox"
              value="X"
              onClick={(e) => {
                e.preventDefault();
                dispatch(delTodo(it.id));
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Todo;
