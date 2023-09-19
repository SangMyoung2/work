import React,{useState,Fragment} from 'react';

const Test6 = () => {

    const [check,setCheck] = useState(false)
    const [check1,setCheck1] = useState(false)
    

    const changeCheck = (evt) => {
        const {checked} = evt.target;
        setCheck(checked)
    }

    const onToggle = (evt) => {
        const {checked} = evt.target
        setCheck1(checked)
    }

    return (
        <Fragment>
            <div style={{color:check ? 'red':'#000'}}>
                <input type='checkbox' checked={check} onChange={changeCheck}/>
                체크박스를 클릭하세요.
            </div>

            <p>
                <input type='checkbox' checked={check1} onChange={onToggle}/>
                {check1 ? '숨기기' : '보이기'}
            </p>
            {
                check1 &&
            <div style={{width:400,height:100,background:'tomato',margin:30}}></div>
            }
        </Fragment>
    );
};

export default Test6;