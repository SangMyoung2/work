import React,{useEffect,useState,useRef,useLayoutEffect} from 'react';
import '../assets/css/reset.css'
import './style.css'
import AddUser from './AddUser';
import ListUser from './ListUser';
import EditUser from './EditUser';
import Message from './Message';
import taxiService from '../services/taxiService' //모든 메소드가 들어있음

function Customer(){

    // const no = useRef(userData.length+1) DB에 넣을때는 자동으로 index번호가 부여된다. 필요없음
    
    const [current,setCurrent] = useState({}) //수정할때 수정할 데이터 담을 그릇
    const [isEdit,setIsEdit] = useState(false)

    const [users,setUsers] = useState([])

    const [msg,setMsg] = useState('')
    const [isShow,setIsShow] = useState(false)

    const onAdd = (user,image) => {

        taxiService.addUser(user,image)

        onShow('고객 정보를 추가합니다.')
    }

    const onData = async () => {
        const res = await taxiService.getUser()
        setUsers(res)
    }

    //render이 다된 후에 데이터를 띄운다.
    useEffect(()=>{
        onData()
    }) //여기에서는 },[])를 하면 안된다. 한번만 실행하기 때문에 데이터를 추가할 경우 f5키를 누르기 전까지 반영되지 않는다.

    const onDel = (item) => {

        taxiService.deleteUser(item._id)

        onShow('고객 정보를 삭제합니다.')
    }

    //수정창띄우기
    const onEdit = (user) => {
        setCurrent(user)
        setIsEdit(true)

        onShow('고객 정보를 수정합니다.')
    }
    
    //실제 수정
    const onUpdate = (data) => {
        setIsEdit(false)
        
        taxiService.updateUser(data)

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