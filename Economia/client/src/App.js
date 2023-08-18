import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import './App.css';
import Incio from './pages/Incio';

//import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Incio} /> 
    </Switch>
    </BrowserRouter>
  );
}

export default App;
