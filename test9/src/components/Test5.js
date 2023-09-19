import React, { useState } from 'react';
import Test5Sub from './Test5Sub';

const Test5 = () => {

    const [show,setShow] = useState(false)

    return (
        <div>
            <button onClick={()=>setShow(!show)}>시간과 날짜</button>        
            {
                show && <Test5Sub/>
            }
        </div>
    );
};

export default Test5;