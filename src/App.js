import React from 'react';
import MainPage from './pages/MainPage';
import {createGlobalStyle} from 'styled-components'
import Banner from './components/Banner';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
  }
  
`

function App() {
  return (
    <div className="App" >
      <GlobalStyle/>
      
      <Router >
      <Banner/>
      
      <Route path='/'  exact='exact'>
      <MainPage user='320'/>
      </Route>
      <Route path='/main'  exact='exact'>
      <MainPage user='320'/>
      </Route>
      <Route path='/login' exact='exact'>
        <LoginPage/>
      </Route>
      <Route path='/register' exact='exact'>
        <RegisterPage/>
      </Route>

      
      </Router>
    </div>
  );
}

export default App;
