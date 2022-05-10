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

export default function DataModal({ clientId }) {
  const [open, setOpen] = React.useState(false);

  const [moduleClients, setModuleClients] = React.useState([]);

  const fetchData = () => {
       ClientService.getClientModules(clientId)
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
    return (
        <MDButton color="secondary"
        >
            Activer
        </MDButton>
    )
  }

  const tableData = () => {
      return {
        columns: [
            { Header: "id", accessor: "id", width: "25%", align: "left" },
            { Header: "role", accessor: "role", align: "left" },
            { Header: "module id", accessor: "moduleId", align: "left" },
            { Header: "nom Module", accessor: "nomModule", align: "left" },
            { Header: "couleur Module", accessor: "couleurModule", align: "left" },
            { Header: "ACTIVATION", accessor: "toggleActivation", width: "25%", align: "left" },
          ],
      
          rows: 
            moduleClients.map((module) => {
              return {
                id:  <Data text={module.id} />,
                role:  <Data text={module.role} />,
                moduleId:  <Data text={module.moduleId} />,
                nomModule: <Data text={module.module.nom_module} />,
                couleurModule: <Data text={module.module.couleur} />,
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
