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

import { useState, useEffect } from 'react';

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
  

  const [webservices, setWebservices] = useState([]);

  const fetchData = () => {
    AdminService.getWebservices()
      .then(res => {
        console.log(res.data)
        setWebservices(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }


  useEffect(() => {
    fetchData();  
  }, []);
  
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


  return {
    columns: [
      { Header: "id", accessor: "id", width: "15%", align: "left" },
      { Header: "libelle", accessor: "libelle", align: "left" },
      { Header: "param", accessor: "param", align: "center" },
      { Header: "url", accessor: "url", align: "center" },
      { Header: "port", accessor: "port", align: "center" },
      { Header: "token", accessor: "token", align: "center" },
      { Header: "type", accessor: "type", align: "center" },
    ],

    rows: 
      webservices.map((webservice) => {
        return {
          id:  <Data text={webservice.id} />,
          libelle: <Data text={webservice.libelle} />,
          param: <Data text={webservice.param} />,
          url: <Data text={webservice.url} />,
          port: <Data text={webservice.port} />,
          token: <Data text={webservice.token} />,
          type: <Data text={webservice.type} />,
        }
      }),
    
  };
}
