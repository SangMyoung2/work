import React,{useState,useRef} from 'react';

//input 박스 여러개 일때 관리하는 방법 Test7을 압축
const Test8 = () => {

    const nameRef = useRef()
    const [form,setForm] = useState({
        name:'',age:'',addr:''
    })

    const {name,age,addr} = form //비구조할당

/*
    const onName = (evt) => {

        const {value,name} = evt.target
        setForm({
            ...form,
            [name]:value //name(name):name(value) //name:111
        })
    }
    const onAge = (evt) => {
 
        const {value,name} = evt.target
        setForm({
            ...form,
            [name]:value //age(name):age(value) //age:222
        })
    }
    const onAddr = (evt) => {

        const {value,name} = evt.target
        setForm({
            ...form,
            [name]:value //addr(name):addr(value) //addr:333
        })
    }
*/

    const changeInput = (evt) => {

        const {value,name} = evt.target
        setForm({
            ...form,
            [name]:value
        })
    }

    const onReset = () => {
        setForm({
            name:'',age:'',addr:''
        })
        nameRef.current.focus()
    }

    return (
        <div>
            <h2>input 여러개 관리</h2>
            <input type='text' onChange={changeInput} name='name' value={name} ref={nameRef}/><br/>
            <input type='text' onChange={changeInput} name='name' value={age}/><br/>
            <input type='text' onChange={changeInput} name='addr' value={addr}/><br/>
            <button onClick={onReset}>초기화</button>
            <hr/>
            <h4>
                name : {name} <br/> age : {age} <br/> addr : {addr}
            </h4>
        </div>
    );
};

export default Test8;