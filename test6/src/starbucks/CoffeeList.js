import React from 'react';
import CoffeeItem from './CoffeeItem';

const CoffeeList = ({coffee}) => {
    return (
        <ul className='list'>
            {
                coffee.map(item=><CoffeeItem key={item.id} item={item}/>)
            }
        </ul>
    );
};

export default CoffeeList;