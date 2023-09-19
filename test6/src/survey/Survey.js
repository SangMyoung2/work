import React,{useState} from 'react';
import './style.css'
import SurveyStep1 from './SurveyStep1';
import SurveyStep2 from './SurveyStep2';
import SurveyStep3 from './SurveyStep3';
import SurveyStep4 from './SurveyStep4';

const Survey = () => {

    const [step,setStep] = useState(1)

    const [form,setForm] = useState({
        name:'',age:'',addr:'',tel:'',
        job:'',email:'',gender:'',hobby:''
    })

    const {name,age,addr,tel,job,email,gender,hobby} = form

    const onText = (evt) => {
        // alert('test')

        const {value,name} = evt.target
        setForm({
            ...form,
            [name]:value
        })
    }

    const onNext = () => {
        setStep(state => state+1)
    }

    const onPrev = () => {
        setStep(state => state-1)
    }

    return (
        <div className='wrap'>
            {step===1 && <SurveyStep1 name={name} age={age} addr={addr} tel={tel} onText={onText} onNext={onNext}/>}
            {step===2 && <SurveyStep2 {...form} onNext={onNext} onPrev={onPrev} onText={onText}/>}
            {step===3 &&  <SurveyStep3 form={form} onNext={onNext} onPrev={onPrev}/>}
            {step===4 &&  <SurveyStep4 name={name}/>}
        </div>
    )
};

export default Survey;