import api from "./api";

class AdminService {

    getClients() {
        return api.get(`/clients`);
    }

    getModules() {
        return api.get(`/modules`);
    }

    getUtilisateurs() {
        return api.get(`/utilisateurs`);
    }

    getWebservices() {
        return api.get(`/webservices`);
    }
}

export default new AdminService();