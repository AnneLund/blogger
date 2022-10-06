import Axios from 'axios'
import {API_URL, API_NEWS, API_POST} from './API_URL'

const GetList = () => {
    return Axios.get(`${API_URL}`)
}

const GetNews = () => {
    return Axios.get(`${API_NEWS}`)
}

const Create = (data) => {
    return Axios.post(`${API_POST}`, data)
};

// const GetDetails = (id) => {
//     return Axios.get(`${API_ID}/${id}`)
// };


// const Login = async (username, password) => {
//     return await Axios.post(`https://api.mediehuset.net/token`, {username, password});
// }

// const Update = (e, id, data) => {
//     return Axios.put(`${API_URL}/${e}/${id}`, data, {
//         headers: authHeader(),
//     })
// };



// const Remove = (e, id) => {
//     return Axios.delete(`${API_URL}/${e}/${id}`, {
//         headers: authHeader(),
//     })
// };

const appService = {
    GetList,
    GetNews,
    Create,
    // Create,
    // Update,
    // Remove,
    // Login,
}

export default appService;



