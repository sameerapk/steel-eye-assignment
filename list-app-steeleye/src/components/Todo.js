import React from 'react'

const Todo = ({item,delTodo}) => {
    return (
        <h1>
            {item.text}
            <button onClick={()=>delTodo(item)}>Delete todo</button>
        </h1>
    )
}

export default Todo
