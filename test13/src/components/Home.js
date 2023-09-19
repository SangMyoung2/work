import React from 'react';

const Home = () => {
    return (
        <div>
            <h1>Home Page</h1>
        </div>
    );
};

export default Home;

/*
SPA(Single Page Application)
유저가 처음 접속했을때 구체적인 data를 제외한 
정적파일을 불러와 한개의 페이지에서 데이터만 바꿔서 보여줌

리액트 라우터로 페이지를 나누어 유저가 접속하는 url마다 다른 data를 보여줄 수 있음
설치한 라우터를 적용하기 위해서 index.js에서 BrowserRouter를 이용해 App을 감싸줌


BrowserRouter: 주소에 대한 정보를 props에 담아 조회하거나 사용할 수 있다.
: HTML5의 History API를 사용하여 페이지를 새로고침 하지 않고 주소를 변경한다.

Link: history API를 사용하여 애플리케이션은 그대로 두고 경로만 변경한다.
: a 태그는 페이지는 전환하는 과정에서 새로운 페이지를 불러옴으로 Link를 사용한다.
*/