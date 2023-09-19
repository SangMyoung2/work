import {Link,Route,Switch} from 'react-router-dom'
import NotProduct from './router6/NotProduct';
import Products from './router6/Products';
import ProductDetail from './router6/ProductDetail';
import Main from './router6/Main';


function App() {
  return (
    <div>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/Products'>Products</Link></li>
      </ul>
      <Switch>
        <Route path={['/','/main']} exact><Main/></Route>
        <Route path='/products' exact><Products/></Route>
        <Route path='/products/:productID' exact><ProductDetail/></Route>
        <Route path='*'><NotProduct/></Route>
      </Switch>
    </div>
  );
}

export default App;
