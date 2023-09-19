import React from 'react';

//props 기능 = React의 전부다 
//props를 작성하면 부모에서 sub를 호출할때 데이터가 모두 자동으로 들어가 있다.

//const Sub = (props) => { //자식(부모안으로 들어가는 컴포넌트)

const Sub = ({name,place,date,time,content}) => { //넘어오는 데이터를 이렇게 받아도된다.

    //비구조 할당
    //props.place등을 생략해도 된다.
    //const {name,place,date,time,content} = props

    return (
        <div>
            <h2>{name}의 이달의 할일</h2>
            <ul>
                <li>장소: {place}</li>
                <li>날짜: {date}</li>
                <li>시간: {time}</li>
                <li>내용: {content}</li>
            </ul>
        </div>
    );
};


const Test4 = () => { //부모

    return (
        <div> 
            {/* 데이터를 호출 할때마다 데이터를 넘겨주기 */}
            <Sub name='정인선' place='서울' date='23.09.17' time='am11:30' content='회사미팅'/>
            <hr/>
            <Sub name='배수지' place='부산' date='23.11.11' time='pm02:30' content='팬미팅'/>
            <hr/>
            <Sub name='유인나' place='대구' date='23.10.07' time='am09:35' content='드라마 촬영'/>
        </div>
    );
};



export default Test4;