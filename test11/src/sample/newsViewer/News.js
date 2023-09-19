import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios'
import NewsList from './NewsList';
import NewsCategory from './NewsCategory';


const News = () => {

    const [data,setData]  = useState([])
    const [isLoading,setIsLoading] = useState(false)
    const [error,setError] = useState('')
    const [category,setCategory] = useState('')

    useEffect(()=>{
        const API_KEY = 'a63d2965f97c4b55a6fcf9a6810c101d'
        const query = category==='all'?'':`&category=${category}`
        const url = `https://newsapi.org/v2/top-headlines?country=kr${query}&apikey=${API_KEY}`
        

        axios.get(url)
        .then(res=>{
            setData(res.data.articles)
            setIsLoading(false)
            setError('')
        })
        .catch(error=>{
            setData([])
            setIsLoading(true)
            setError('헤드라인을 찾을 수 없습니다.')
        })

    },[category])

    //방법1
    const selectText = (text) => {
        setCategory(text)
    }

    //방법2
    //useCallback -> 메모리, 속도 등 최적화를 알아서 시켜준다.
    /*
    const selectText = useCallback(
        category => setCategory(category)
    ,[])
    */

    return (
        <div>
            <NewsCategory category={category} selectText={selectText}/>
            {/* {data && <textarea rows={70} cols={200} value={JSON.stringify(data,null,2)}/>} */}
            {
                isLoading && data.length === 0 && (<h1>No News Found</h1>)
            }
            {
                data && !isLoading && <NewsList data={data}/>
            }
            <p>
                {error ? error : null}
            </p>
        </div>
    );
};

export default News;