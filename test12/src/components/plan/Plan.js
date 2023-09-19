import React, { useState,useRef, useEffect } from 'react';
import GlobalStyle from '../styled/Global'
import PlanAdd from './PlanAdd';
import PlanList from './PlanList';
// import dataList from './data' //local에서 가져오는 데이터는 필요없다.

const Plan = () => {

    const[plans,setPlans] = useState([])

    useEffect(()=>{
        fetch('http://localhost:4000/plans') //가상서버에서 데이터를 읽어온것
        .then(res=>res.json())
        .then(res=>setPlans(res))
    },[])

    // const no = useRef(dataList.length + 1) //섭
    
    // const [plans,setPlans] = useState(dataList) //섭

    const onDel = (id) => {
        
        //db가 지워진것
        fetch(`http://localhost:4000/plans/${id}`,{
            method:'delete'
        })

        //우리 눈에 보이는게 삭제된것
        setPlans(plans.filter(plan=>plan.id!==id))
    }

    const fetchPlan = async(id) => {
        const res = await fetch(`http://localhost:4000/plans/${id}`)
        const data = await res.json()

        return data
    }

    const onToggle = async(id) => { //async를 붙여야함

        const togglePlan = await fetchPlan(id)
        const updatePlan = {//수정
            ...togglePlan,
            done:!togglePlan.done
        } //,찍으면 수정 []추가

        //수정한 데이터 다시 입력
        const res = await fetch(`http://localhost:4000/plans/${id}`,{
            method:'put', //기존 데이터 수정은 put
            headers:{
                'Content-type':'application/json' //이걸꼭 써줘야 json으로 인식함 아니면 html로 인식
            },
            body:JSON.stringify(updatePlan)
        })

        getToggle()
    }

    const getToggle = () => {
        const config = {method:'get'} //가져오는건 get
        fetch('http://localhost:4000/plans',config)
        .then(res=>res.json())
        .then(res=>setPlans(res))
    }

    const onAdd = (form) => {

        fetch('http://localhost:4000/plans',{
            method:'post',
            headers:{
                'Content-type':'application/json' //이걸꼭 써줘야 json으로 인식함 아니면 html로 인식
            },
            body:JSON.stringify(form)
        })
        .then(res=>res.json)
        .then(res=>setPlans([...plans,res]))

        // form.id = no.current++ //섭
        // setPlans([
        //     ...plans,
        //     form
        // ])
    }

    return (
        <div>
            <GlobalStyle/>
            <PlanAdd onAdd={onAdd}/>
            <PlanList plans={plans} onDel={onDel} onToggle={onToggle}/>
        </div>
    );
};

export default Plan;

/*
method: GET, POST, PUT, DELETE
headers: {
'Content-type': 'application/json'
},

body: JSON.stringify( )


안해주면 브라우저가 json인데도 html로 인식
-------------

GET: 조회
POST: 추가
DELETE: 삭제
PUT: 수정
?
추가시 옵션(post)
headers에는 메타정보
body에는 보내고 싶은 내용 
status는 HTTP response Code를 담고 있음
일반적으로 성공적이었다면 200이 떨어지게 됨
*/