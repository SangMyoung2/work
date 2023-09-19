import React,{useEffect,useState,useRef,useLayoutEffect} from 'react';
import './MelonForm.css'

function MelonForm({onSearch}){

    const [text,setText] = useState('')
    const changInput = (evt) => {
        const {value} = evt.target
        setText(value)
        // onSearch(text)
    }

    useEffect(()=>{
        onSearch(text)
    },[text])

    const onSubmit = (evt) => {
        evt.preventDefault()
        if(!text) return //입력했을때만 반응하게
        // onSearch(text)
        setText('') //초기화
    }

    return(
        <form className='MelonForm' onSubmit={onSubmit}>
            <input type='text' placeholder='곡명을 입력하세요.' value={text} onChange={changInput}/>
        </form>
    );
}

export default MelonForm;