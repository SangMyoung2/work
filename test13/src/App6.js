import {Link,Route,Switch} from 'react-router-dom'
import Main from './router5/Main';
import MemberDetail from './router5/MemberDetail';
import NotMember from './router5/NotMember';

function App() {
  return (
    <div>
      <Switch>
        <Route path={['/','/main']} exact><Main/></Route>
        <Route path={['/member/:memberID']}><MemberDetail/></Route>
        <Route path={'*'}><NotMember/></Route>
      </Switch>
    </div>
  );
}

export default App;
