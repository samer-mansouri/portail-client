import api from "./api";

class AuthService {

    login(email, password) {
        return api.get(`http://localhost:5000/accounts?email=${email}&password=${password}`)
    }
} 

export default new AuthService();