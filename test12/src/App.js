import logo from './logo.svg';
import './App.css';
import { Music, Plan, Todos } from './components';

function App() {
  return (
    <div>
      <Todos/>
      <Music/>
      <hr/>
      <Plan/>
    </div>
  );
}

export default App;
