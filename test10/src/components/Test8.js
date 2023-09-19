import React, { useState } from 'react';
import styled from 'styled-components'

const Container = styled.div`
    border: 1px solid #000;
    padding: 20px;
    width: ${props=>props.width};
    h2{font-size: 50px;}
`
const Button = styled.button`
    margin: 5px; font-size: 40px;
    padding: 0 35px 25px;
    cursor: pointer; outline: none; border: none;

    &.up::after{content:📤}
    &.down::after{content:📥}

    &:hover{background:tomato}

    &:disabled{
        filter: grayscale(100%);
        background: #999;
        cursor: not-allowed;
    }
`


const Test8 = () => {

    const [count,setCount] = useState(0)

    const increment = () => {
        setCount(count > 10 ? 10 : count + 1)
    }

    const decrement = () => {
        setCount(count < 0 ? 0 : count - 1)
    }

    return (
        <Container width='400px'>
            <h2>숫자: {count}</h2>
            <Button className='up' onClick={increment} disabled={count===10}>📤</Button>
            <Button className='down' onClick={decrement} disabled={count===0}>📥</Button>
        </Container>
    );
};

export default Test8;