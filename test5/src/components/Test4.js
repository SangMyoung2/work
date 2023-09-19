import React,{useState} from 'react';
import Test4Name from './Test4Name';
import Test4Animal from './Test4Animal';
import Test4Display from './Test4Display';

const Test4 = () => {

    const [name,setName] = useState('')
    const [ani,setAnimal] = useState('')

    const onName = (evt) => {
        const {value} = evt.target
        setName(value)
    }

    const onAni = (evt) => {
        const {value} = evt.target
        setAnimal(value)
    }

    return (
        <div>
            <Test4Name name={name} onName={onName}/>
            <hr/>
            <Test4Animal ani={ani} onAni={onAni}/>
            <hr/>
            <Test4Display name={name} ani={ani}/>
        </div>
    );
};

export default Test4;