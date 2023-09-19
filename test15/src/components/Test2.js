import React,{useState,useCallback} from 'react';

const Test2 = () => {

    const [count,setCount] = useState(1)

    /*
    const increment = () => {
        setCount(count + 1)
    }
    
    const decrement = () => {
        setCount(count - 1)
    }
    */

    //useMemo는 return값을 기억하고 useCallback은 함수를 기억한다.
    const increment = useCallback(() => { //이름없는 함수를 increment에 저장한다.
        setCount(count + 1)
    },[count])
    
    const decrement = useCallback(() => { //이름없는 함수를 decrement에 저장한다.
        setCount(count - 1)
    },[count])

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>증가</button>
            <button onClick={decrement}>감소</button>
        </div>
    );
};

export default Test2;