import React, { Component } from 'react'
import api from '../../apis/BaseUrl'
import ReviewItem from './ReviewItem'
import styled from 'styled-components'


const Wrapper =styled.div`
width:1080px;
height:520px;
display:flex;
flex-direction:column;
justify-content:space-between;
margin:0 auto;
background-color: #f3f3f3;
padding:45px 0;
`
const Container=styled.div`
display:flex;
justify-content:space-between;
`
export default class ReviewContainer extends Component {
    check=1
    state={
        review:[],
        page:0
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
        api.get('/info/review').then(res=>{
            this.setState({
                review:res.data.info.division(2)
            })
        })

    }

    render() {
        return (
            <div style={{background:'#f3f3f3'}}>
                <Wrapper>
                {((this.state.review||[]).slice(3*this.state.page,3*this.state.page+3)||[]).map(re=>{
                    return <Container>{
                   re.map(res=>{
                       return <div><ReviewItem project_name={res.project_name} cost={res.cost} starts={res.stars} field={res.field} owner_name={res.owner_name} review_title={res.review_title}
                       review={res.review}></ReviewItem></div>

                   })}</Container>
                    
                })}
               
                </Wrapper>
                
            </div>
        )
    }
}
