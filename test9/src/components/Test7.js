import React,{useEffect,useState,useRef,useLayoutEffect} from 'react';

const dataList = [
    {id:1,name:'chk1',text:'이용약관(필수)',isChecked:false},
    {id:2,name:'chk2',text:'개인정보보호 동의(필수)',isChecked:false},
    {id:3,name:'chk3',text:'쿠폰,이벤트,프로모션 수신동의(선택)',isChecked:false}
]

//체크박스 사용법
function Test7(){

    //방법1
    // const [data,setData] = useState(dataList)

    //방법2
    //인터넷이 중간에 끊기면 겉모습은 보이지만 데이터가 안보인다.
    const [data,setData] = useState([])
    useEffect(()=>{
        setData(dataList)
    },[dataList])

    const changCheck = (evt) => {

        const {name,checked} = evt.target

        if(name==='all'){ 

            const tempChk = data.map(item=>{
                return {
                    ...item,
                    isChecked:checked
                }
            })
            setData(tempChk)

        }else{//chk 1,2,3

            const tempChk = data.map(item=>
                item.name===name ? {
                    ...item,
                    isChecked:checked
                }:item)
            setData(tempChk)
        }
    }

    return(
        <div style={{margin:30}}>
            <h2>동의설정</h2>
            {/* {data.filter(item=>item.isChecked!==true).length} */}
            <p>
                <input type='checkbox' name='all' onChange={changCheck} checked={data.filter(item=>item.isChecked!==true).length<1}/>
                전체동의
            </p>
            <hr/>
            {
                data.map(item=><p key={item.id}>
                    <input type='checkbox' checked={item.isChecked} name={item.name} onChange={changCheck}/>
                    {item.text}
                </p>)
            }

        </div>
    );
}

export default Test7;