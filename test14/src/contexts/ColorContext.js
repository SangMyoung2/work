import React,{createContext,useState} from 'react';

//외부 저장소
export const ColorContext = createContext()

const ColorProvider = (props) => {

    const [color,setColor] = useState('blue')

    //이벤트 함수
    const onTomato = () => {setColor('tomato')}
    const onPink = () => {setColor('pink')}
    const onSkyblue = () => {setColor('skyblue')}
    const onYellow = () => {setColor('yellow')}

    return (
        <ColorContext.Provider value={{color,onTomato,onPink,onSkyblue,onYellow}}>
            {props.children}
        </ColorContext.Provider>
    );
};

export default ColorProvider;