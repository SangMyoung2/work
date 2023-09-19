import About from './components/About';
import Home from './components/Home';
import {Link,Route} from 'react-router-dom'
import Sub from './components/Sub';

function App() {
  return (
    <div>
      <ul>
        {/* 라우터에서는 a href대신에 Link to사용 */}
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/sub'>Sub</Link></li>
      </ul>

      {/* path /가 오면 component는 Home이다 exact=무조건 /만 왔을때 작동 작성안하면 About혹은 Sub도 같이 뜬다.*/}
      <Route path='/' component={Home} exact/>
      <Route path='/about' component={About}/>
      {/* <Route path='/about' component={Sub}/> */}
      <Route path='/Sub' component={Sub}/>
    </div>
  );
}

export default App;
