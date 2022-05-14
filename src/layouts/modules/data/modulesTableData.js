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


import AdminService from "services/admin.service";
import DeleteModuleModal from "layouts/modals/DeleteModuleModal";
import MajModuleModal from "layouts/modals/MajModuleModal";

export default function data() {
  

  const [modules, setModules] = useState([]);

  const deleteFromModulesArray = (moduleId) => {
    const newModules = modules.filter(module => module.id !== moduleId);
    setModules(newModules);
  }

  const [reshow, setReShow] = useState(false);

 

  const updateFromModulesArray = () => {
    setReShow(!reshow);
  }


  const fetchData = () => {
    AdminService.getModules()
      .then(res => {
        console.log(res.data)
        setModules(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }


  useEffect(() => {
    fetchData();  
  }, [reshow]);
  
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
      { Header: "id_module", accessor: "id", width: "25%", align: "left" },
      { Header: "nom_module", accessor: "nom_module", align: "left" },
      { Header: "couleur", accessor: "couleur", align: "left" },
      { Header: "modifier", accessor: "modifier", align: "left" },
      { Header: "supprimer", accessor: "supprimer", align: "left" },
    ],

    rows: 
      modules.map((module) => {
        return {
          id:  <Data text={module.id} />,
          nom_module: <Data text={module.nom_Module} />,
          couleur: <Data text={module.couleur} />,
          modifier: <MajModuleModal
          module={module} updateFromModulesArray={updateFromModulesArray} />,
          supprimer: <DeleteModuleModal moduleId={module.id} deleteFromModulesArray={deleteFromModulesArray} />,
        }
      }),
    
  };
}
