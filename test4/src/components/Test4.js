import React,{useRef} from 'react';

const Test4 = () => {

    const idRef = useRef()
    const pwRef = useRef()

    const click = () => {
        const data = {
            id: idRef.current.value,
            pw: pwRef.current.value
        }
        console.log(data)

        const json = JSON.stringify(data,null,5) //json형태의 데이터로 변환
        console.log(json)
    }


    return (
        <div>
            <input type='text' ref={idRef}/>
            <input type='text' ref={pwRef}/>
            <button onClick={click}>확인</button>
        </div>
    );
};

export default Test4;