import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Test3 = () => {

    const [data,setData] = useState({}) //1개의 데이터 로딩 {}
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState('')
    const [valueId,setValueId] = useState(1)
    const [num,setNum] = useState(1)

    const url = `https://jsonplaceholder.typicode.com/posts/${valueId}`

    useEffect(()=> {
        axios.get(url)
        
        .then(res=> { //응답성공
            setData(res.data)
            setLoading(false)
            setError('')
        })
        .catch(error=>{ //응답실패
            setData({})
            setLoading(true)
            setError('데이터를 받을 수 없습니다.')
        })
    },[num]) //num이 변경되었을때 //},[search] search가 변경되었을때

    const search = () => {
        setNum(valueId)
    }

    return (
        <div>
            <input type='text' value={valueId} onChange={evt=>setValueId(evt.target.value)}/>
            <button onClick={search}>검색</button>
            {
                data && loading ? <h2>로딩중...</h2> : 
                <h3>출력: {data.title}</h3>
            }
            <p>
                {error ? error : null}
            </p>
        </div>
    );
};

export default Test3;