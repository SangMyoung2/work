import React,{useState} from 'react';

const Test3 = () => {

    const [bgColor,setBgColor] = useState('pink')
    const [visible,setVisible] = useState(false)

    //toggle 버튼 만들기
    const onColor = () => {
        //setBgColor('tomato') 이렇게 만들면 한번만 색상이 변경된다.
        setBgColor(bgColor==='pink'?'tomato':'pink')
    }

    const onShow = () => {
        setVisible(true)
    }
    
    const onHide = () => {
        setVisible(false)
    }

    const onToggle = () => {
        //true->false, false->true
        setVisible(!visible) //!visible에 true가 있으면 false로 반대면 true를 반환
    }

    return (
        <div>
            <p>클릭하면 배경색이 pink/tomato</p>

            <button onClick={onShow}>보이기</button>
            <button onClick={onHide}>숨기기</button>

            <button onClick={onToggle}>{visible?'숨기기':'보이기'}</button>

            {
            visible && //&& true일때 실행 아니면 false
            <h2 style={{width:400,padding:50,border:'1px solid #000',background:bgColor,cursor:'pointer'}} onClick={onColor}>
            배경색 : {bgColor}
            </h2>
            
            }

        </div>
    );
};

export default Test3;