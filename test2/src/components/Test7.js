import React from 'react';

const Test7 = () => {

    const click1 = () => {
        alert('click1 선택했다.')
    }

    const click2 = () => {
        alert('click2 선택했다.')
    }

    return (
        <div>
            <h2>이벤트 사용법</h2>
            <p>
                <button onClick={click1}>클릭1</button>
                <button onClick={click2}>클릭2</button>
                
                {/* 간단한 함수를 직접 작성해서 실행 */}
                <button onClick={()=>alert('클릭3')}>클릭3</button>
                <button onClick={()=>alert('클릭4')}>클릭4</button>
            </p>
        </div>
    );
};

export default Test7;