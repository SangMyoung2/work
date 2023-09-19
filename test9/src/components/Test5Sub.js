import React, { useEffect, useState } from 'react';

//react에서 시간을 표시한는 방법
const Test5Sub = () => {

    const [date,setDate] = useState(new Date())

    useEffect(()=>{
        const timer = setInterval(()=>{
            setDate(new Date())
        }, 1000)

        return()=>{ //뒷풀이 함수는 꼭 필요하다.
            clearInterval(timer)
        }
    })
    return (
        <div>
            <h1>날짜: {date.toLocaleDateString()}</h1>
            <h1>시간: {date.toLocaleTimeString()}</h1>
        </div>
    );
};

export default Test5Sub;