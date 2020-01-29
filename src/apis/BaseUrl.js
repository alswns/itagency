import Axios from "axios";
const Token=window.localStorage.getItem('token')
const api=Axios.create({
    baseURL:'http://54.180.122.126:5555/',
    headers:{
        'Content_type':'application/json',
        "Authorization":'Bearer '+(Token||'')
    }
})
export default api