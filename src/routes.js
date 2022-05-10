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

/** 
  All of the routes for the Material Dashboard 2 React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";
import SignIn from "layouts/authentication/sign-in";
import Clients from "layouts/clients";
import Webservices from "layouts/webservices";
import Modules from "layouts/modules";
import Utilisateurs from "layouts/utilisateurs";
import KpiClients from "layouts/kpi_clients";
import ModuleClients from "layouts/module_clients";
import ClientDashboard from "layouts/dashboard/ClientDashboard";
import Licences from "layouts/licences";
import Admins from "layouts/admins";
// @mui icons
import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "collapse",
    name: "Accueil",
    key: "accueil",
    icon: <Icon fontSize="small">home</Icon>,
    route: "/accueil",
    component: <Dashboard />,
    auth: "admin",
  },
  {
    type: "collapse",
    name: "Accueil",
    key: "informations",
    icon: <Icon fontSize="small">home</Icon>,
    route: "/informations",
    component: <ClientDashboard />,
    auth: "client",
  },
  {
    type: "collapse",
    name: "Clients",
    key: "clients",
    icon: <Icon fontSize="small">support_agent</Icon>,
    route: "/clients",
    component: <Clients />,
    auth: "admin",
  },
  {
    type: "collapse",
    name: "Licences",
    key: "licences",
    icon: <Icon fontSize="small">wysiwyg</Icon>,
    route: "/licences",
    component: <Licences />,
    auth: "admin",
  },
  {
    type: "collapse",
    name: "Utilisateurs",
    key: "utilisateurs",
    icon: <Icon fontSize="small">group</Icon>,
    route: "/utilisateurs",
    component: <Utilisateurs />,
    auth: "admin",
  },
  {
    type: "collapse",
    name: "Administrateurs",
    key: "administrateurs",
    icon: <Icon fontSize="small">admin_panel_settings</Icon>,
    route: "/admins",
    component: <Admins />,
    auth: "admin",
  },
  {
    type: "collapse",
    name: "Webservices",
    key: "webservices",
    icon: <Icon fontSize="small">language</Icon>,
    route: "/webservices",
    component: <Webservices />,
    auth: "admin",
  },
  {
    type: "collapse",
    name: "Modules",
    key: "modules",
    icon: <Icon fontSize="small">view_module</Icon>,
    route: "/modules",
    component: <Modules />,
    auth: "admin",
  },
  {
    type: "collapse",
    name: "Kpi Clients",
    key: "kpi_clients",
    icon: <Icon fontSize="small">key</Icon>,
    route: "/kpi_clients",
    component: <KpiClients />,
    auth: "client",
  },
  {
    type: "collapse",
    name: "Module Clients",
    key: "module_clients",
    icon: <Icon fontSize="small">grid_view</Icon>,
    route: "/module_clients",
    component: <ModuleClients />,
    auth: "client",
  },
  {
    name: "Sign In",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/connexion",
    component: <SignIn />,
  },
];

export default routes;
