import React from 'react'
import Todo from './Todo'

const Todolist = ({todos,delTodo}) => {
    return (
        <div>
            {todos.map(item=>(
                <Todo 
                key={item.id}
                delTodo={delTodo}
                item={item} />
            ))}
        </div>
    )
}

export default Todolist
