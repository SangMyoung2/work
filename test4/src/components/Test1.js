import React,{useState} from 'react';

const Test1 = () => {

    const [data,setData] = useState([
        {id:1,name:'배수지',age:27,done:true},
        {id:2,name:'유인나',age:37,done:false},
        {id:3,name:'정인선',age:47,done:true},
        {id:4,name:'박신혜',age:57,done:false},
        {id:5,name:'손예진',age:67,done:true}
    ])

    //데이터 추가하는 방법
    //방법1
    const onAdd1 = () => {
        setData(data.concat({id:6,name:'한예슬',age:40,done:false}))
    }
    //방법2
    const onAdd2 = () => {
        const newData = data.concat({id:7,name:'안젤리',age:25,done:true})
        setData(newData)
    }
    //방법3
    const onAdd3 = () => { 
        setData([
            ...data, //기존 데이터도 띄우고 싶으면 꼭 같이 써줘야한다.
            ({id:8,name:'정인나',age:30,done:false})//기존 데이터를 지우고 해당 데이터만 추가한다.
        ])
    }
    //방법4
    const onAdd4 = () => {
        const newData = {id:9,name:'이효리',age:45,done:true}
        setData([...data,newData])
    }

    return (
        <div>
            <p>
                <button onClick={onAdd1}>추가1</button>
                <button onClick={onAdd2}>추가2</button>
                <button onClick={onAdd3}>추가3</button>
                <button onClick={onAdd4}>추가4</button>

            </p>



            {
                data.map((item,index)=>
                <p key={item.id}>
                    {item.id} / {item.name} / {item.age} / {item.done?'참':'거짓'}
                </p>
                )
            }
        </div>
    );
};

export default Test1;