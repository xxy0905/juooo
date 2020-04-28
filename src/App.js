import React from 'react';
import logo from './logo.svg';
import './App.css';
import store from  './store'
import  MyRouter from  './components/common/MyRouter'
import {
   BrowserRouter as Router,
   Route,
}  from  'react-router-dom'
import router  from './routes'
import Home from  './views/home'
class App extends   React.Component{
  render() {
    return (
      <Router>
            <MyRouter router={router}></MyRouter>
            <Route path={'/home'} component={Home}></Route>
        </Router>
    )
  }
  componentDidMount(){
    console.log(store.getState())
  }
}

export default App;
