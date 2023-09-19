//함수로 컴포넌트 만들기
import React, { Fragment } from "react";

const Test2 = () => {
    return (
        /*
        <div>
            함수로 만든 컴포넌트
            <h2>JSX영역</h2>
            <p>return()안에 한줄이상의 코딩은 div로 묶어준다.</p>
        </div>
        
        <Fragment>
            함수로 만든 컴포넌트
            <h2>JSX영역</h2>
            <p>return()안에 한줄이상의 코딩은 div로 묶어준다.</p>
            <p>div로 계속 묶어줄때 ul안에는 div 사용불가</p>
        </Fragment>
        */

        <>
            함수로 만든 컴포넌트
            <h2>JSX영역</h2>
            <p>return()안에 한줄이상의 코딩은 div로 묶어준다.</p>
            <p>div로 계속 묶어줄때 ul안에는 div 사용불가</p>
            <p>외태그에는 반드시 / 해준다.</p>
            <img src=""/>
            <input text=''/>
            <br/>
            <hr/>
        </>
    );
}

export default Test2;