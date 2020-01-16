import React from 'react';
import MainPage from './pages/MainPage';
import {createGlobalStyle} from 'styled-components'
import Banner from './components/Banner';

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
  }
  
`

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Banner/>
      <MainPage user='320'/>
    </div>
  );
}

export default App;
