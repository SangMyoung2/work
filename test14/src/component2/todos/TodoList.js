import React,{useContext} from 'react';
import { TodoContext } from '../../contexts/TodosContext';
import TodoItem from './TodoItem';

const TodoList = () => {

    const {data} = useContext(TodoContext)

    return (
        <div>
            {
                data.map(item=><TodoItem key={item.id} item={item}/>)
            }
        </div>
    );
};

export default TodoList;