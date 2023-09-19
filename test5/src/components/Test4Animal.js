import React from 'react';

const Test4Animal = ({ani,onAni}) => {
    return (
        <div>
            <label>동물: </label>
            <input type='text' value={ani} onChange={onAni}/>
            <span style={{marginLeft:20}}>{ani}</span>
        </div>
    );
};

export default Test4Animal;