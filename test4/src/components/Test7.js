import React,{useState,useRef} from 'react';

const Test7 = () => {

    const nameRef = useRef()
    const [name,setName] = useState()
    const [age,setAge] = useState()
    const [addr,setAddr] = useState()

    const onName = (evt) => {
        setName(evt.target.value)
    }
    const onAge = (evt) => {
        setAge(evt.target.value)
    }
    const onAddr = (evt) => {
        setAddr(evt.target.value)
    }

    const onReset = () => {
        setName('')
        setAge('')
        setAddr('')
        nameRef.current.focus()
    }

    return (
        <div>
            <h2>input 여러개 관리</h2>
            <input type='text' onChange={onName} value={name} ref={nameRef}/><br/>
            <input type='text' onChange={onAge} value={age}/><br/>
            <input type='text' onChange={onAddr} value={addr}/><br/>
            <button onClick={onReset}>초기화</button>
            <hr/>
            <h4>
                name : {name} <br/> age : {age} <br/> addr : {addr}
            </h4>
        </div>
    );
};

export default Test7;