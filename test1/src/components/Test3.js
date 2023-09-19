import React from 'react';

const Test3 = () => {

    //컴포넌트 함수 영역
    const title = '신상 명세서'
    const name = '배수지'
    const age = 27
    const addr = '서울'
    const gender = '여자'

    return (
        <div>
            <h2>{title}</h2>
            <ul>
                <li>이름:{name}</li>
                <li>나이:{age}</li>
                <li>주소:{addr}</li>
                <li>성명:{gender}</li>
            </ul>
        
        {/*여러줄 주석 */}
        {/* 주석 */}


        </div>
    );
};

export default Test3;