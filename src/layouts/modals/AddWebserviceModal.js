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
import { useRef } from 'react';
import { useForm } from "react-hook-form";
import AdminService from 'services/admin.service';

export default function AddWebserviceModal() {
  const [open, setOpen] = React.useState(false);

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    AdminService.addWebService(data)
      .then(() => {
        console.log(res.data)
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
        AJOUTER UN WEBSERVICE 
      </MDButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth={'md'}
      >
        <DialogTitle id="alert-dialog-title">
          {"Ajouter un webservice"}
        </DialogTitle>
        <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)} ref={f => (form.current = f)}>
        <TextField 
        defaultValue=""
        {...register("libelle")}
        id="standard-basic" label="Libelle" variant="standard" fullWidth />
        <TextField 
        defaultValue=""
        {...register("param")}
        id="standard-basic" label="Param" variant="standard" fullWidth/>
        <TextField
        defaultValue=""
        {...register("url")}
        id="standard-basic" label="Url" variant="standard" fullWidth />
        <TextField
        defaultValue=""
        {...register("port")}
        id="standard-basic" label="Port" variant="standard" fullWidth />
        <TextField
        defaultValue=""
        {...register("token")}
        id="standard-basic" label="Token" variant="standard" fullWidth />
        <TextField
        defaultValue=""
        {...register("type")}
        id="standard-basic" label="Type" variant="standard" fullWidth />
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