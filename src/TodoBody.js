import React from 'react'
export default function TodoBody({todoList, setTodoList, setIsComplated}) {

  return (
    <div>
        {
            todoList.map((el) => {
                const {id, text} = el
    
                return(
                    <div key={id}>
                        <input type="checkbox" onChange={() => {
                            el.isComplated = !el.isComplated
                            setIsComplated(todoList.filter(el => el.isComplated).length)
                        }}/>
                        <span>{text}</span>
                        <button onClick={() => {
                            setTodoList(todoList.filter(e => e.id !== id))
                        }}>X</button>
                    </div>
                )
            })
        }
    </div>
  )
}
