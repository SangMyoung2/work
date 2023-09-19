import React,{useEffect,useState,useRef,useLayoutEffect} from 'react';
import styled,{css} from 'styled-components'

const Container = styled.div`
    border: 1px solid #000;
    padding: 20px;
    margin: 20px;
    background: ${props => props.bg ? props.bg : 'yellow'}; //컨테이너의 bg가 있으면 bg색상 적용 아니면 yellow적용
    width: ${props => props.w ? props.w : '100px'};
`
const Box = styled.button`
    width: ${props => props.width ? props.width : '100px'};
    background: ${props => props.bg ? props.bg : 'skyblue'};

    height: 50px;

    //props가 있으면 적용해라는 의미
    ${props => props.good && css `
        background:green;
        width:300px;
        color:#fff;
        border:none;
        transition:1s;
        &:hover{
            background:hotpink;
            color:#000;
        }
    `}
`

const Test7 = () => {
    return(
        <Container w='500px' bg='pink'>
            <Box width='200px' bg='green'>CSS공부</Box>
            <Box width='100px' bg='yellow'>CSS공부</Box>
            <Box width='500px'>CSS공부</Box>
            <Box width='300px' bg='tomato'>CSS공부</Box>
            <Box bg='gray'>CSS공부</Box>
            <Box good>CSS공부</Box>
        </Container>
    );
}

export default Test7;