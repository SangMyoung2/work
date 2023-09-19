import React from 'react';

const Test4Sub = ({onAdd, onDel}) => {
    return (
        <div>
            <h3>이름 추가</h3>
            <p>
                <button onClick={()=>onAdd('배수지')}>배수지</button>
                <button onClick={()=>onAdd('유인나')}>유인나</button>
                <button onClick={()=>onAdd('정인아')}>정인아</button>
            </p>
            <h3>이름 삭제</h3>
            <p>
                <button onClick={()=>onDel(1)}>정인선</button>
                <button onClick={()=>onDel(2)}>김수지</button>
                <button onClick={()=>onDel(3)}>이효리</button>
            </p>
        </div>
    );
};

export default Test4Sub;