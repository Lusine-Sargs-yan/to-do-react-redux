import { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";

function AddToDo(props) {//({addTodo})

  const {addTodo, todos} = props;
  const {allIds} = todos;

  const [inputValue, setInputValue] = useState('');

  console.log(addTodo, 'addToDo::')

  const handleAddToDo = () => {
    addTodo(inputValue);
    setInputValue('');
  };

  return (
    <div>
      <input 
      value={inputValue}
      onChange={(event) => setInputValue(event.target.value)}
      />
      <button onClick={handleAddToDo}>Add toDo</button>
      <span>To Do count: {allIds.length}</span>
    </div>
  );
}

const mapStateToProps = state => {
  console.log(state, 'state:');
  return state;
}

// export default connect(null, {addTodo})(AddToDo);
export default connect(mapStateToProps, {addTodo})(AddToDo);