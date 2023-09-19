import {Link,Route,Switch} from 'react-router-dom'
import Home from './components/Home';
import Ceo from './router1/Ceo';
import Sub1 from './router1/Sub1';
import Sub2 from './router1/Sub2';
import NotFile from './router1/NotFile';

function App() {
  return (
    <div>
      <nav>
        <ul>
          {/* 라우터에서는 a href대신에 Link to사용 */}
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/Ceo'>Ceo</Link></li>
          <li><Link to='/sub1'>Sub1</Link></li>
          <li><Link to='/sub2'>Sub2</Link></li>
        </ul>
      </nav>

      {/* 방법1
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/ceo' component={Ceo}/>
        <Route path='/sub1' component={Sub1}/>
        <Route path='/Sub2' component={Sub2}/>
        <Route path='*' component={NotFile}/>
      </Switch>
      */}

      {/* 방법2 */}
      <Switch>
        <Route path='/' exact><Home/></Route>
        <Route path='/ceo'><Ceo/></Route>
        <Route path='/sub1'><Sub1/></Route>
        <Route path='/Sub2'><Sub2/></Route>
        <Route path='*'><Route/></Route>
      </Switch>
    </div>
  );
}

export default App;
