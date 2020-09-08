import React, { useState, Suspense, lazy } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
//import Create from './components/Create'
//import View from './components/View'

const Create = lazy(() =>
  import('./components/Create'))

const View = lazy(() =>
  import('./components/View'))

function App() {

  const [users, setUsers] = useState([]);

  const fill = (info) => {    
    var i = users;
    i.push(info);
    setUsers(i);
    //console.log("fill called");
  }

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="App">
          <Navbar />
          <Route exact path="/">
            <Redirect to="/users/create"></Redirect>
          </Route>
          <Route exact path="/users/view">
            <View users={users} />

          </Route>
          <Route path="/users/create">
            <Create users={users} fill={fill} />
          </Route>
        </div>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
