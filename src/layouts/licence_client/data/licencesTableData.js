
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
import MDBadge from "components/MDBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

import MDButton from "components/MDButton";
import DataModal from "../../modals/DataModal"
import ClientService from "services/client.service";
import TokenService from '../../../services/token.service';



export default function data() {


  const [data, setData] = useState({});

  const client = TokenService.loggedInUserIdFromLocalStorage();


  const [showModal, setShowModal] = useState(false);

  const fetchData = () => {
    ClientService.getClientLicence(client)
    .then(res => {
      console.log(res.data)
      setData(res.data.data)
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
      {check ? 'Actif' : 'Non Actif'}
    </MDTypography>
  );

  const Paiement = ({ check }) => (
    <MDTypography component="p"  variant="caption" color="text" fontWeight="medium">
      {check ? 'Payé' : 'Non Payé'}
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
      { Header: "paiement", accessor: "paiement", align: "center" },
      { Header: "access_ssh", accessor: "access_ssh", align: "center" },
      { Header: "access_web", accessor: "access_web", align: "center" },
      { Header: "prix_total", accessor: "prix_total", align: "center" },
      { Header: "nbre_licences", accessor: "nbre_licences", align: "center" },
      { Header: "type_contrat", accessor: "type_contrat", align: "center" },
      { Header: "date_de_paiement", accessor: "date_de_paiement", align: "center" },
      { Header: "date_mise_enservice", accessor: "date_mise_enservice", align: "center" },

    ],

    rows:[
      
         {
          paiement: <Paiement check={data.paiement} />,
          access_ssh: <Access check={data.access_ssh} />,
          access_web: <Access check={data.access_web} />,
          prix_total: <Data text={data.prix_total} />,
          nbre_licences: <Data text={data.nbre_licence} />,
          type_contrat: <Data text={data.type_contrat} />,
          date_de_paiement: <Data text={data.date_de_paiement} />,
          date_mise_enservice: <Data text={data.date_mise_enservice} />,
        }
    ]
    
  };
}
