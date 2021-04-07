import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import { addTodo } from './redux/todoReducer'
import './sass/components/input.scss'

const Input = () => {
  const dispatch = useDispatch()
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
      Моя задача
      <input className="input" value={todo} type="text" onChange={(e) => setTodo(e.target.value)}/>
      <button className='inputButton' type="submit" onClick={(e) => {
        e.preventDefault()
        if (todo) {
          dispatch(addTodo(todoTime(), todo))
        }
        clearValue()
      }}>Создать</button>
    </div>
  );
};

export default Input;
