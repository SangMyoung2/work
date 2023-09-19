const multer = require('multer') //파일 업로드
const fs = require('fs') //파일관리
const path = require('path')
const mongoose = require('mongoose')
const Image = mongoose.model('imagedbs')

try{
    fs.readdirSync('uploads')
}catch(error){
    fs.mkdirSync('uploads')
}

const fileUploadRoutes = (app,router) => {

    var storage = multer.diskStorage({

        destination:(req,fileUpload,callback) => {
            callback(null,'uploads')
        },
        filename:(req,fileUpload,callback) => {
            callback(null,Date.now().toString() + path.extname(fileUpload.originalname))
        }
    })

    var uploads = multer({
        storage:storage,
        limits:{
            files:10,
            fileSize:1024*1024*1024
        }
    })

    //라우터 추가
    router.route('/api/fileUpload').post(uploads.array('upload',1),(req,res) => { //파일업로드

        const files = req.files
        let originalname = ''
        let saveName = ''

        //db에 데이터 넣기
        if(Array.isArray(files)){
            for(let i=0;i<files.length;i++){
                originalname = files[i].originalname
                saveName = files[i].filename

                Image.create({
                    originalFileName:originalname, //originalFileName컬럼이름  originalname 변수이름
                    saveFileName:saveName,
                    path:'http://localhost:8080/' + saveName
                })
            }
        }

        return res.status(200).send()

    })

    //라우터 등록
    app.use('/',router)
}

module.exports = fileUploadRoutes