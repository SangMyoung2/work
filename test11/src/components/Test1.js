import React, { useEffect, useState } from 'react';
import axios from 'axios'

const Test1 = () => {

    const [data,setData] = useState()

    //1. fetch 사용(javascript에서 지원)
    /*
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(res => setData(res))
    },[])
    */

    //2. axios 사용
    /*
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(res => setData(res.data))
    })
    */

    //3.  async/await 사용(Promise의 단점을 보완)
    /*
    useEffect(()=>{
        const getData = async()=>{
            const res = await fetch('https://jsonplaceholder.typicode.com/todos')
            const data = await res.json()
            setData(data)
        }
        getData() //함수 호출
    },[])
    */

    //4 async/await + axios 사용
    useEffect(()=>{
        const getData = async()=>{
            const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
            setData(res.data)
        }
        getData() //함수 호출
    },[])


    return (
        <div>
            {
                data && data.map(item => <p key={item.id}>
                    {item.id} / {item.title}
                </p>)
            }
        </div>
    );
};

export default Test1;


/*
서버로 부터 네트워크 요청을 하고 응답을 받을수있게함

[Ajax 요청 방법 - 4가지]


1. fetch 사용(javascript에서 지원)
   fetch(url,[option])

   fetch(url)
   .then(응답=>응답.json())

2. axios 사용
   axios.get(url)
      .then(응답 => 응답.data)
   .then 동기처리

3.  async/await 사용(Promise의 단점을 보완)
   비동기를 동기처럼 사용가능
   함수를 만듬
   await fetch(url)

4 async/await + axios 사용
   await axios.get(url)
/////////////////////////////////
js 데이터
export default [
  {
    id:1,
    name:'배수지',
    age:27,
    addr:'서울'
  }
]

import data from './경로/파일명'

////////////////////////////////
json파일
[
    {
    id:1,
    name:'배수지',
    age:27,
    addr:'서울'
  }
]

import data from './경로/파일명.json  //json형태 데이터를 불러올때는 무조건 파일확장자를 작성해야한다.
*/
