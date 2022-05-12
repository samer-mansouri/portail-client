import api from "./api";

class AuthService {

    login(email, password) {
        return api.post(`/connect`, 
            {
                email: email,
                password: password
            }
        )
    }
} 

export default new AuthService();