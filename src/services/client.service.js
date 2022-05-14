import api from "./api";

class ClientService {

    getClientModules() {
        return api.get(`/modules`);
    }

    getClientLicence(id){
        return api.get(`/client/${id}`)
    }

    getKpiClient(id) {
        return api.get(`/webservices`);
    }

    getWebservicesAndModulesCount() {
        return api.get(`/count`);
    }

}

export default new ClientService();