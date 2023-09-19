import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import axios from 'axios'
import GlobalStyle from '../styled/Global'
import GallerySearch from './GallerySearch';
import GalleryList from './GalleryList';
import { Container } from '../styled/pixabaycss';

const Gallery = () => {

    const [data,setData] = useState([])
    const [isLoading,setIsLoading] = useState(true)
    const [error,setError] = useState('')
    const [text,setText] = useState('')

    useEffect(()=>{
        const API_KEY = '39412747-002c7c6c0f0841c4d6c9583e9'
        const url = `https://pixabay.com/api/?key=${API_KEY}&q=${text}&image_type=photo`

        axios.get(url)
        .then(res => {
            setData(res.data.hits)
            setIsLoading(false)
            setError([])
        })
        .catch(error=>{
            setData([])
            setIsLoading(true)
            setError('그림을 가져올 수 없습니다.')
        })
    },[text])

    const searchText = (txt) => {
        setText(txt)
    }

    return (
        <>
            <GlobalStyle/>
            <Container>
                <GallerySearch searchText={searchText}/>
                {
                    isLoading && data.length === 0 && (<h1>No Image Found</h1>)
                }
                {
                    data && !isLoading && <GalleryList data={data}/>
                }
                <p>
                    {error ? error : null}
                </p>
            </Container>
        </>
    );
};

export default Gallery;