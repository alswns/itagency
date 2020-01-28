import React from 'react';
import MainPage from './pages/MainPage';

import Logo_white from './assets/imgs/Logo_white.png'
import Logo_gray from './assets/imgs/Logo_gray.png'
import {createGlobalStyle} from 'styled-components'
import Banner from './components/Banner';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CounselPage from './pages/CounselPage';
import ProjectPage from './pages/ProjectPage';
import ReviewPage from './pages/ReviewPage';
import PortfoliPage from './pages/PortfoliPage';
import Headroom from 'react-headroom';
import Service from './components/Service';
import MainBanner from './components/MainBanner';
const GlobalStyle = createGlobalStyle `
  *{
    margin:0;
    padding:0;
  }
  
`

function App() {
    return (
        <div className="App">
            <GlobalStyle/>

            <Router >

                <Route path='/' exact='exact'>
                    <MainPage user='320' back='main_image'/>
                </Route>
                <Route path='/main' exact='exact'>
                    <Banner color='white' img={Logo_white}/>

                    <MainPage user='320'/>
                </Route>
                <Route path='/login' exact='exact'>
                    <Banner color='black' img={Logo_gray}/>

                    <LoginPage/>
                </Route>
                <Route path='/register' exact='exact'>
                    <Banner color='black' img={Logo_gray}/>

                    <RegisterPage/>
                </Route>
                <Route path='/counsel' exact='exact'>
                    <Banner color='white'  back='#212121' img={Logo_white}/>
                    <CounselPage/>
                </Route>

                <Route path='/project' exact='exact'>
                    <Banner color='white' back='#212121' img={Logo_white}/>
                    <ProjectPage/>
                </Route>
                <Route path='/review' exact='exact'>
                    <Banner color='white' back='#212121' img={Logo_white}/>
                    <ReviewPage/>
                </Route>
                <Route path='/portfolio' exact='exact'>
                    <Banner color='white' back='#212121' img={Logo_white}/>
                    <PortfoliPage/>
                </Route>
            </Router>
        </div>
    );
}

export default App;
