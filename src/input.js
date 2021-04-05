import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import { addTask } from './redux/taskReducer'

const Input = () => {
  const dispatch = useDispatch()
  const [task, setTask] = useState('')

  return (
    <div>
      Моя задача
      <input className="mx-1 px-1 w-60 border" type="text" onChange={(e) => setTask(e.target.value)}/>
      <button className='border rounded px-1 bg-green-100' type="submit" onClick={(e) => {
        e.preventDefault()
        dispatch(addTask(task))
      }}>Создать</button>
    </div>
  );
};

export default Input;
