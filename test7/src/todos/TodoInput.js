import React,{useRef,useState} from 'react';
import './TodoInput.css'
import {MdAddCircle} from 'react-icons/md'

const TodoInput = ({onAdd}) => {

    const textRef = useRef()

    const [text,setText] = useState('')

    const changeInput = (evt) => {
        const {value} = evt.target
        setText(value)
    }

    const onSubmit = (evt) => {
        evt.preventDefault()

        if(!text) return

        onAdd(text)

        setText('')
        textRef.current.focus()

    }

    return (
        <div>
            <form className='TodoInput' onSubmit={onSubmit}>
                <input type='text' value={text} onChange={changeInput} ref={textRef}/>
                <button>
                    <MdAddCircle className='icon' size='50'/>
                </button>
            </form>
        </div>
    );
};

export default TodoInput;