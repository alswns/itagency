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
        today_finished_project:undefined
    }
    componentDidMount(){
        api.get('/info/project').then(res=>{
            console.dir()
            this.setState({
                projects:res.data.info
            })
        })
        api.get('/info/project/status').then(res=>{
            this.setState({
                datas:res.data,
                amount:res.data.amount,
                project:res.data.all_num_of_project,
                ing:res.data.project_in_progress,
                today_registered_project:res.data.today_registered_project,
                today_finished_project:res.data.today_finished_project
            })
        }).catch(err=>console.dir(err))

    }

    render() {
        return (
          <>
          
            <MainPost user='320'/>
            <Footer  amount={numberWithCommas(this.state.amount)} project={numberWithCommas(this.state.project)} ing={numberWithCommas(this.state.ing)} /> 
            <LiveProject projects={this.state.projects} today_registered_project={this.state.today_registered_project}  today_finished_project={this.state.today_finished_project} />
            <SecondFooter/>
            <Example/>
            <Progess/>
            <Kategorie/>
            <ThirdFooter/>
            <Portfolio/>
            <Review/>
            <Last/>
            </>

        )
    }
}
