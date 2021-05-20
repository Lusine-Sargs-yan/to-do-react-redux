import {Provider} from 'react-redux';
import store from './redux/store';
import AddToDo from './components/AddToDo';
import ToDoList from './components/ToDoList';
import './App.css';
console.log(store, 'store:::');

function App() {
  return (
    <Provider store={store}>
      <div className="toDo-app">
        <h2>To Do List</h2>
        <AddToDo />
        <ToDoList />
      </div>
    </Provider>
  );
}

export default App;
