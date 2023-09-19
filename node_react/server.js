const express = require('express')
const http = require('http')
const mongoose = require('mongoose')
const path = require('path')

//스키마 호출
require('./model/taxiSchema')

//익스프레스 객체 생성
const app = express()

//라우팅 함수
const router = express.Router()

//기본 포트를 app객체의 속성으로 설정
app.set('port',process.env.PORT||8080)

//파일 업로드 폴더 지정
app.use(express.static('uploads'))

mongoose.connect('mongodb://127.0.0.1:27017/shopping')

console.log('데이터베이스 연결함')

//Json 형태 데이터
app.use(express.json())

//라우터등록
require('./routes/taxiRoutes')(app)
//파일업로드 라우터 등록
require('./routes/imageRoutes')(app,router)

//Express 서버시작
http.createServer(app).listen(app.get('port'),()=>{
    console.log('서버를 시작했습니다. prot : ' + app.get('port'))
})

app.use(express.static(path.join(__dirname,'taxi/build')))

app.get('/',(req,resp) => {
    resp.sendFile(path.join(__dirname,'taxi/build/index.html'))
})