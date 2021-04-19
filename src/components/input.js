import React, { useState } from "react";
import { observer } from 'mobx-react'
import store from '../mobx/store'
import '../sass/components/input.scss'

const Input = observer(() => {
  const [todo, setTodo] = useState('')
  const todoTime = () => {
    const date = new Date();
    return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
  };

  const clearValue = () => {
    return setTodo('')
  }

  return (
    <div className="inputTitle">
      <label htmlFor="input">Моя задача</label>
      <input
        className="input"
        id='input'
        name='input'
        value={todo}
        type="text"
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        className="inputButton"
        type="submit"
        name='input'
        onClick={(e) => {
          e.preventDefault();
          if (todo) {
            store.addTodo(todoTime(), todo);
          }
          clearValue();
        }}
      >
        Создать
      </button>
    </div>
  );
});

export default Input;
