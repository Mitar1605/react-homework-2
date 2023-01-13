import './App.css';
import TodoHead from './TodoHead';
import TodoBody from './TodoBody';
import TodoFoot from './TodoFoot';
import { useState } from 'react';

function App() {

  const [todoList, setTodoList] = useState([])
  const [isComplated, setIsComplated] = useState(0)

  return (
    <div className="App">
      <TodoHead todoList={todoList} setTodoList={setTodoList}/>
      <TodoBody todoList={todoList} setTodoList={setTodoList} isComplated={isComplated} setIsComplated={setIsComplated}/>
      <TodoFoot todoList={todoList} setTodoList={setTodoList} isComplated={isComplated} setIsComplated={setIsComplated}/>
    </div>
  );
}

export default App;
