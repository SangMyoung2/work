import Test1 from './components/Test1';
import Test2 from './components/Test2';

function App() {
  return (
    <div>
      {/* <Test1/> */}
      <Test2/>
    </div>
  );
}

export default App;

/*
[메모니제이션]
컴퓨터가 동일한 계산을 반복해서 할때 이전에 계산한 값을 메모리에 저장 함으로써
동일한 계산의 반복 수행을 제거하여 프로그램 속도를 빠르게 하는 기술이다

 - useMemo : return 값을 기억함 (잘쓰기 쉽지않다 + context)
	     3가지 방법(memo, useMemo, React.memo)

 - useCallback : 함수 자체를 기억함
	     useCallback은 코딩 하는것으로만 최적화됨(결과 못봄)


 useMemo(함수,의존성)
 useMemo(() => {}, deps)
 useMemo(() => {}, [의존변수])

 useCallback(함수,의존성)
 useCallback(() => {}, [의존변수])

 - 함수컴포넌트는 렌더링 될때마다 나의 것을 다시 계산 처리함
   생성뿐만아니라 업데이트 될때마다 다시 만들기 때문이다
   그래서 useCallback이 필요함
   함수형이라서 함수가 실행 될때마다 내부의 것은 메모리가 안되서
   다시 만들어야 쓸수있다
   그래서 HOOKS가 등장 하고 클래스 컴포넌트처럼 사용이 가능해짐
*/
