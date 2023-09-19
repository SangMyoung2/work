import React,{useState} from 'react';
import './Test7.css'
import movie from '../assets/api/movie.js'

const Test7 = () => {

    const [data, setData] = useState(movie)

    return (
        <div className='gallery'>
            <h2>이달의 영화</h2>
            <div className='con-box'>
                {
                    data.map((item,index)=>
                <article>
                    <img src={item.poster} alt={item.title}/>
                    <h3>{item.title}</h3>
                    <p>출연진: {item.actor}</p>
                    <p>감독: {item.director}</p>
                    <p>개봉일: {item.date}</p>
                </article>)
                }
            </div>
        </div>
    );
};

export default Test7;