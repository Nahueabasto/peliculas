import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import './App.css';
import Home from './components/Home';
//import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  return (
    <BrowserRouter>
    
    <Switch>
      <Route exact path="/" component={Home} /> 
    </Switch>
    
    </BrowserRouter>
  );
}

export default App;
