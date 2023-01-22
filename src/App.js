import './App.css';
import React from 'react';
import TodoHead from './TodoHead';
import TodoBody from './TodoBody';
import TodoFoot from './TodoFoot';
import { useState, createContext } from 'react';

export const Context = createContext()

function App() {

  const [todoList, setTodoList] = useState([])
  const [isComplated, setIsComplated] = useState(0)

  return (
    <div className="App">
      <Context.Provider value={{todoList, setTodoList, isComplated, setIsComplated}}>  
        <TodoHead/>
        <TodoBody/>
        <TodoFoot/>
      </Context.Provider>
    </div>
  );
}

export default App;
