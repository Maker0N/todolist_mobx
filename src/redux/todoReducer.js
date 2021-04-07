const ADD_TODO = "ADD_TODO";
const DONE_TODO = "DONE_TODO";
const DEL_TODO = "DEL_TODO";
const SORT = "SORT";

const initialState = { todos: [], sort: true, sortTodos: [] };

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return (state = {
        ...state,
        todos: [
          ...state.todos,
          {
            id: state.todos.length
              ? state.todos[state.todos.length - 1].id + 1
              : 1,
            time: action.time,
            todo: action.todo,
            isDone: false,
          },
        ],
      });
    case DONE_TODO:
      return (state = {
        ...state,
        todos: state.todos.map((it, index) =>
          action.id === it.id ? { ...it, isDone: action.isDone } : it
        ),
      });

    case DEL_TODO:
      return (state = {
        ...state,
        todos: state.todos.filter((it) => action.id !== it.id),
      });

    case SORT:
      return (state = {
        ...state,
        sort: action.sort
        // [...state.sortTodos,
        //   state.todos.reduce(
        //     (acc, rec) =>
        //       action.sort && state.todos.rec.isDone ? [...acc, rec] : acc,
        //     []
        //   ),
        // ],
      });

    default:
      return state;
  }
};

export function addTodo(time, todo) {
  return { type: ADD_TODO, time, todo };
}

export function doneTodo(isDone, id) {
  return { type: DONE_TODO, isDone, id };
}

export function delTodo(id) {
  return { type: DEL_TODO, id };
}

export function sortTodos(sort) {
  return { type: SORT, sort };
}

export default todoReducer;
