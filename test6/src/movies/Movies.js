import React,{useState} from 'react';
import './style.css'
import MovieList from './MovieList';
import movieData from '../assets/api/movie'

const Movies = () => {

    const [data,setData] = useState(movieData)

    const onDel = (no) => {
        setData(data.filter(item=>item.no!==no))
    }

    return (
        <div className='wrap'>
            <h2>최신 개봉작</h2>
            <MovieList data={data} onDel={onDel}/>
        </div>
    );
};

export default Movies;