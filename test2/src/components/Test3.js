import React from 'react';

const Sub = () => { //자식(부모안으로 들어가는 컴포넌트)
    return (
        <div>
            <h2>홍길동의 이달의 할일</h2>
            <ul>
                <li>장소: 서울</li>
                <li>날짜: 2023-09-05</li>
                <li>시간: am 11:30</li>
                <li>내용: 회사 미팅</li>

            </ul>
        </div>
    );
};


const Test3 = () => { //부모
    return (
        <div>
            <Sub/>
            <hr/>
            <Sub/>
            <hr/>
            <Sub/>
        </div>
    );
};



export default Test3;