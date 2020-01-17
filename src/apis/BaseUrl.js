import Axios from "axios";

const api=Axios.create({
    baseURL:'http://54.180.122.126:5555/',
    headers:{
        'Content_type':'application/json'
    }
})
export default api