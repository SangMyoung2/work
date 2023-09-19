import React,{useEffect,useState,useRef,useLayoutEffect} from 'react';
import './MelonModal.css'
import { AiOutlineClose } from 'react-icons/ai';

function MelonModal({musicNum, onClose}){

    const {title,singer,key} = musicNum

    return(
        <div className='Modal'>
            <div className='bg'></div>
            <div className='popup'>
                <h2>제목: {title}</h2>
                <div>
                    <iframe src={`https://www.youtube.com/embed/${key}`} frameborder="0"></iframe>
                </div>
                <p>가수: {singer}</p>
                <span onClick={onClose}>
                    <i><AiOutlineClose/></i>
                </span>
            </div>
        </div>
    );
}

export default MelonModal;