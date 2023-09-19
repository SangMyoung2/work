import React,{useState} from 'react';
import './Test5.css'

const Test5 = () => {

    const [isActive,setIsActive] = useState(true)
    
    const onAdd = () => {
        setIsActive(true)
    }

    const onRemove = () => {
        setIsActive(false)
    }

    const onToggle = () => {
        setIsActive(!isActive)
    }

    return (
        <div className='wrap'>
            <div className='on'>오늘은 화요일입니다.</div>
            <div className='lineRed'>오늘은 화요일입니다.</div>
            <div className={isActive ? 'on' : ''}>오늘은 화요일입니다.</div>
            {/* 두개의 css를 적용할때는 중괄호와 백틱으로 묶어주고 각각의 css앞에 $를 붙여준다. */}
            <div className={`${isActive ? 'lineRed' : ''} ${isActive ? 'on' : ''}`}>오늘은 화요일입니다.</div>
            <p>
                <button onClick={onAdd}>addClass</button>
                <button onClick={onRemove}>removeClass</button>
                <button onClick={onToggle}>toggleClass</button>
            </p>
        </div>
    );
};

export default Test5;