import React from "react";
import Header from "./header";
import Todo from './todo'
import '../sass/main.scss'

const App = () => {
  return (
    <main>
      <header>
        <Header />
      </header>
      <section>
        <Todo />
      </section>
    </main>
  );
};

export default App;
