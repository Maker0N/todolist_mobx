import React from "react";
import Header from "./header";
import Todo from './todo'
import './sass/main.scss'

const App = () => {
  return (
    <div >
      <div>
        <Header />
      </div>
      <Todo />
    </div>
  );
};

export default App;
