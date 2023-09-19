const express = require('express')
const http = require('http')
const mongoose = require('mongoose')
const path = require('path')
const request = require('request')
const oracledb = require('oracledb')
const jwt = require('jsonwebtoken')
const tokenKey = "!@#!@#!@#!@#!@#!@#!@#!@#!@#!@#!@#!@#" //임의 키
const serveStatic = require('serve-static')
const qrCode = require('qrcode')

oracledb.autoCommit = true

var connection

oracledb.getConnection({
    user:'suzi',
    password:'a123',
    connectString:'localhost:1521/xe'
},function(err,conn){
    if(err){
        console.error(err.message)
        return
    }
    connection = conn
    console.log('Oracle DB 연결 성공!!')
})

const app = express()

app.set('views',__dirname + '/views')
app.set('view engine','ejs')
console.log('뷰엔진이 ejs로 설정되었습니다.')

app.set('port',8080)
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(serveStatic(path.join(__dirname,'public')))

var authCode = ""

app.get('/',function(req,res){

    var context = {'title':'금융결제원 API'}

    authCode = req.query.code

    req.app.render('index.ejs',context,function(err,html){
        res.end(html)
    })
    
})

app.get('/signup',function(req,res){

    var context = {'title':'인증'}

    req.app.render('signup.ejs',context,function(err,html){
        res.end(html)
    })
})



app.get('/token',function(req,res){

    var option = {
        method:"post",
        url:"https://testapi.openbanking.or.kr/oauth/2.0/token",
        header:"",
        form:{ //post방식:form , get방식 : qs
            code:authCode,
            client_id:'fff1b36b-ee21-4162-a96c-55c4cc1a8539',
            client_secret:'e5c724dc-0121-461f-8022-ef3b03a84c86',
            redirect_uri:'http://localhost:8080/',
            grant_type:'authorization_code'
        }
    }
    
    request(option,function(err,resp,body){
        
        console.log(body)
        
        var resultJSON = JSON.parse(body)
        res.render('tokenResult',{data:resultJSON})
    })
    

})

app.post('/addUser',function(req,res){

    var name = req.body.name
    var email = req.body.email
    var password = req.body.password
    var accessToken = req.body.accessToken
    var refreshToken = req.body.refreshToken
    var userSeqNo = req.body.userSeqNo

    console.log(name)

    sql = "insert into fintech values(:name,:email,:password,:accessToken,:refreshToken,:userSeqNo,:fintechUseNum)"

    connection.execute(sql,[name,email,password,accessToken,refreshToken,userSeqNo,''],function(err){
        if(err) throw err;
        res.json('가입완료')
    })
})

app.get('/login',function(req,res){
    
    var context = {'title':'로그인'}

    req.app.render('login.ejs',context,function(err,html){
        res.end(html)
    })
})

app.post('/authLogin',function(req,res){

    var email = req.body.email
    var password = req.body.password

    sql = "select * from fintech where email=:email"

    connection.execute(sql,[email],function(err,result){

        if(err) throw err;

        console.log(result.rows.length + '개')

        if(result.rows.length==0){
            res.json('이메일을 확인하세요')
        }else{
            console.log('select한 데이터' + result.rows)
            console.log('컬럼명: ' + result.metaData)
            console.log('password' + result.rows[0][2])

            var dbPassword = result.rows[0][2]

            if(dbPassword==password){
                
                //로그인 성공시 JWT token발급 받음
                //jwt.sign(payload,secretKey,option,callback)

                jwt.sign(
                    {
                        //사용자가 원하는 필요한 정보 입력
                        name:result.rows[0][0], //이름
                        email:result.rows[0][1] //이메일
                    },
                    tokenKey,
                    {
                        expiresIn:'1d', //토큰의 유효기간
                        issuer:'fintech.admin', //토큰 사용자
                        subject:'user.login.info' //토큰 제목
                    },
                    function(err,token){
                        console.log('로그인 성공!')
                        console.log('내가 발급한 토큰: ', token)
                        res.json(token)
                    }
                )
            }else if(dbPassword!=password){
                res.json('패스워드를 확인하세요')
            }
        }

    })
})

