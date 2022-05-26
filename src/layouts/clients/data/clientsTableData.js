/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState, useEffect } from "react";


// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";


import MDButton from "components/MDButton";
import DataModal from "../../modals/DataModal"
import AdminService from "services/admin.service";
import DeleteUserModal from "layouts/modals/DeleteUserModal";
import MajUserModal from "layouts/modals/MajUserModal";



export default function data() {

  const [clients, setClients] = useState([]);

  const [showModal, setShowModal] = useState(false);

  const deleteFromClientsArray = (clientId) => {
    const newClients = clients.filter(client => client.id !== clientId);
    setClients(newClients);
  }

  const fetchData = () => {
    AdminService.getClients()
    .then(res => {
      console.log(res.data)
      setClients(res.data)
    }).catch(err => {
      console.log(err)
    })
  }


  useEffect(() => {
    fetchData()
  }, []) 
  
  const Author = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );

  const Data = ({ text }) => (
    <MDTypography component="p"  variant="caption" color="text" fontWeight="medium">
      {text}
    </MDTypography>
  );

  const EtatClient = ({ check }) => (
    <MDTypography component="p"  variant="caption" color="text" fontWeight="medium">
      {check == 1 ? 'Actif' : 'Non Actif'}
    </MDTypography>
  );

  const Paiement = ({ check }) => (
    <MDTypography component="p"  variant="caption" color="text" fontWeight="medium">
      {check == 1 ? 'Payé' : 'Non Payé'}
    </MDTypography>
  );

  const Access = ({ check }) => (
    <MDTypography component="p"  variant="caption" color="text" fontWeight="medium">
      {check ? 'Oui' : 'Non'}
    </MDTypography>
  );

  const OpenModalButton = ({ clientId}) => (
    <>
      <DataModal clientId={clientId}/>
    </>
    
  )



  return {
  
    columns: [
      { Header: "id_client", accessor: "id_client", width: "45%", align: "left" },
      { Header: "nom", accessor: "nom", align: "center" },
      { Header: "prenom", accessor: "prenom", align: "center" },
      { Header: "email", accessor: "email", align: "center" },
      { Header: "RS", accessor: "RS", align: "center" },
      { Header: "TEL", accessor: "TEL", align: "center" },
      { Header: "etat_client", accessor: "etat_client", align: "left" },
      { Header: "paiement", accessor: "paiement", align: "center" },
      { Header: "ip_local", accessor: "ip_local", align: "center" },
      { Header: "ip_publics", accessor: "ip_public", align: "center" },
      { Header: "access_ssh", accessor: "access_ssh", align: "center" },
      { Header: "access_web", accessor: "access_web", align: "center" },
      { Header: "prix_total", accessor: "prix_total", align: "center" },
      { Header: "nbre_licences", accessor: "nbre_licences", align: "center" },
      { Header: "type_contrat", accessor: "type_contrat", align: "center" },
      { Header: "date_de_paiement", accessor: "date_de_paiement", align: "center" },
      { Header: "date_mise_enservice", accessor: "date_mise_enservice", align: "center" },
      { Header: "Liste des modules", accessor: "modules", align: "center" },
      { Header: "supprimer", accessor: "supprimer", align: "center" },
      { Header: "modifier", accessor: "modifier", align: "center" },
    ],

    rows: 
      clients.map((client) => {
        return {
          id_client:  <Data text={client.id} />,
          nom: <Data text={client.utilisateur.nom} />,
          prenom: <Data text={client.utilisateur.prenom} />,
          email: <Data text={client.utilisateur.email} />,
          RS: <Data text={client.utilisateur.RS} />,
          TEL: <Data text={client.utilisateur.TEL} />,
          etat_client: <EtatClient check={client.etat_client} />,
          paiement: <Paiement check={client.paiement} />,
          ip_local: <Data text={client.ip_local} />,
          ip_public: <Data text={client.ip_public} />,
          access_ssh: <Data text={client.access_ssh} />,
          access_web: <Data text={client.access_web} />,
          prix_total: <Data text={client.prix_total} />,
          nbre_licences: <Data text={client.nbre_licence} />,
          type_contrat: <Data text={client.type_contrat} />,
          date_de_paiement: <Data text={client.date_de_paiement} />,
          date_mise_enservice: <Data text={client.date_mise_enservice} />,
          modules: <OpenModalButton clientId={client?.id}/>,
          supprimer:  <DeleteUserModal clientId={client?.id} deleteFromClientsArray={deleteFromClientsArray} />,
          modifier:  <MajUserModal client={client} />,
        }
      }),
    
  };
}
