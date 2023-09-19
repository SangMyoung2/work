import ChangeColor from './component1/color/ChangeColor';
import Color from './component1/color/Color';
import Count from './component1/counter/Count';
import Todos from './component2/todos/Todos';
import ChangeColorProvider from './contexts/ChangeColorContext';
import ColorProvider from './contexts/ColorContext';
import CountProvider from './contexts/CountContext';
import TodosProvider from './contexts/TodosContext';

function App() {
  return (
    <div>
      <TodosProvider>
      <CountProvider>
      <ColorProvider>
        <Color/>
        <Count/>
        <Todos/>
      </ColorProvider>
      </CountProvider>
      </TodosProvider>
    
      <hr/>
      
      <ChangeColorProvider>
        <ChangeColor/>
      </ChangeColorProvider>
      
      <hr/>

    </div>
  );
}

export default App;
