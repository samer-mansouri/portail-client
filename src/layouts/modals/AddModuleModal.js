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
import { useForm } from "react-hook-form";
import TextField from '@mui/material/TextField';
import { useRef } from 'react';
import AdminService from 'services/admin.service';
import { Box } from '@mui/material';




export default function AddModuleModal() {
  const [open, setOpen] = React.useState(false);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    AdminService.addModule(data)
      .then(() => {
        console.log(res)
        window.location.reload(false);
        setOpen(false);
      })
      .catch(() => {setOpen(false);})}
  


  const form = useRef(null);

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
      <MDButton color="success" onClick={handleClickOpen}>
        AJOUTER UN MODULE 
      </MDButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth={'md'}
      >
        <DialogTitle id="alert-dialog-title">
          AJOUTER UN WEBSERVICE
        </DialogTitle>
        <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)} ref={f => (form.current = f)}>
        <TextField 
        defaultValue=""
        {...register("nom_Module")}
        id="standard-basic" label="Nom module" variant="standard" fullWidth />
        <TextField 
        defaultValue=""
        {...register("couleur")}
        id="standard-basic" label="Couleur Module" variant="standard" fullWidth/>
        <DialogActions>
        <Button type="submit">CONFIRMER</Button>
        <Button onClick={handleClose}>FERMER</Button>
          </DialogActions>
        
        </form>
         </DialogContent>
        
      </Dialog>
    </div>
  );
}
