import { makeAutoObservable } from "mobx";

class Store {
  constructor() {
    makeAutoObservable(this);
  }

  todos = [];

  sort = true

  addTodo(time, todo) {
    this.todos = [
      ...this.todos,
      {
        id: this.todos.length ? this.todos[this.todos.length - 1].id + 1 : 1,
        time,
        todo,
        isDone: false,
      },
    ];
  }

  delTodo(id) {
    this.todos = this.todos.filter((it) => id !== it.id);
  }

  doneTodo(isDone, id) {
    this.todos = this.todos.map((it, index) =>
          id === it.id ? { ...it, isDone: isDone } : it
        )
  }

  sortTodos(sort) {
    this.sort = sort
  }


}

export default new Store();
