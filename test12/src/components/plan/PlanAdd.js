import React, { useState,useRef } from 'react';
import {PlanForm} from '../styled/PlanStyled'

const PlanAdd = ({onAdd}) => {

    const textRef = useRef()

    const [form,setForm] = useState({
        text:'',
        day:'',
        done:'false'
    })

    const {text,day,done} = form

    const changeInput = (evt) => {
        const {value,name} = evt.target
        setForm({
            ...form,
            [name]:value
        })
    }

    const changeCheck = (evt) => {
        const {name,checked} = evt.target
        setForm({
            ...form,
            [name]:checked
        })
    }

    const onSubmit = (evt) => {
        evt.preventDefault()
        if(!text || !day) return

        onAdd(form)

        setForm({
            text:'',day:'',done:false            
        })
        textRef.current.focus()
    }

    return (
        <PlanForm>
            <div>
                <label>일정</label>
                <input type='text' value={text} name='text' onChange={changeInput} ref={textRef}/>
            </div>
            <div>
                <label>일시</label>
                <input type='text' value={day} name='day' onChange={changeInput}/>
            </div>
            <div>
                <label>중요</label>
                <input type='checkbox' checked={done} name='done' onChange={changeCheck}/>
            </div>
            <button type='submit' onClick={onSubmit}>저장</button>
        </PlanForm>
    );
};

export default PlanAdd;