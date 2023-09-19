import React,{useEffect,useState,useRef,useLayoutEffect} from 'react';
import './Test4.scss'

function Test4(){
    return(
        <div className='header'>
            <div className='inner'>
                <h1>로고</h1>
                <ul className='topMenu'>
                    <li><a href='#'>홈</a></li>
                    <li><a href='#'>이메일</a></li>
                    <li><a href='#'>로그인</a></li>
                </ul>
                <nav className='gnb'>
                    <ul>
                        <li><a href='#'>Menu1</a></li>
                        <li><a href='#'>Menu2</a></li>
                        <li><a href='#'>Menu3</a></li>
                        <li><a href='#'>Menu4</a></li>
                        <li><a href='#'>Menu5</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Test4;