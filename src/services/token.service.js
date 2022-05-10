class TokenService {
    
    loggedInUserTypeFromLocalStorage() {
        const user = localStorage.getItem("user");
        if (user) {
            return JSON.parse(user).role;
        }
        return null;
    }

    loggedInUserIdFromLocalStorage() {
        const user = localStorage.getItem("user");
        if (user) {
            return JSON.parse(user).id;
        }
        return null;
    }

    loggedInUserEmailFromLocalStorage() {
        const user = localStorage.getItem("user");
        if (user) {
            return JSON.parse(user).email;
        }
        return null;
    }

    getUser() {
      return JSON.parse(localStorage.getItem("user"));
    }
  
    setUser(user) {
      console.log(JSON.stringify(user));
      localStorage.setItem("user", JSON.stringify(user));
    }
  
    removeUser() {
      localStorage.removeItem("user");
    }
  }
  
  export default new TokenService();