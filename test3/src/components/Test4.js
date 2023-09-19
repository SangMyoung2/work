import React,{useState} from 'react';

const Test4 = () => {

    const [count,setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    const increment1 = () => {
        /*
        setCount(count + 2)
        setCount(count + 3)
        setCount(count + 4) //이렇게 되어있으면 제일 마지막에 정의한 것만 적용된다.
        */
        setCount(i=>i+2)
        setCount(state => state + 4) //위에것 포함해서 총 6씩 증가한다.
    }

    const decrement1 = () => {
        setCount(count => count - 2)
        setCount(i => i + 4) //변수명은 내맘대로
    }

    return (
        <div>
            <h2>카운트: {count}</h2>
            <p>
                <button onClick={increment}>증가</button>
                <button onClick={decrement}>감속</button>
            </p>
            <p>
                <button onClick={()=>setCount(count + 1)}>증가</button>
                <button onClick={()=>setCount(count - 1)}>감속</button>
            </p>
            <p>
                <button onClick={increment1}>2씩 증가</button>
                <button onClick={decrement1}>2씩 감속</button>
            </p>
        </div>
    );
};

export default Test4;