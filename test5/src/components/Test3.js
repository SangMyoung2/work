import React,{useState} from 'react';

const Name = () => {

    //Name에서만 사용하는 setter
    const [name,setName] = useState('')

    const onChange = (evt) => {
        const {value} = evt.target
        setName(value)
    }

    return(
        <div>
            <h2>Name 컴포넌트</h2>
            <p>
                <label>이름: </label>
                <input type='text' value={name} onChange={onChange}/>
                <span style={{marginLeft:15}}>{name}</span>
            </p>
        </div>
    )
}

const Animal = ({ani, changeInput}) => { //부모의 changeInput 함수를 받는다.
    return(
        <div>
            <h2>Animal 컴포넌트</h2>
            <p>
                <label>동물: </label>
                <input type='text' value={ani} onChange={changeInput}/>
                <span style={{marginLeft:15}}>{ani}</span>
            </p>
        </div>
    )
}

const Display = ({ani}) => {
    return(
        <div>
            <h2>Display 컴포넌트</h2>
            <h2>내가 좋아하는 동물은 {ani}입니다.</h2>
        </div>
    )
}

const Test3 = () => {

    //자식에게 변수값뿐만 아니라 함수도 내려 보낼수있다.
    const [ani,setAni] = useState('')
    
    const changeInput1 = (evt) => {
        const {value} = evt.target
        setAni(value)
    }

    return (
        <div>
            <Name/>
            <hr/>
            <Animal ani={ani} changeInput={changeInput1}/>
            {/* 함수를 내보냄 */}
            <hr/>
            <Display ani={ani} changeInput={changeInput1}/>

        </div>
    );
};

export default Test3;