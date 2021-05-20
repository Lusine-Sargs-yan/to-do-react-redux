import React from 'react';
import { connect } from 'react-redux';
import{toggle} from '../redux/actions';

function ToDo({todo, toggle}) {

  return (
    <li onClick={toggle}>
      <span className={`${todo && todo.completed && 'completed'}`}>
        {todo.content}
      </span>
    </li>
  )
  
}

export default connect(null, {toggle})(ToDo);