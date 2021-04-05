const ADD_TASK = 'ADD_TASK'
const DONE_TASK = "DONE_TASK";

const initialState = {tasks: []}

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return (
        state = {...state, tasks: [...state.tasks, {...state.tasks, task: action.task, isDone: false}]}
      )
    default:
    return state
  }
}

export function addTask(task) {
  return {type: ADD_TASK, task}
}

export function doneTask() {
  return {type: DONE_TASK}
}

export default taskReducer