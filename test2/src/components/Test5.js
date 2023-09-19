import React from 'react';

const Sub = (props) => {
    return (
        <div>
            <h3>이름: {props.name}({typeof props.name})</h3>
            <h3>나이: {props.age}({typeof props.age})</h3>
            <h3>로그인 여부: {props.done ? '로그인' : '로그아웃'}({typeof props.done})</h3>
            <hr/>
        </div>
    )
}

const Test5 = () => {

    const data1 = {name:'정인선',age:28,done:true}
    const data2 = {name:'배수지',age:27,done:false}

    return (
        <div>
            {/* 데이터를 직접 입력해서 넘기기 */}
            <Sub name='유인나' age={30} done={true}/>
            <Sub name='정인하' age={26} done={false}/>

            {/* 기존 데이터를 각 변수로 가져오기 */}
            <Sub name={data1.name} age={data1.age} done={data1.done}/>
            <Sub name={data2.name} age={data2.age} done={data2.done}/>

            {/* 기존의 데이터 가져와 */}
            <Sub {...data1}/>
            <Sub {...data2}/>
        </div>
    );
};

export default Test5;