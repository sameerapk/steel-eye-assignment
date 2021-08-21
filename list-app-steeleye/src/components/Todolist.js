import React from 'react'
import Todo from './Todo'

const Todolist = ({todos,delTodo, updTodo, textClicked}) => {
    return (
        <div>
            {todos.map(item=>(
                <Todo 
                key={item.id}
                delTodo={delTodo}
                updTodo={updTodo}
                textClicked={textClicked}
                item={item} />
            ))}
        </div>
    )
}

export default Todolist
