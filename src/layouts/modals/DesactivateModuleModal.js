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
import TextField from '@mui/material/TextField';


export default function DesactivateModuleModal() {
  const [open, setOpen] = React.useState(false);

  const [captureState, setCaptureState] = React.useState(true);

  


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
      <MDButton color="warning" onClick={handleClickOpen}>
        {captureState ? "DESACTIVER" : "ACTIVER"}
      </MDButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth={'md'}
      >
        <DialogTitle id="alert-dialog-title">
          {"Désactiver un webservice"}
        </DialogTitle>
        <DialogContent>
            Confirmer la désactivation
        </DialogContent>
        <DialogActions>
        <Button onClick={handleClose}>FERMER</Button>
        <Button type="submit" onClick={() => setCaptureState(false)}>CONFIRMER</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}