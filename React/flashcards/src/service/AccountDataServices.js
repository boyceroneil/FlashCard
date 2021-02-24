import axios from 'axios';

class AccountDataServices{
    
    registerAccount(account) {
        return axios.post(`http://localhost:8080/registerUserLogin/`, account)
    }
    retrieveAccount(id){
        return axios.get(`http://localhost:8080/receiveUserLogin/${id}`)
    }

}
export default new AccountDataServices();