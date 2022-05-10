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

import AdminService from "services/admin.service";


export default function data() {

  const [users, setUsers] = useState([]);

  const fetchData = () => {
    AdminService.getUtilisateurs()
    .then(res => {
      console.log(res.data)
      setUsers(res.data)
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


  return {
    columns: [
      { Header: "id_pers", accessor: "id_pers", width: "15%", align: "left" },
      { Header: "role", accessor: "role", align: "left" },
      { Header: "nom", accessor: "nom", align: "center" },
      { Header: "prenom", accessor: "prenom", align: "center" },
      { Header: "email", accessor: "email", align: "center" },
      { Header: "password", accessor: "password", align: "center" },
      { Header: "RS", accessor: "RS", align: "center" },
      { Header: "TEL", accessor: "TEL", align: "center" },
      { Header: "id_client", accessor: "id_client", align: "center" },
    ],

    rows: 
      users.map((user) => {
        return {
          id_pers:  <Data text={user.id_pers} />,
          role:  <Data text={user.role} />,
          nom:  <Data text={user.nom} />,
          prenom:  <Data text={user.prenom} />,
          email:  <Data text={user.email} />,
          password:  <Data text={user.password} />,
          RS:  <Data text={user.RS} />,
          TEL:  <Data text={user.TEL} />,
          id_client:  <Data text={user.id_client} />,
        }
      }),
    
  };
}
