import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import CreateNote from './components/CreateNote';
import NoteDetail from './components/NoteDetail';
import ArchivedNotes from './components/ArchivedNote';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/CreateNote" component={CreateNote} />
        <Route exact path="/note/:id" component={NoteDetail} />
        <Route exact path="/ArchivedNotes" component={ArchivedNotes} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;


