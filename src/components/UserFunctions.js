import axios from 'axios'

//b1
export const register = newUser => {
    return axios
        .post('http://192.168.5.155:8000/api/auth/signup', newUser, {
            headers: { 'Content-Type': 'application/json' }
        })
        .then(response => {
            console.log(response)
        })
        .catch(err => {
            console.log(err)
        })
}
//b2
export const login = user => {
    return axios
        .post(
            'http://192.168.5.155:8000/api/auth/login',
            {
                email: user.email,
                password: user.password
            },
            {
                headers: { 'Content-Type': 'application/json' }
            }
        )
        .then(response => {
            console.log("response", response)
            localStorage.setItem('usertoken', response.data.token)
            return response.data.token
        })
        .catch(err => {
            console.log(err)
        })
}
//b3
export const getProfile = () => {//http://5eddc236ae06ed0016ee3821.mockapi.io/api/products
    return axios //
        .get('http://192.168.5.155:8000/api/users', {// http://192.168.5.155:8000/api/auth/user   api/profile
            headers: { Authorization: `Bearer ${localStorage.usertoken}` }//http://192.168.5.155:8000/api/users
        })
        .then(response => {
            console.log(response)
            return response.data
        })
        .catch(err => {
            console.log(err)
        })
}