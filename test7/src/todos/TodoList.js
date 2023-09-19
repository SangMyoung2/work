import React from 'react';
import './TodoList.css'
import TodoItem from './TodoItem';

const TodoList = ({todos,onDel,onToggle}) => {
    return (
        <ul className='TodoList'>
            {
                todos.map(item=><TodoItem key={item.id} item={item} onDel={onDel} onToggle={onToggle}/>)
            }
        </ul>
    );
};

export default TodoList;