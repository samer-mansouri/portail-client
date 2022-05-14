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
import { useForm } from "react-hook-form";
import TextField from '@mui/material/TextField';
import { useRef } from 'react';
import AdminService from 'services/admin.service';
import { Box } from '@mui/material';




export default function MajAdminModal({ admin }) {
  const [open, setOpen] = React.useState(false);

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    AdminService.updateAdmin(admin.id, data)
      .then((res) => {
        console.log(res)
        window.location.reload(false);
        setOpen(false);
      })
      .catch((err) => {
          console.log(err.message)
      })}
  


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
      <MDButton color="secondary" onClick={handleClickOpen}>
        MODIFIER UN ADMIN
      </MDButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth={'lg'}
      >
        <DialogTitle id="alert-dialog-title">
          {"Modifier un admin"}
        </DialogTitle>
        <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)} ref={f => (form.current = f)}>
        <Box>
            <TextField
            defaultValue={admin.nom}
            {...register("nom")}
            id="standard-basic" label="Nom" variant="standard" fullWidth />
        </Box>
        <Box mt={2}>
            <TextField
            defaultValue={admin.prenom}
            {...register("prenom")}
            id="standard-basic" label="Prenom" variant="standard" fullWidth />
        </Box>
        <Box mt={2}>
            <TextField
            defaultValue={admin.email}
            {...register("email")}
            id="standard-basic" label="Email" variant="standard" fullWidth />
        </Box>
        <Box mt={2}>
            <TextField
            defaultValue={admin.password}
            {...register("password")}
            id="standard-basic" label="Password" variant="standard" fullWidth />
        </Box>
        
        <Box mt={2}>
            <TextField
            defaultValue={admin.RS}
            {...register("RS")}
            id="standard-basic" label="RS" variant="standard" fullWidth />
        </Box>

        <Box mt={2}>
            <TextField
            defaultValue={admin.TEL}
            {...register("TEL")}
            id="standard-basic" label="TEL" variant="standard" fullWidth />
        </Box>

        <DialogActions>
          <Button onClick={handleClose}>FERMER</Button>
          <Button type="submit">CONFIRMER</Button>
        </DialogActions>
        </form>
        </DialogContent>
        
      </Dialog>
    </div>
  );
}
