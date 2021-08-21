import React from 'react'
import Todo from './Todo'

const Todolist = ({todos,delTodo, updTodo, textClicked}) => {
    return (
        <div>
            {todos.length ? todos.map(item=>(
                <Todo 
                key={item.id}
                delTodo={delTodo}
                updTodo={updTodo}
                textClicked={textClicked}
                item={item} />
            )) : <h1 style={{color: '#fff'}}>No more todos left. Go ahead and add it!!!</h1>}
        </div>
    )
}

export default Todolist
