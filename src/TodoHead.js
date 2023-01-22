import React from 'react'
import { useState, useContext } from 'react';
import { Context } from './App';

export default function TodoHead() {

  const {todoList, setTodoList} = useContext(Context)

    const [inputValue, setInputValue] = useState("")
    const [idCount, setIdCount] = useState(0)

    return (
    <div>
      <input type="text" value={inputValue} onChange={(evt) => {
        setInputValue(evt.target.value)
        }} />
      <button onClick={() => {

        if (inputValue.split("").some(el => el !== " ")) {
            setTodoList([...todoList,
            {
                id: idCount,
                text: inputValue.trim(),
                isComplated: false
            }
            ])
    
            setIdCount(() => idCount + 1)
        }else{
            alert("Mutqagreq voreve ban")
        }

        setInputValue("")
        
        }}>Add todo!</button>
    </div>
  )
}
