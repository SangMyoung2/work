import axios from 'axios'

//조회
const getUser = async () => {
    const res = await axios.get('/api/taxi')
    return res.data
}

//입력
const addUser = async (user,image) => {
    axios.post('/api/taxi',{
        name:user.name,
        job:user.job
    })
    .then(res=>{
        console.log(res)
    })
    .catch(error=> {
        console.log(error)
    })

    const formData = new FormData()
    formData.append('upload',image)

    axios.post('/api/fileUpload',formData)
    .then(res=>{
        console.log(res)
    })
    .catch(error=> {
        console.log(error)
    })
}

//수정
const updateUser = async (user) => {
    axios.put('/api/taxi',{
        id:user._id, //자동으로 id를 만들기 때문에 _로 작성
        name:user.name,
        job:user.job
    })
    .then(res=>{
        console.log(res)
    })
    .catch(error=> {
        console.log(error)
    })
}

//삭제
const deleteUser = async (id) => {
    axios.delete('/api/taxi',{
        data:{id:id}
    })
    .then(res=>{
        console.log(res)
    })
    .catch(error=> {
        console.log(error)
    })
}

export default {
    getUser:getUser,
    addUser:addUser,
    updateUser:updateUser,
    deleteUser:deleteUser
}