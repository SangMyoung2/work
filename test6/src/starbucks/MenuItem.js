import React from 'react';

const MenuItem = ({item,onMenu}) => {

    const {name} = item

    //첫번째 문자를 대문자로 변경
    const str = name.charAt(0).toUpperCase()

    //뒤 나머지 글자
    const str1 = name.slice(1)

    //2개글자 합치기
    const menu = str+str1

    return (
        <button onClick={()=>onMenu(name)}>
            {menu}
        </button>
    );
};

export default MenuItem;