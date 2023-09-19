import React from 'react';

const Test8 = () => {

    const title = '연예인'
    const arr = ['배수지','유인나','정인선','김태희','심예은']
    const data = [
        {id:1,name:'홍길동1',age:21},
        {id:2,name:'홍길동2',age:22},
        {id:3,name:'홍길동3',age:23},
        {id:4,name:'홍길동4',age:24},
        {id:5,name:'홍길동5',age:25},
    ]


    return (
        <div>
            <h2>{title}</h2>
            <p>{arr[0]}</p>
            <p>{arr[1]}</p>
            <hr/>
            {
                arr.map((item,index) => { //arr의 고유값 index를 key로 줘야 에러가 없어진다.
                    return(<p key={index}>{index}{item}</p>) //반복문을 작성할때는 무조건 key값을 하나 줘야한다.
                })
            }
            <hr/>
            {
                arr.map((item,index) => <p key={index}>{index}/{item}</p>)
            }
            <hr/>
            {
                data.map((item,index) => {
                    return (<p key={item.id}>{item.id}/{item.name}/{item.age}</p>)
                })
            }
        </div>
    );
};

export default Test8;