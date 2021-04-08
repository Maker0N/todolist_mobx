import React from "react";
import Input from "./input";
import store from "./mobx/store";
import "./sass/components/header.scss";

const Header = () => {

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
              store.sortTodos(false);
            }}
          >
            :Типу
          </button>
          <button
            className="inputButton"
            onClick={(e) => {
              e.preventDefault();
              store.sortTodos(true)
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
