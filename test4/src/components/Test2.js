import React from 'react';

const Test2 = () => {

    const click = (evt) => {
        console.log(evt.target) //클릭한 대상만 나옴
        console.log(evt.currentTarget) //이벤트가 있는 대상이 나옴
    }

    const onChange = (evt) =>{
        console.log(evt.target)
        console.log(evt.target.value)
    }

    return (
        <div>
            {/* 클릭 이벤트 click */}
            <h2 onClick={click}>
                <span>확인</span>
                <em>클릭</em>
                <b>누르기</b>
            </h2>

            <hr/>

            <input type='text' onChange={onChange}/>

        </div>
    );
};

export default Test2;