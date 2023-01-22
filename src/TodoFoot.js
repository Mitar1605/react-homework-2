import React from 'react'
import { useContext } from 'react'
import { Context } from './App'

export default function () {

  const {todoList, setTodoList, isComplated, setIsComplated} = useContext(Context)

  setIsComplated(todoList.filter((el) => el.isComplated).length)

  return (
    <div>
        <span>{isComplated}/ {todoList.length} is Complated</span>
        <button onClick={() => setTodoList(todoList.filter(el => !el.isComplated))}>Delete Complated</button>
    </div>
  )
}