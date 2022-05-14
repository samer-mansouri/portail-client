import api from "./api";

class AdminService {

    getClients() {
        return api.get(`/clients`);
    }

    deleteClient(id){
        return api.delete(`/client-destroy/${id}`);
    }

    updateClient(id, data){
        return api.post(`/client-update/${id}`, data);
    }

    addClient(data){
        return api.post(`/client-store`, data);
    }

    getModules() {
        return api.get(`/modules`);
    }

    deleteModule(id){
        return api.delete(`/module-destroy/${id}`);
    }

    addModule(data){
        return api.post(`/modules-store`, data);
    }

    updateModule(id, data){
        return api.post(`/module-update/${id}`, data);
    }

    getUtilisateurs() {
        return api.get(`/utilisateurs?admin=false`);
    }

    getAdmins() {
        return api.get(`/admins`);
    }

    updateAdmin(id, data){
        return api.post(`/utilisateur-update/${id}`, data);
    }

    addAdmin(data){
        return api.post(`/utilisateurs-store`, data);
    }

    getWebservices() {
        return api.get(`/webservices`);
    }

    addWebService(data){
        return api.post(`/webservices-store`, data);
    }

    deleteWebservice(){
        return api.delete(`/webservice-destroy/${id}`);
    }

    updateWebService(id, data){
        return api.post(`/webservice-update/${id}`, data);
    }

    getWebservicesAndModulesCount() {
        return api.get(`/count`);
    }
}

export default new AdminService();