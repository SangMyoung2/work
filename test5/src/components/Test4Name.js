import React from 'react';

const Test4Name = ({name,onName}) => {
    return (
        <div>
            <label>이름: </label>
            <input type='text' value={name} onChange={onName}/>
            <span style={{marginLeft:20}}>{name}</span>
        </div>
    );
};

export default Test4Name;