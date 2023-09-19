import React from 'react';
import Frienditem from './Frienditem';

const FriendList = ({data}) => {
    return (
        
            <ul>
                {
                    data.map(item => <Frienditem key={item.id} item={item}/>)
                }
            </ul>
        
    );
};

export default FriendList;