app.get('/list',function(req,res){

    var context = {'title':'사용자 계좌 정보'}

    req.app.render('list.ejs',context,function(err,html){
        res.end(html)
    })
})

app.post('/listInfo',function(req,res){

    var email = req.body.email

    sql = "select * from fintech where email=:email"

    connection.execute(sql,[email],function(err,result){

        if(err) throw err
        
        if(result.rows.length>0){

            var dbEmail = result.rows[0][1]
            var accessToken = result.rows[0][3]
            var userSeqNo = result.rows[0][5]
        }

        if(dbEmail!==email){
            console.log('이메일을 정확히 입력하세요')
            return
        }else{
            var option = {

                method:'GET',
                url:'https://testapi.openbanking.or.kr/v2.0/user/me',
                headers:{
                    Authorization : 'Bearer ' + accessToken
                },
                qs:{
                    user_seq_no : Number(userSeqNo)
                }
            }
            request(option,function(err,resp,body){
                console.log(body)

                var resultJSON = JSON.parse(body)

                //잔액조회를 위해 fintech_use_num을 DB에 저장
                sql = "update fintech set fintechUseNum = :fintechUseNum where email=:email"

                var fintechUseNum = resultJSON.res_list[0].fintech_use_num

                connection.execute(sql,[fintechUseNum,email],function(err){
                    if(err) throw err;
                    console.log('핀테크 이용번호 DB에 저장함')
                })

                res.json(resultJSON)
            })
        }
    })
})

app.get('/logout',function(req,res){

    var context = {'title':'로그아웃'}

    req.app.render('logout.ejs',context,function(err,html){
        res.end(html)
    })
})

app.get('/balance',function(req,res){

    var context = {'title':'계좌 잔액정보'}

    req.app.render('balance.ejs',context,function(err,html){
        res.end(html)
    })

})

app.post('/balanceInfo',function(req,res){

    var email = req.body.email

    //은행거래 고유번호 생성
    //이용기관코드(10자리) + 생성주체구분코드(U) + 이용기관부여번호(9자리 난수)
    var cntNum = Math.floor(Math.random() * 1000000000) + 1
    var bankTranId = 'M202302320U' + cntNum

    sql = "select * from fintech where email=:email"

    connection.execute(sql,[email],function(err,result){
        
        if(err) throw err

        if(result.rows.length>0){

            var dbEmail = result.rows[0][1]
            var accessToken = result.rows[0][3]
            var fintechUseNum = result.rows[0][6]
        }

        if(dbEmail!=email){
            console.log('이메일을 정확히 입력하세요')
            return
        }else{

            var option = {
                method:'GET',
                url:'https://testapi.openbanking.or.kr/v2.0/account/balance/fin_num',
                headers:{
                    Authorization : 'Bearer ' + accessToken
                },
                qs:{
                    bank_tran_id:bankTranId,
                    fintech_use_num:fintechUseNum,
                    tran_dtime:getCurrentDate()
                }
            }

            request(option,function(err,resp,body){
                console.log(body)
                var resultJSON = JSON.parse(body)
                res.json(resultJSON)
            })
        }
    })
})


function getCurrentDate(){ //tran_dtime 함수

    var date = new Date();
    var year = date.getFullYear().toString();

    var month = date.getMonth() + 1;
    month = month < 10 ? '0' + month.toString() : month.toString();

    var day = date.getDate();
    day = day < 10 ? '0' + day.toString() : day.toString();

    var hour = date.getHours();
    hour = hour < 10 ? '0' + hour.toString() : hour.toString();

    var minites = date.getMinutes();
    minites = minites < 10 ? '0' + minites.toString() : minites.toString();

    var seconds = date.getSeconds();
    seconds = seconds < 10 ? '0' + seconds.toString() : seconds.toString();

    return year + month + day + hour + minites + seconds;
}

