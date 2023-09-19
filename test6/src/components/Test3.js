import React from 'react';

//매개변수 사용방법
const Test3 = () => {

    const onAdd1 = () => {
        alert('add1클릭') //매개변수가 없을때 사용했던 방법
    }
    const onAdd2 = (text) => {
        alert(text)
    }

    return (
        <div>
            <button onClick={onAdd1}>확인1</button>
            {/* <button onClick={onAdd2('안녕')}>확인2</button>  매개변수를 이렇게 넘겨주면 안된다.*/}

            {/* 매개변수가 있다는 것을  알려줘야한다. */}
            <button onClick={()=>onAdd2('안녕')}>확인2</button>
        </div>
    );
};

export default Test3;