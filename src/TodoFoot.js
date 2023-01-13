import React, { useEffect } from 'react'

export default function ({todoList, setTodoList, isComplated, setIsComplated}) {

  useEffect(() => {
    setIsComplated(todoList.filter((el) => el.isComplated).length)
  }, [todoList])

  return (
    <div>
        <span>{isComplated}/ {todoList.length} is Complated</span>
        <button onClick={() => setTodoList(todoList.filter(el => !el.isComplated))}>Delete Complated</button>
    </div>
  )
}
