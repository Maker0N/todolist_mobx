import React from 'react'
import { useSelector } from 'react-redux'

const Task = () => {
  const tasks = useSelector((s) => s.taskReducer.tasks)
  const date = new Date();
  console.log(
    date.getDate(),
    date.getMonth(),
    date.getFullYear(),
    date.getHours(),
    date.getMinutes()
  );
  return (
    <div className="p-2">
      {tasks.map((it, index) => (
        <div key={index} className="flex justify-start bg-green-200 m-2 p-4 rounded">
          <div className="w-full">
          {it.task}
          </div>
          <div className="rigth-0 w-5">
            <input type="checkbox" className="w-full h-full rounded" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Task