export const getToDoState = store => store.todos;

export const getToDoList = store => getToDoState(store) ? getToDoState(store).allIds : [];