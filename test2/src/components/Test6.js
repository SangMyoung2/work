import React from 'react';
import Test6Sub from './Test6Sub';

const Test6 = () => {
    return (
        <div>
            <Test6Sub 
            title='배수지 신상명세서'
            name='배수지'
            age='이십' //number로 타입이 지정되었기 때문에 html에서 보이긴 하지만 내부적으로 에러난다.
            addr='서울'
            tel='010-1234-56787'
            color='tomato'
            done={true}
            />
            <br/>        
            <Test6Sub 
            title='유인나 신상명세서'
            addr='부산'
            color='blue'
            done={false}
            />
        </div>
    );
};

export default Test6;