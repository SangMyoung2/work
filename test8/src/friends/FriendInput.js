import React,{useState,useRef} from 'react';


const FriendInput = ({onAdd}) => {

    const nameRef = useRef()

    const [form,setForm] = useState({
        name:'', age:'', image:''
    })
    
    const {name,age,image} = form
    
    const changInput = (evt) => {
        const {value,name} = evt.target
        setForm({
            ...form,
            [name]:value
        })
    }

    const onInsert = () => {
        if(!name||!age||!image) return

        onAdd(form)

        setForm({
            name:'',age:'',image:''
        })
        nameRef.current.focus()
    }


    return (
        <div className='formAdd'>
            <p>
                <label>이름</label>
                <input type='text' value={name} name='name' onChange={changInput} ref={nameRef}/>
            </p>
            <p>
                <label>나이</label>
                <input type='text' value={age} name='age' onChange={changInput}/>
            </p>
            <p>
                <label>사진</label>
                <input type='text' value={image} name='image' onChange={changInput}/>
            </p>
            <p>
                <button onClick={onInsert}>추가</button>
            </p>
            
        </div>
    );
};

export default FriendInput;