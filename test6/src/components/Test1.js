import React,{useRef,useState} from 'react';

//input 박스에서 엔터치는 기능
const Test1 = () => {

    const no = useRef(1)
    const textRef = useRef()
    
    const [data,setData] = useState([])
    const [text,setText] = useState()

    const onText = (evt) => {
        const {value} = evt.target
        setText(value)
    }

    const onAdd = (evt) => {

        evt.preventDefault()

        setData([
            ...data,
            {
                id:no.current++, //1씩 증가하는 값이 id에 들어간다.
                text //text:text 넘어오는 변수와 값이 동일할 때는 한번만 작성해도 상관없다.
            }
        ])
        setText('')
        textRef.current.focus()
    }

    return (
        <div>
            {/* form안에서 엔터를 치면 onAdd가 실행된다 */}
            <form onSubmit={onAdd}> 
                <input type='text' onChange={onText} value={text} name='text' ref={textRef}/>
                <button>추가</button>
            </form>
            <ul>
                {
                    data.map(item=><li key = {item.id}>
                        {item.id} / {item.text}
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Test1;