import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { sortTodos } from "./redux/todoReducer";
import Input from "./input";
import "./sass/components/header.scss";

const Header = () => {
  const dispatch = useDispatch()
  const state = useSelector(s => s.todoReducer)
  console.log(state.sort)


  return (
    <header>
      <div className="header">
        <div className="headerTitle">Todo List</div>
      </div>
      <div className="header">
        <div className="headerInput">
          <Input />
        </div>
      </div>
      <div className="header">
        <div className="headerSort">
          Сортировать по 
          <button
            className="inputButton"
            onClick={(e) => {
              e.preventDefault();
              dispatch(sortTodos(false));
            }}
          >
            :Типу
          </button>
          <button
            className="inputButton"
            onClick={(e) => {
              e.preventDefault();
              dispatch(sortTodos(true));
            }}
          >
            :Дате
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
