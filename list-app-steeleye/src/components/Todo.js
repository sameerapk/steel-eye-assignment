import React, { useState } from 'react'
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

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
           {!isInEditMode && (
               <div className='list-container'>
               <span style={{backgroundColor: item.clicked ? 'green' : 'red'}} onClick={()=>textClicked(item)}>
               {item.text}
               </span>
               <div className='icons'>
                   <RiCloseCircleLine onClick={()=>delTodo(item)} className='delete-icon'/>
                   <TiEdit onClick={changeMode} className='edit-icon' />
               </div>
               </div>
           ) }
           {isInEditMode && 
           <input type='text' value={title} onChange={handleTitleChange} className='todo-input'/>
           }
           {isInEditMode && <button onClick={cancelEdit} className='todo-button'>Cancel</button>} 
           {isInEditMode && <button className='todo-button' onClick={()=>{updTodo(item, title);setIsInEditMode(false)}}>Update todo</button>} 
        </h1>
    )
}

export default Todo
