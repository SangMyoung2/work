import React,{useEffect,useState,useRef,useLayoutEffect} from 'react';
import '../assets/css/reset.css'
import './style.css'
import AddUser from './AddUser';
import ListUser from './ListUser';
import EditUser from './EditUser';
import Message from './Message';

function Customer(){

    
    const userData = [
        
        {id:1,name:'배수지',job:'가수'},
        {id:2,name:'유인나',job:'배우'},
        {id:3,name:'정인선',job:'배우'},
        {id:4,name:'박신혜',job:'배우'}
    ]
    const no = useRef(userData.length+1)
    
    const [current,setCurrent] = useState({}) //수정할때 수정할 데이터 담을 그릇
    const [isEdit,setIsEdit] = useState(false)

    const [users,setUsers] = useState(userData)

    const [msg,setMsg] = useState('')
    const [isShow,setIsShow] = useState(false)

    const onAdd = (user) => {
        // alert('add')

        user.id = no.current++;
        setUsers([
            ...users,
            user
        ])

        // setMsg('고객 정보를 추가합니다.')
        // setIsShow(true)

        onShow('고객 정보를 추가합니다.')
    }

    const onDel = (id) => {
        setUsers(users.filter(item=>item.id!==id))

        // setMsg('고객 정보를 삭제합니다.')
        // setIsShow(true)
        onShow('고객 정보를 삭제합니다.')
    }

    //수정창띄우기
    const onEdit = (user) => {
        setCurrent(user)
        setIsEdit(true)

        // setMsg('고객 정보를 수정합니다.')
        // setIsShow(true)
        onShow('고객 정보를 수정합니다.')
    }
    
    //실제 수정
    const onUpdate = (data) => {
        setIsEdit(false)
        setUsers(users.map(user=>user.id===data.id ? data:user))
        
        // setMsg('고객 정보를 수정했습니다.')
        // setIsShow(true)

        onShow('고객 정보를 수정했습니다.')
    }
    
        const onShow = (text) => {
            setMsg(text)
            setIsShow(true)
        }

    return(
        <div className='Customer'>
        {
            isEdit ? <EditUser current={current} onUpdate={onUpdate} setIsEdit={setIsEdit}/> : <AddUser onAdd={onAdd}/>
        }
            <ListUser users={users} onDel={onDel} onEdit={onEdit}/>
            
            {isShow && <Message msg={msg} isShow={isShow} setIsShow={setIsShow}/>}

        </div>

    );
}

export default Customer;