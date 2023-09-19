import React from 'react';

const Frienditem = ({item}) => {

    const {name,age,image} = item

    return (
        
             <li >
                <p>
                    <img src={image} alt={name}/>
                </p>
                <div>
                    <strong>이름: {name}</strong>
                    <strong>나이: {age}</strong>
                </div>
            </li>
        
    );
};

export default Frienditem;