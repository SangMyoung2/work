import React,{useEffect,useState,useRef,useLayoutEffect} from 'react';

function EditUser({current, onUpdate, setIsEdit}){

    const [user,setUser] = useState(current)

    const {id,name,job} = user

    const changeInput = (evt) => {
        const {value,name} = evt.target
        setUser({
            ...user,
            [name]:value
        })
    }

    const onSubmit = (evt) => {

        evt.preventDefault()
        onUpdate(user)
        setUser({
            name:'',job:''
        })
    }

    //current값이 바뀔때 마다 setUser로 데이터를 넣는다.
    //고객 리스트의 수정버튼을 누를때마다 current에 데이터가 바뀌어 들어간다.
    useEffect(()=>{
        setUser(current)
    },[current])

    return(
        <form onSubmit={onSubmit}>
            <h2>고객 수정</h2>
            <p>
                <label>이름</label>
                <input type='text' value={name} name='name' onChange={changeInput}/>
            </p>
            <p>
                <label>직업</label>
                <input type='text' value={job} name='job' onChange={changeInput}/>
            </p>
            <p>
                <button>수정</button>
                <button onClick={()=>setIsEdit(false)}>취소</button>
            </p>
        </form>
    );
}

export default EditUser;