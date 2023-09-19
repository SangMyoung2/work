const mongoose = require('mongoose')

//스키마 정의
const taxiSchema = mongoose.Schema({
    name:{type:String},
    job:{type:String}
})

console.log('스키마 정의함')

//모델 정의
mongoose.model('taxidbs',taxiSchema)

console.log('모델정의함')

//파일 업로드 정의
const imageSchema = mongoose.Schema({
    originalFileName:{type:String},
    saveFileName:{type:String},
    path:{type:String}
})

console.log('이미지 스키마 정의')

mongoose.model('imagedbs',imageSchema) //테이블생성

console.log('이미지 모델 정의')