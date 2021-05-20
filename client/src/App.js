import React from 'react';
import './App.css';
import {Router} from '@reach/router';
import Main from './views/Main';
import AddAuthor from './views/AddAuthor';
import Update from './views/Update';
import Detail from './views/Detail'


function App() {
  return (
    <div className="App">
      <h1>Favorite Authors</h1>
      <Router>
        <Main path="/" />
        <AddAuthor path="/new" />
        <Update path="/:id/edit" />
        <Detail path="/:id" />
      </Router>
    </div>
  );
}


export default App;