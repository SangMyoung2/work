import React,{useEffect,useState,useRef,useLayoutEffect} from 'react';

function Message({msg,isShow,setIsShow}){

    useEffect(()=>{
        const timer = setTimeout(() => {
           setIsShow(false) 
        },2000)

        return () => {
            clearTimeout(timer)
        }
    },[isShow]) //isShow의 값이 바뀔때만 실행한다.

    return(
        <div className={`message ${isShow ? 'on' : ''}`}>
            {isShow && msg}
        </div>
    );
}

export default Message;