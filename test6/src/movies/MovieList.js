import React from 'react';
import MovieItems from './MovieItem';

const MovieList = ({data, onDel}) => {
    return (
        <div className='movie'>
            {
                data.map(item=> <MovieItems key={item.no} item={item} onDel={onDel}/>)
            }
        </div>
    );
};

export default MovieList;