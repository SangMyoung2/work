import React, { Fragment } from 'react';

const Test2 = () => {

    const done1 = true
    const done2 = false
    const done3 = undefined

    return (
        <Fragment>
            <p>
                {
                    done1===true ? <button>로그인</button>:<button>로그아웃</button>
                }
            </p> 
            <p>
                {done1&&<button>done1은 true이다.</button>}
            </p>
            <p>
                {done2===false && <button>done2는 false이다.</button>}
            </p>
            <p>
                {done2 || <button>done2는 false이다.</button>}
            </p>
            <p>
                {done3 || <button>done3는 undefined이다.</button>}
            </p>
        </Fragment>
    );
};

export default Test2;