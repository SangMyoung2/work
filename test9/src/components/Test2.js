import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';

const Test2 = () => {

    const [text,setText] = useState('')
    const ref1 = useRef()

    useEffect(()=>{
        console.log('useEffect')
        ref1.current.focus()
    },[]) //[]를 넣으면 useEffect가 처음 한번만 실행된다.

    useLayoutEffect(()=>{
        console.log('useLayoutEffect')
        ref1.current.focus()
    },[])


    return (
        <div>
            <input type='text' ref={ref1} onChange={evt=>setText(evt.target.value)}/>
        </div>
    );
};

export default Test2;