app.get('/transaction',function(req,res){

    var context = {'title':'거래내역 조회'}

    req.app.render('transaction.ejs',context,function(err,html){
        res.end(html)
    })
})

app.post('/transactionList',function(req,res){

    var email = req.body.email
    var fromDate = req.body.fromDate.replace(/-/g,"") //-를 찾아서 null로 바꿔라
    var toDate = req.body.toDate.replace(/-/g,"") //-를 찾아서 null로 바꿔라
    var sortOrder = req.body.sortOrder
    var inquiryType = req.body.inquiryType


    console.log(fromDate + "--------------------------")

    //은행거래 고유번호 생성
    //이용기관코드(10자리) + 생성주체구분코드(U) + 이용기관부여번호(9자리 난수)
    var cntNum = Math.floor(Math.random() * 1000000000) + 1
    var bankTranId = 'M202302320U' + cntNum

    sql = "select * from fintech where email=:email"

    connection.execute(sql,[email],function(err,result){
        
        if(err) throw err

        if(result.rows.length>0){

            var dbEmail = result.rows[0][1]
            var accessToken = result.rows[0][3]
            var fintechUseNum = result.rows[0][6]
        }

        if(dbEmail!=email){
            console.log('이메일을 정확히 입력하세요')
            return
        }else{

            var option = {
                method:'GET',
                url:'https://testapi.openbanking.or.kr/v2.0/account/transaction_list/fin_num',
                headers:{
                    Authorization : 'Bearer ' + accessToken
                },
                qs:{
                    bank_tran_id:bankTranId,
                    fintech_use_num:fintechUseNum,
                    inquiry_type:inquiryType,
                    inquiry_base:'D',
                    from_date:fromDate,
                    to_date:toDate,
                    sort_order:sortOrder,
                    tran_dtime:getCurrentDate()
                }
            }

            request(option,function(err,resp,body){
                console.log(body)
                var resultJSON = JSON.parse(body)
                res.json(resultJSON)
            })
        }
    })
})

app.get('/qrCode',function(req,res){

    var email = 'sew1007@naver.com'

    sql = "select * from fintech where email=:email"

    connection.execute(sql,[email],function(err,result){

        if(err) throw err
        if(result.rows.length>0){
            var dbEmail = result.rows[0][1]
            var fintechUseNum = result.rows[0][6]
        }

        if(dbEmail!==email){
            console.log('이메일을 정확히 입력')
            return
        }else{
            var context = {'title':'QR코드','data':fintechUseNum}

            req.app.render('qrcode.ejs',context,function(err,html){
                res.end(html)
            })
        }

    })

})

app.get('/qrCode1',function(req,res){

    var email = 'sew1007@naver.com'

    sql = "select * from fintech where email=:email"

    connection.execute(sql,[email],function(err,result){

        if(err) throw err
        if(result.rows.length>0){
            var dbEmail = result.rows[0][1]
            var accessToken = result.rows[0][3]
            var userSeqNo = result.rows[0][5]
        }

        if(dbEmail!==email){
            console.log('이메일을 정확히 입력')
            return
        }else{
            
            var option = {
                method:'GET',
                url:'https://testapi.openbanking.or.kr/v2.0/user/me',
                headers:{
                    Authorization : 'Bearer ' + accessToken
                },
                qs:{
                    user_seq_no:Number(userSeqNo)
                }
            }

            request(option,function(err,resp,body){

                var resultJSON = JSON.parse(body)

                var  bank_name = resultJSON.res_list[0].bank_name

                qrCode.toDataURL(bank_name,(err,url)=>{
                    const data = url.replace(/.*,/,'')
                    console.log(data)
                    const img = Buffer.from(data,'base64')
                    res.writeHead(200,{'Content-Type':'image/png'})
                    res.end(img)
                })
            })
        }
    })
})

http.createServer(app).listen(app.get('port'),()=>{
    console.log('서버를 시작했습니다 : ' + app.get('port'))
})
