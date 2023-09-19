import React from 'react';
import { PropTypes } from 'prop-types';

const Test6Sub = ({title,name,age,addr,tel,color,done}) => {
    return (
        <div style={{border:`1px solid ${color}`,padding:30}}>
            {/* css안에 변수값을 작성할때는 ``백틱으로 묶어줘야한다. */}
            <ul>   
                <li>이름: {name}</li>
                <li>나이: {age}</li>
                <li>주소: {addr}</li>
                <li>전화: {tel}</li>
                <li>컬러: {color}</li>
                <li>로그인: {done ? '로그인' : '로그아웃'}</li>

            </ul>
        </div>
    );
};

Test6Sub.propTypes = { //자료형 정하기
    name:PropTypes.string.isRequired,
    age:PropTypes.number.isRequired,
    addr:PropTypes.string,
    tel:PropTypes.string,
    color:PropTypes.string,
    done:PropTypes.bool
}

Test6Sub.defaultProps = {
    name:'이름없음',
    age:30,
    addr:'대한민국',
    tel:'010-0000-0000',
    color:'yello',
    done:true
}

export default Test6Sub;