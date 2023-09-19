import React,{useState,useRef} from 'react';

const Test3 = () => {

    const idRef = useRef()

    const [userId,setUserId] = useState('')
    const [userPwd,setUserPwd] = useState('')

    const changInput1 = (evt) => {
        // setUserId(evt.target.value)
        const {value} = evt.target
        setUserId(value)
    }

    const changInput2 = (evt) => {
        // setUserPwd(evt.target.value)
        const {value} = evt.target
        setUserPwd(value)
    }

    const onReset = () => {
        setUserId('')
        setUserPwd('')
        idRef.current.focus() //current = 프로퍼티라고함 //리셋할때 커서의 위치지정
    }

    return (
        <div>
            ID: <input type='text' onChange={changInput1} value={userId} ref={idRef}/><br/>
            PWD: <input type='text' onChange={changInput2} value={userPwd}/><br/>
            <button onClick={onReset}>초기화</button>
            <h2>ID: {userId}</h2>
            <h2>PWD: {userPwd}</h2>
        </div>
    );
};

export default Test3;