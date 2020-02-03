import React, { Component } from 'react'
import Footer from '../components/main/Footer'
import LiveProject from '../components/main/LiveProject'
import MainPost from '../components/main/MainPost'
import api from '../apis/BaseUrl'
import SecondFooter from '../components/main/SecondFooter'
import ThirdFooter from '../components/main/ThirdFooter'
import Example from '../components/main/Example'
import Progess from '../components/main/Progess'
import Kategorie from '../components/main/Kategorie'
import Portfolio from '../components/main/Portfolio'
import Review from '../components/main/Review'
import Last from '../components/main/Last'
import FlexBanner from '../components/FlexBanner'
import Logo_gray from '../assets/imgs/Logo_gray.png'
import counterUp from'counterup2'
import MainBanner from '../components/MainBanner'
import Logo_white from '../assets/imgs/Logo_white.png'


function numberWithCommas(x) {
    if(x===undefined)
        return 0
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
export default class MainPage extends Component {

    state={
        projects:undefined,
        datas:undefined,
        amount:undefined,
        project:undefined,
        ing:undefined,
        today_registered_project:undefined,
        today_finished_project:undefined,
        service:false,
        partners:'',
        conclusion:0,
        average:0,
        portfolio:[]
    }
    componentDidMount(){
        Array.prototype.division = function (n) {
            var arr = this;
            var len = arr.length;
            var cnt = Math.floor(len / n);
            var tmp = [];
    
            for (var i = 0; i <= cnt; i++) {
                tmp.push(arr.splice(0, n));
            }
    
            return tmp;
    }
        // /client/account 우저정보 받기
        api.get('/info/account').then(res=>{
            this.props.setUser(res.data.name)

        })
        .catch(err=>{
            this.props.setUser('guest')
        })
        api.get('/info/project').then(res=>{
            this.setState({
                projects:res.data.info
            })
        })
        api.get('/info/project/status').then(res=>{
            this.setState({
                conclusion:res.data.conclusion,
                average:res.data.average,
                datas:res.data,
                amount:res.data.amount,
                project:res.data.all_num_of_project,
                ing:res.data.project_in_progress,
                today_registered_project:res.data.today_registered_project,
                today_finished_project:res.data.today_finished_project
            })
        })
        api.get('/info/partners').then(
            res=>this.setState({partners:res.data.partners}))
            api.get('/info/portfolio/main').then(res=>{
                this.setState({portfolio:res.data.info.division(3)})
            })
    }
    
componentDidUpdate(){
    setTimeout(this.Count,0)
    
}


Count=()=>{
    const el = document.getElementsByClassName('counter')
        for(let i of el){
            counterUp( i, {
                duration: 1000,
                delay: 16,
            } )  
        }
}

setService=()=>{
    this.setState({service:!this.state.service})
}
    render() {
        return (
          <>
            <MainBanner name={this.props.user} setService={this.setService} service={this.state.service} color='white' img={Logo_white}/>
            <FlexBanner name={this.props.user} setService={this.setService} service={this.state.service} color='black' img={Logo_gray}/>
            <MainPost user={this.state.partners}/>
            <Footer  amount={numberWithCommas(this.state.amount)} project={numberWithCommas(this.state.project)} ing={numberWithCommas(this.state.ing)} /> 
            <LiveProject projects={this.state.projects} today_registered_project={this.state.today_registered_project} ing={numberWithCommas(this.state.ing)} today_finished_project={this.state.today_finished_project} />
            <SecondFooter/>
            <Kategorie/>
            <Progess/>
            <Example/>
            <ThirdFooter/>
            <Portfolio portfolio={this.state.portfolio}/>
            <Review conclusion={this.state.conclusion} average={this.state.average}/>
            <Last/>
            </>

        )
    }
}
