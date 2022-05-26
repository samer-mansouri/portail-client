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

// @mui material components
import Grid from "@mui/material/Grid";
import { useState, useEffect } from "react";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Dashboard components
import Projects from "layouts/dashboard/components/Projects";
import OrdersOverview from "layouts/dashboard/components/OrdersOverview";
import MDButton from "components/MDButton";
import { NavLink } from "react-router-dom";
import ClientService from "services/client.service";

function ClientDashboard() {
  const { sales, tasks } = reportsLineChartData;
  const [modules, setModules] = useState(0);
  const [webservices, setWebservices] = useState(0);
  const fetchData = () => {
    ClientService.getWebservicesAndModulesCount()
    .then((res) => {
      setModules(res.data.modules);
      setWebservices(res.data.webservices);
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
      }

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="wysiwyg"
                title="Nombre de licences"
                count={1}
                percentage={{
                  color: "success",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="view_module"
                title="Nombre de modules actifs"
                count={modules}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon="confirmation_number"
                title="Nombre de tickets"
                count={webservices}
              />
            </MDBox>
          </Grid>
        </Grid>
        <MDBox mt={3}>
         <NavLink to="/activate"><MDButton color="success" type="submit">
                    <Icon fontSize="large">add_box</Icon>{'  '}ACTIVER MODULE
                </MDButton></NavLink>
      </MDBox>
      </MDBox>
      
    </DashboardLayout>
  );
}

export default ClientDashboard;
