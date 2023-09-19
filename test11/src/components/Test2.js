import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Test2 = () => {

    const [data,setData] = useState([]) //여러개의 데이터 로딩 []
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState('')

    useEffect(()=> {
        axios.get('https://jsonplaceholder.typicode.com/todos')
        
        .then(res=> { //응답성공
            setData(res.data)
            setLoading(false)
            setError('')
        })
        .catch(error=>{ //응답실패
            setData([])
            setLoading(true)
            setError('데이터를 받을 수 없습니다.')
        })
    },[])

    return (
        <div>
            {
                data && loading ? <h2>로딩중...</h2> : data.map(item => <p key={item.id}>
                    {item.id} / {item.title}
                </p>)
            }
            <p>
                {error ? error : null}
            </p>
        </div>
    );
};

export default Test2;