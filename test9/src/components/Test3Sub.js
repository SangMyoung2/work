import React, { useEffect, useState } from 'react';

const Test3Sub = () => {

    const [x,setX] = useState(0)
    const [y,setY] = useState(0)

    const move = (evt) => {
        setX(evt.clientX)
        setY(evt.clientY)
    }

    useEffect(()=>{
        console.log('useEffect')
        window.addEventListener('mousemove',move)

        //뒷정리
        //메모리의 누수 즉 낭비를 막기위해서 사용한다.
        return()=>{
            window.addEventListener('mousemove',move)
        }

    },[]) //[]는 최초 한번만 useEffect가 실행되도록한다.



    return (
        <div>
            <h2>마우스 좌표</h2>
            <div style={{width:500, height:150, fontSize:50, margin:20, textAlign:'center',border:'1px solid #000', lineHeight: '150px'}}>
                X: {x} / T: {y}
            </div>
        </div>
    );
};

export default Test3Sub;