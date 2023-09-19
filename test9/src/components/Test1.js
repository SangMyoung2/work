import React, { useRef, useState, useEffect, useLayoutEffect} from 'react';

const Test1 = () => {

    const [count,setCount] = useState(1)
    const ref1 = useRef()
    const ref2 = useRef()
    const onColor = () => {

        ref1.current.style.color='pink'
        ref2.current.style.color='blue'
        setCount(count+1)
    }

    useEffect( () => {
        ref1.current.style.color='tomato'
        console.log('useEffect')
    })
    
    useLayoutEffect( () => {
        ref2.current.style.color='skyblue'
        console.log('useLayoutEffect')
    })

    return (
        <div style={{margin:30}}>
            <h1>출력: {count}</h1>
            <h1 ref={ref1}>useEffect</h1>
            <h1 ref={ref2}>useLayoutEffect</h1>
            <button onClick={onColor}>확인</button>
        </div>
    );
};

export default Test1;

    /*
    useEffect: 브라우져에 그려진 후에 실행됨
useLayoutEffect: 브라우져에 그려진 전에 실행됨

[useEffect]

***특정 작업이 실행된 후 자동으로 실행되는 함수를 만들때 사용

--컴포넌트가 랜더링 될때마다 특정 작업을 시간을 정해 실행할 수 있도록 하는 Hook이다
--화면에 렌더링(화면에 그려진) 후 수행
--컨포넌트가 렌더링 될때마다 작업을 수행
--component가 Mount,Unmount,Update 됐을때 실행됨

--클래스 형에서는 componentDidMount와 componentDidUpdate, 
 componentWillUnmount를 합쳐 놓은것

--2개의 인자를 받는데, 첫번째는 function으로써의 effect고,
두번째에 넣은 인자 상태가 바뀌면 첫번째 인자가 다시 실행된다.
--useEffect(콜백함수,[의존변수])

마운트란
--리액트에서 특정 컴포넌트를 끼워 넣는것을 말함
  예) React.render(App,#root)
      #root DOM에 App를 끼워넣기

useEffect가 실행되는시점
--처음 나타날때 (화면이 그려질때)
--업데이트 할때 
  -특정 props를 많이 사용한다
  -특정 props가 변경될때 (주로 사용)
  -특정 state가 변경할때
--사라질때


문법1 : mount / update (잘 사용 안함)
useEffect( () => {
  실행문
})

문법2 : mount할때 한번만 실행 (자주사용) 
useEffect( () => {
  실행문
},[])  //[]: 한번만 실행

문법3 : mount / 특정 변수가 바뀔때마다 update 
사용 빈도 : props(80%), state
useEffect( () => {
  실행문
},[의존변수]) - props(80%), state

문법4
useEffect( () => {
  실행문

  //effect 뒷정리
  return() => {
    실행문
  }
},[의존변수,의존변수])

뒷정리는 메모리 누수를 방지하기 위해서 UI 컴포넌트를 제거하기 전에 수행 한다
컴포넌트가 여러번 렌더링 된다면 다음 effect가 수행하기 전에 이전 effect를 정리하고 수행한다

사용범위
1. props로 받은 값을 처리할때
2. 외부 API (axios,fetch) - 외부 json 호출 할때
3. setInterval, setTimeout
4. 외부 라이브러리 사용 할때
    */