import React,{useEffect,useState,useRef,useLayoutEffect} from 'react';
import styled from 'styled-components'

const Container = styled.section`
width: 300px; padding: 20px;
border: 1px solid #000;
`

const Box1 = styled.section`
    padding: 20px; background: pink;
    transition: 0ms.5s; margin-bottom: 15px;
    &:hover{
        background: skyblue;
    }
`
const Box2 = styled('article')`
    padding: 15px; background: tomato; width: 100%;
    box-sizing: border-box; transition: 1s;
    margin-bottom: 15px;
    &:hover{
        width: 150%;
    }
`
const Box3 = styled('div')`
    height: 100px; background: yellow; width: 100%;
    transition: 1s; margin-bottom: 10px;
    &:hover{
        border-radius: 0 50px - 50px;
        background: greenyellow;
    }
`
const Button = styled.button`
    width: 150px; height: 80px;
    background: #000; color: #fff;
    border: none;
`

function Test6(){

    return(
        <Container>
            <Box1>오늘은 화요일</Box1>
            <Box2>내일은 수요일</Box2>
            <Box3>내맘은 토요일</Box3>
            <Button>확인</Button>
        </Container>
    );
}

export default Test6;