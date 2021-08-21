import React, { useState } from 'react'

const Todo = ({item,delTodo,updTodo,textClicked}) => {
    const [isInEditMode, setIsInEditMode] = useState(false)
    const [title,setTitle] = useState('')

    const changeMode = () => {
        setIsInEditMode(true)
        setTitle(item.text)
    }

    const cancelEdit = () => {
        setIsInEditMode(false)
    }

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }

    return (
        <h1>
            {!isInEditMode && 
            <span style={{backgroundColor: item.clicked ? 'green' : 'red'}} onClick={()=>textClicked(item)}>
            {item.text}
            </span> 
            }
           {!isInEditMode && <button onClick={()=>delTodo(item)}>Delete todo</button>}
           {!isInEditMode && <button onClick={changeMode}>Edit todo</button>}
           {isInEditMode && 
           <input type='text' value={title} onChange={handleTitleChange} />
           }
           {isInEditMode && <button onClick={cancelEdit}>Cancel</button>} 
           {isInEditMode && <button onClick={()=>{updTodo(item, title);setIsInEditMode(false)}}>Update todo</button>} 
        </h1>
    )
}

export default Todo
