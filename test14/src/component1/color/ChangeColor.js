import React,{useContext} from 'react';
import { ChangeColorContext } from '../../contexts/ChangeColorContext';

const ChangeColor = () => {

    const {color,onColor} = useContext(ChangeColorContext)

    return (
        <div>
            <h1 style={{color:color}}>Color: {color}</h1>
            <p>
                <button onClick={()=>onColor('tomato')}>Tomato</button>
                <button onClick={()=>onColor('pink')}>Pink</button>
                <button onClick={()=>onColor('skyblue')}>Skyblue</button>
                <button onClick={()=>onColor('yellow')}>Yellow</button>
            </p>
        </div>
    );
};

export default ChangeColor;