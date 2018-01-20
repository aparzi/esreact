import axios from 'axios'

export default class LoginService {
    login(username, password, onSuccess, onError) {
        let postParams = {
            username: username,
            password: password
        };
        axios.post("https://reqres.in/api/login", postParams).then(function (result) {
            console.log("Login effettuato con successo, token: ", result.data);
            onSuccess(result.data)
        }, function (error) {
            console.log(error)
            onError(error.response.data)
        })
    }
}