import './App.css';
import 'reactflow/dist/style.css';
import GraphContainer from './component/GraphContainer';
import { Provider } from 'react-redux';
import { store } from './store/store';


function App() {

  return (
    <>
    <Provider store={store}>
      <GraphContainer />
    </Provider>
    </>
  );
}

export default App;
