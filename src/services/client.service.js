import api from "./api";

class ClientService {

    getClientModules(id) {
        return api.get(`/module_clients?id_client=${id}&expand=module`);
    }

    getKpiClient(id) {
        return api.get(`/kpi_clients?id_client=${id}&expand=webservice`);
    }

}

export default new ClientService();