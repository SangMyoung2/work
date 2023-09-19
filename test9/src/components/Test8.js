import React,{useEffect,useState,useRef,useLayoutEffect} from 'react';

const dataList = [
    {id:1, name:'배수지'},
    {id:2, name:'abc'},
    {id:3, name:'aBC'},
    {id:4, name:'Dog'},
    {id:5, name:'CAT'},
    {id:6, name:'cat'},
    {id:7, name:'유인나'},
    {id:8, name:'유이'},
    {id:9, name:'정인선'},
    {id:10, name:'정인아'}
]

function Test8(){

    const [data,setData] = useState(dataList)
    const [text,setText] = useState('')

    const changInput = (evt) => {
        const {value} = evt.target
        setText(value)
    }

    const search1 = () => {
        // setData(data.filter(item=>item.name.indexOf(text)!==-1)) //db에서 읽어온 데이터에서 검색하면 안되고 db자체에서 검색해야한다.

        //DB자체 검색
        // setData(dataList.filter(item=>item.name.indexOf(text)!==-1))
        
        
        //대소문자 안가리는 검색 방법1
        //모든 영어를 소문자로 변환해서 검색
        // setData(dataList.filter(item=>item.name.toLocaleLowerCase().includes(text.toLocaleLowerCase())!==-1))

        //대소문자 안가리는 검색 같은코딩 방법2
        // setData(dataList.filter(item=>item.name.toLocaleLowerCase().indexOf(text.toLocaleLowerCase())!==-1))

        //대소문자 안가리는 방법3
        setData(dataList.filter(item=>{
            const result = new RegExp(text,'ig')
            return item.name.match(result)
        }))
    }

    useEffect(()=>{
            setData(dataList.filter(item=>{
                const result = new RegExp(text,'ig')
                return item.name.match(result)
            }))
        },[text])

    return(

        <div>
            <p>
                <input type='text' placeholder='검색어를 입력하세요' value={text} onChange={changInput}/>
                <button onClick={search1}>검색</button>
                <hr/>
                <ul>
                    {
                        data.map(item=><li key={item.id}>
                            {item.id} / {item.name}
                        </li>)
                    }
                </ul>
            </p>

        </div>
    );
}

export default Test8;