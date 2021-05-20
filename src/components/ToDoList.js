import React from 'react';
import { connect } from 'react-redux';
import { getToDoList } from '../redux/reducers/selectors';
import ToDo from './ToDo';

function ToDoList({todos}) {

  console.log(todos, 'todos:::');
  return (
    <ul className="toDo-list">
      {todos.allIds.length ? todos.allIds.map((id, index) => {

        return <ToDo key={`todo-${[id]}`} todo={todos.byIds.[id]} />
      }) : 'No todos yet'}
    </ul>

  )
}

const mapStateToProps = state => {
  //const {todos} = state;

  // console.log(state, 'state....');
  // const todos = getToDoList(state);

  //return todos;
  console.log(state, 'mapStateToProps:::');

  return state;
};

export default connect(mapStateToProps)(ToDoList);