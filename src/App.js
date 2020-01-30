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
import DetailedPage from './pages/DetailedPage';
import FindPwPage from './pages/FindPwPage';
const GlobalStyle = createGlobalStyle `
  *{
    margin:0;
    padding:0;
  }
  
`

function App() {
    const [user,setUser]=React.useState('')
    return (
        <div className="App">
            <GlobalStyle/>

            <Router >

                <Route path='/' exact='exact'>
                    <MainPage user={user} setUser={setUser} back='main_image'/>
                </Route>
                
                <Route path='/login' exact='exact'>
                <Banner user={user} color='white'  back='#212121' img={Logo_white}/>


                    <LoginPage setUser={setUser}/>
                </Route>
                <Route path='/register' exact='exact'>
                <Banner user={user} color='white'  back='#212121' img={Logo_white}/>


                    <RegisterPage setUser={setUser}/>
                </Route>
                <Route path='/counsel' exact='exact'>
                    <Banner user={user} color='white'  back='#212121' img={Logo_white}/>
                    <CounselPage setUser={setUser}/>
                </Route>

                <Route path='/project' exact='exact'>
                    <Banner user={user} color='white' back='#212121' img={Logo_white}/>
                    <ProjectPage setUser={setUser}/>
                </Route>
                <Route path='/review' exact='exact'>
                    <Banner user={user} color='white' back='#212121' img={Logo_white}/>
                    <ReviewPage setUser={setUser}/>
                </Route>
                <Route path='/portfolio' exact='exact'>
                    <Banner user={user} color='white' back='#212121' img={Logo_white}/>
                    <PortfoliPage setUser={setUser}/>
                </Route>
                <Route path='/detailed' exact='exact'>
                    <Banner user={user} color='white' back='#212121' img={Logo_white}/>
                    <DetailedPage setUser={setUser}/>
                </Route>
                <Route path='/detailed/:id' exact='exact'>
                    <Banner user={user} color='white' back='#212121' img={Logo_white}/>
                    <DetailedPage setUser={setUser}/>
                </Route>
                <Route path='/findPw' exact='exact'>
                    <Banner user={user} color='white' back='#212121' img={Logo_white}/>
                    <FindPwPage setUser={setUser}/>
                </Route>
            </Router>
        </div>
    );
}

export default App;
