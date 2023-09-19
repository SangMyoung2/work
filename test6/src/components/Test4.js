import React,{useState,useRef} from 'react';
import Test4Sub from './Test4Sub';

const Test4 = () => {

    const no = useRef(7)

    const [data,setData] = useState([
        {id:1,name:'정인선',},
        {id:2,name:'김수지',},
        {id:3,name:'이효리',},
        {id:4,name:'이정재',},
        {id:5,name:'정인성',},
        {id:6,name:'차태현',}
    ])

    const onAdd = (name) => {
        // alert('추가')
        
        setData([
            ...data,
            {id:no.current++,name:name}
        ])
    }

    const onDel = (id) => {
        // alert('삭제')
        setData(data.filter(item=>item.id!==id)) //3번만 보임
    }

    return (
        <div>
            <Test4Sub onAdd={onAdd} onDel={onDel}/>
            <hr/>
            {
                data.map(item => <p key={item.id}>
                        {item.id} / {item.name}
                    </p>)
            }
        </div>
    );
};

export default Test4;