import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import MDButton from 'components/MDButton';
import DataTable from 'examples/Tables/DataTable';
import MDTypography from 'components/MDTypography';
import ClientService from "services/client.service";
import AdminService from "services/admin.service";

export default function DataModal({ clientId }) {
  const [open, setOpen] = React.useState(false);

  const [moduleClients, setModuleClients] = React.useState([]);

  const fetchData = () => {
       AdminService.getModules()
        .then(res => {
            console.log(res.data)
            setModuleClients(res.data)
        }).catch(err => {
            console.log(err)
        })
  }


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const Data = ({ text }) => (
    <MDTypography component="p"  variant="caption" color="text" fontWeight="medium">
      {text}
    </MDTypography>
  );

  const ToggleActivateButton = () => {
    const [isActive, setIsActive] = React.useState(true);
    const handleToggle = () => {
      setIsActive(!isActive);
    };
    return (
        <MDButton color="secondary"
            onClick={handleToggle}
        >
            {isActive ? 'Activer' : 'Désactiver'}
        </MDButton>
    )
  }

  const tableData = () => {
      return {
        columns: [
            { Header: "id", accessor: "id", width: "25%", align: "left" },
            { Header: "nom Module", accessor: "nomModule", align: "left" },
            { Header: "couleur Module", accessor: "couleurModule", align: "left" },
            { Header: "ACTIVATION", accessor: "toggleActivation", width: "25%", align: "left" },
          ],
      
          rows: 
            moduleClients.map((module) => {
              return {
                id:  <Data text={module.id} />,
                nomModule: <Data text={module.nom_Module} />,
                couleurModule: <Data text={module.couleur} />,
                toggleActivation: <ToggleActivateButton />
              }
            }),
      }
  }

  React.useEffect(() => {
    fetchData()
    }, [])

  return (
    <div>
      <MDButton color="secondary" onClick={handleClickOpen}>
        MODULES 
      </MDButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth={'md'}
      >
        <DialogTitle id="alert-dialog-title">
          {"Liste des modules du client ayant l'id : " + clientId}
        </DialogTitle>
        <DialogContent>
           {
                moduleClients.length > 0 ?
                <DataTable 
                table={{ columns: tableData().columns, rows: tableData().rows }}
                isSorted={false}
                entriesPerPage={false}
                showTotalEntries={false}
                noEndBorder
            /> : 
            <DialogContentText id="alert-dialog-description">Pas de modules pour ce client</DialogContentText>
           }
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>FERMER</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
