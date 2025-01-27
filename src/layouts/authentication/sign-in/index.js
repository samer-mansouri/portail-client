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

import { useState } from "react";

// react-router-dom components
import { Link, Navigate } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";
import AuthService from "services/auth.service";
import TokenService from "services/token.service";
import { Alert } from "@mui/material";


function Basic() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [client, setClient] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [err, setErr] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const sendForm = () => {
    AuthService.login(email, password)
    .then(res => {
      console.log(res.data);
      if (res.data.length > 0) {
        console.log(res.data);
        ;
        if(res.data[0].role == 1) {
          TokenService.setUser({
            id: res.data[0].id,
            email: res.data[0].email,
            role: "client"
        })
          setLoggedIn(true);
          setClient(true);
        } else if(res.data[0].role == 0) {
          TokenService.setUser({
            id: res.data[0].id,
            email: res.data[0].email,
            role: "admin"
        })
          setLoggedIn(true);
          setAdmin(true);
        }
        console.log("Logged in");
      } else {
        setLoggedIn(false);
        setErr(true);
        console.log("Invalid Account");
      }
    }).catch(err =>{
      console.log(err);
    })
  }

  if(loggedIn && client) {
    return <Navigate to="/informations" />
  } else if(loggedIn && admin) {
    return <Navigate to="/accueil" />
  }

  


  return (
    <BasicLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            SE CONNECTER
          </MDTypography>

         
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
        {
            err ?
            <Alert severity="error">Veuillez vérifier vos identifiants</Alert> : ''
          }
          <MDBox component="form" role="form" pt={3}>
            <MDBox mb={2}>
              <MDInput 
              type="email" 
              label="Email" fullWidth 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput 
              type="password" 
              label="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth />
            </MDBox>
           
            <MDBox mt={4} mb={1}>
              <MDButton 
              variant="gradient" 
              color="info" fullWidth
              onClick={sendForm}
              >
                se connecter
              </MDButton>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default Basic;
