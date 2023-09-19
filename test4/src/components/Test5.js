import React,{useRef,useState} from 'react';

const Test5 = () => {

    // const colorRef = useRef()

    const[color,setColor] = useState('')
    const[text,setText] = useState('')

    const onColor = (evt) => {

        // console.log(colorRef.current.value)       

        const {value} = evt.target //value값은 current.value 가져올수도 있지만 대부분 evt.target으로 가져온다. 
        // setColor(value)//콤보 //선택 버튼을 눌렀을때 반응할건지 아니면 option선택하면 바로 반응할건지 여부를 지정
        setText(value)//버튼
    }

    const onSelect = () => {
        setColor(text)
    }

    return (
        <div>
            <h2 style={{color:color}}>컬러선택</h2>
            <select onChange={onColor}>
                <option value='red'>red</option>
                <option value='green'>green</option>
                <option value='pink'>pink</option>
                <option value='skyblue'>skyblue</option>
                <option value='tomato'>tomato</option>
            </select>
            <button onClick={onSelect}>선택</button>
        </div>
    );
};

export default Test5;