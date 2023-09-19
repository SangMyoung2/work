import React,{useEffect,useState,useRef,useLayoutEffect} from 'react';
import './Test3.css'
import myStyle from './Test3.module.css'

function Test3(){
    return(
        <div className='wrap'>        
            <div className='box'></div>{/* Test3.css 적용 */}
            <div className={myStyle.box}></div>{/* Test3.module.css 적용 */}


            <div className='size bg'></div> {/* Test3.css */}
            {/* 2가지 적용하기 방법1 */}
            <div className={`${myStyle.size} ${myStyle.bg}`}></div> {/* Test3.module.css적용 */}
            {/* 방법2 */}
            <div className={[myStyle.size, myStyle.bg].join(' ')}></div>
            {/* 방법3 : 2개를 섞어 사용 */}
            <div className={["size",myStyle.bg].join(' ')}></div> {/* size는 Test.css것 색상 bg는 Test3.module.css 것 사용 */}
         </div>
    );
}

export default Test3;