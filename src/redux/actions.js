import { ADD_TODO, SET_FILTER_ACTION, TOGGLE_TODO } from "./action-types";

let nextToDoId = 0;

export const addTodo = content => ({  // the other syntax return
  type: ADD_TODO,
  payload: {
    id: ++nextToDoId,
    content,
  }
});

export const toggle = id => ({
  tyep: TOGGLE_TODO,
  payload: {
    id,
  }
});

export const setFilter = filter => ({
  type: SET_FILTER_ACTION,
  payload: {
    filter,
  }
});