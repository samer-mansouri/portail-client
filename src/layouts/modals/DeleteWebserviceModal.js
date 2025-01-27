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
export default function DeleteWebserviceModal({webserviceId, deleteFromWebservicesArray}) {
  const [open, setOpen] = React.useState(false);

  const delWebservice = () => {
    AdminService.deleteWebservice(webserviceId)
    .then(res => {
      console.log(res)
      deleteFromWebservicesArray(webserviceId)
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

  return (
    <div>
      <MDButton color="error" onClick={handleClickOpen}>
        SUPPRIMER 
      </MDButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth={'md'}
      >
        <DialogTitle id="alert-dialog-title">
          {"Supprimer un webservice"}
        </DialogTitle>
        <DialogContent>
        <DialogContentText id="alert-dialog-description">Confirmer la suppression</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>FERMER</Button>
          <Button onClick={() => delWebservice()}>CONFIRMER</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
