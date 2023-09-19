import React, { useState,useRef } from 'react';
import GlobalStyle from '../styled/Global'
import PlanAdd from './PlanAdd';
import PlanList from './PlanList';
import dataList from './data'

const Plan = () => {

    const no = useRef(dataList.length + 1)
    
    const [plans,setPlans] = useState(dataList)

    const onDel = (id) => {
        setPlans(plans.filter(plan=>plan.id!==id))
    }

    const onToggle = (id) => {
        setPlans(plans.map(plan=>plan.id===id ? {
            ...plan,
            done : !plan.done
        }:plan))
    }

    const onAdd = (form) => {

        form.id = no.current++

        setPlans([
            ...plans,
            form
        ])
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