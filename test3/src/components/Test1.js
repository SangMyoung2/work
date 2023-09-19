import React,{useState} from 'react';

const Test1 = () => {

    //useState setter 만들기
    //setName은 사용자 변수 아무거나 작성가능
    const [name,setName] = useState('좋아하는 사람')
    
    const onName1 = () => {
        setName('배수지')
    }

    const onName2 = () => {
        setName('유인나')
    }

    return (
        <div>
            <h2>이름: {name}</h2>
            <button onClick={onName1}>배수지 버튼</button>
            <button onClick={onName2}>유인나 버튼</button>
            
        </div>
    );
};

export default Test1;