import React,{useEffect,useState,useRef,useLayoutEffect} from 'react';

function AddUser({onAdd}){

    const nameRef = useRef()
    
    const [user,setUser] = useState({
        name:'',job:''
    })
    
    const {name,job} = user
    const [image,setImage] = useState()
    
    //이미지 추가
    const changeImage = (evt) => {
        setImage(evt.target.files[0])
    }


    const changeInput = (evt) => {
        const {value,name} = evt.target
        setUser({
            ...user,
            [name]:value
        })
    }

    const onSubmit = (evt) => {
        evt.preventDefault();

        if(!name||!job) return

        onAdd(user,image)

        setUser({
            name:'',job:''
        })

        nameRef.current.focus()
    }

    return(
        <form onSubmit={onSubmit}>
            <h2>고객 추가</h2>
            <p>
                <label>이름</label>
                <input type='text' name='name' value={name} onChange={changeInput} ref={nameRef}/>
            </p>
            <p>
                <label>직업</label>
                <input type='text' name='job' value={job} onChange={changeInput}/>
            </p>
            <p>
                <label>사진</label>
                <input type='file' onChange={changeImage}/>
            </p>
            <p>
                <button>추가</button>
            </p>
        </form>
    );
}

export default AddUser;