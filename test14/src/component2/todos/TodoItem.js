import React,{useContext} from 'react';
import { TodoContext } from '../../contexts/TodosContext';
import { ColorContext } from '../../contexts/ColorContext';


const TodoItem = ({item}) => {

    const {id,text} = item
    const {onDel} = useContext(TodoContext)
    const {color,onTomato,onPink,onSkyblue,onYellow} = useContext(ColorContext)

    return (
        <div style={{color:color}}>
            {id} / {text}
            <button onClick={()=>onDel(id)}>삭제</button>
        </div>
    );
};

export default TodoItem;