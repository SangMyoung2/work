import React,{useContext} from 'react';
import { ColorContext } from '../../contexts/ColorContext';
import { CountContext } from '../../contexts/CountContext';

const Color = () => {

    //context의 value가져오기
    const {color,onTomato,onPink,onSkyblue,onYellow} = useContext(ColorContext)
    const {count,increment,decrement} = useContext(CountContext) //count에서 가져와서 사용함

    return (
        <div>
            <h1 style={{color:color}}>컬러: {color}</h1>
            <h1>숫자: {count}</h1>
            <p>
                <button onClick={()=>onTomato()}>tomato</button>
                <button onClick={()=>onPink()}>pink</button>
                <button onClick={()=>onSkyblue()}>skyblue</button>
                <button onClick={()=>onYellow()}>yellow</button>
            </p>
        </div>
    );
};

export default Color;