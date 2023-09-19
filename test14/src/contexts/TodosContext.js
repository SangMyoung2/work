import React,{createContext,useState} from 'react';

export const TodoContext = createContext()

const TodosProvider = ({children}) => {
    
    const [data,setData] = useState([
        {id:1,text:'밥먹기'},
        {id:2,text:'잠자기'},
        {id:3,text:'티비보기'},
        {id:4,text:'게임하기'},
        {id:5,text:'놀러가기'}
    ])

    const onDel = (id) => {
        setData(data.filter(item=>item.id!==id))
    }

    return (
        <TodoContext.Provider value={{data,onDel}}>
            {children}
        </TodoContext.Provider>
    );
};

export default TodosProvider;