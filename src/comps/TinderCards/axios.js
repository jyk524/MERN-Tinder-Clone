import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://tinder-clone-jyk.herokuapp.com'
})

export default instance;