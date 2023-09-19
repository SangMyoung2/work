import React,{useState,useRef} from 'react';
import './Todos.css'
import TodoInput from './TodoInput';
import TodoList from './TodoList';


const Todos = () => {

    const no = useRef(1)
    
    const [todos,setTodos] = useState([
        // {id:1,text:'점심먹기',done:false}

    ])

    const onAdd = (text) => {
        setTodos([
            ...todos,
            {
                id: no.current++,
                text,
                done:false
            }
        ])
    }

    const onDel = (id) => {
        
        setTodos(todos.filter(item=>item.id!==id))
    }

    /* 방법1
    const onToggle = (id) => {
        
        setTodos(todos.map(item => {
            if(item.id===id){
                return {
                    ...item,
                    done:!item.done
                }
            }else{
                return item
            }
        }))
    }
    */

    //방법2
    const onToggle = (id) => {
        setTodos(todos.map(todos=>todos.id===id?{...todos,done:!todos.done}:todos))
    }

    return (
        <div className='Todos'>
            <h1>Todo List</h1>
            <TodoInput onAdd={onAdd}/>
            <TodoList todos={todos} onDel={onDel} onToggle={onToggle}/>
        </div>
    );
};

export default Todos;