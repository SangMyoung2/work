import React,{useState,useRef} from 'react';
import '../assets/css/reset.css'

const Form = ({onAdd}) => {

    const textRef = useRef()
    const [text,setText] = useState('')

    const changeInput = (evt) => {
        const {value} = evt.target
        setText(value)
    }
    //1개 함수 안에서 여러개의 작업을 하고 싶을때
    const onAnother = (text) => {
        // alert('다른일')
        onAdd(text)
        setText('')
        textRef.current.focus()
    }

    return (
    <div>
        <input type='text' value={text} onChange={changeInput} ref={textRef}/>
        <button onClick={()=>onAnother(text)}>추가</button>
    </div>
    )
}
const List = ({data, onDel}) => {
    return (
    <div>
        {
            data.map(item => <Item key={item.id} item={item} onDel={onDel}/>)
        }
    </div>
    )
}
const Item = ({item, onDel}) => {

    const {id,text} = item

    return (
    <div>
        {id}, {text}
        <button onClick={()=>onDel(id)}>삭제</button>
    </div>
    )
}

const Test1 = () => {

    const [data,setData] = useState([
        {id:1,text:'저녁 먹기'},
        {id:2,text:'친구 만나기'},
        {id:3,text:'치맥 먹기'}
    ])

    const no = useRef(data.length+1)

    const onAdd = (text) => {
        setData([
            ...data,
            {
                id: no.current++,
                text //text:text
            }
        ])
    }

    const onDel = (id) => {
        setData(data.filter(item=>item.id!==id))
    }

    return (
        <div>
            <h1>할일 만들기</h1>
            <Form onAdd={onAdd}/>
            <List data={data} onDel={onDel}/>
        </div>
    );
};

export default Test1;