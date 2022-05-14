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




export default function AddClientModal() {
  const [open, setOpen] = React.useState(false);

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    AdminService.addClient(data)
      .then((res) => {
        console.log(res)
        window.location.reload(false);
        setOpen(false);
      })
      .catch((err) => {
        console.log(err.message);
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
      <MDButton color="success" onClick={handleClickOpen}>
        AJOUTER UN CLIENT 
      </MDButton>
      
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth={'md'}
      >
        <DialogTitle id="alert-dialog-title">
          {"Ajouter un client"}
        </DialogTitle>
        <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)} ref={f => (form.current = f)}>
        <Box>
            <TextField
            defaultValue=""
            {...register("nom")}
            id="standard-basic" label="Nom" variant="standard" fullWidth />
        </Box>
        <Box mt={2}>
            <TextField
            defaultValue=""
            {...register("prenom")}
            id="standard-basic" label="Prenom" variant="standard" fullWidth />
        </Box>
        <Box mt={2}>
            <TextField
            defaultValue=""
            {...register("email")}
            id="standard-basic" label="Email" variant="standard" fullWidth />
        </Box>
        <Box mt={2}>
            <TextField
            defaultValue=""
            {...register("password")}
            id="standard-basic" label="Password" variant="standard" fullWidth />
        </Box>
        
        <Box mt={2}>
            <TextField
            defaultValue=""
            {...register("RS")}
            id="standard-basic" label="RS" variant="standard" fullWidth />
        </Box>

        <Box mt={2}>
            <TextField
            defaultValue=""
            {...register("TEL")}
            id="standard-basic" label="TEL" variant="standard" fullWidth />
        </Box>




        <Box mt={2}>
        <TextField 
        defaultValue=""
        {...register("etat_client")}
        id="standard-basic" label="Etat Client" variant="standard" fullWidth />
        </Box>
        <Box mt={2}><TextField
        defaultValue=""
        {...register("ip_local")} 
        id="standard-basic" label="Ip Local" variant="standard" fullWidth />
        </Box>
        <Box mt={2}><TextField
        defaultValue=""
        {...register("ip_public")} 
        id="standard-basic" label="Ip public" variant="standard" fullWidth />
        </Box>
        <Box mt={2}>
        <TextField
        defaultValue=""
        {...register("access_ssh")}
        id="standard-basic" label="Access Ssh" variant="standard" fullWidth />
        </Box>

        <Box mt={2}>
        <TextField
        defaultValue=""
        {...register("access_web")}
        id="standard-basic" label="Access Web" variant="standard" fullWidth />
        </Box>

        <Box mt={2}>
        <TextField
        defaultValue=""
        {...register("nbre_licence")}
        id="standard-basic" label="Nbre Licence" variant="standard" fullWidth />
        </Box>

        <Box mt={2}>
        <TextField
        defaultValue=""
        {...register("date_mise_enservice")}
        id="standard-basic" label="Date Mise En Service" variant="standard" fullWidth />
        </Box>

        <Box mt={2}>
        <TextField
        defaultValue=""
        {...register("date_de_paiement")}
        id="standard-basic" label="Date De Paiement" variant="standard" fullWidth />
        </Box>

        <Box mt={2}>
        <TextField
        defaultValue=""
        {...register("type_contrat")}
        id="standard-basic" label="Type Contrat" variant="standard" fullWidth />
        </Box>

        <Box mt={2}>
        <TextField
        defaultValue=""
        {...register("paiement")}
        id="standard-basic" label="Paiement" variant="standard" fullWidth />
        </Box>

        <Box mt={2}>
        <TextField
        defaultValue=""
        {...register("prix_total")}
        id="standard-basic" label="Prix Total" variant="standard" fullWidth />
        </Box>
        <Box mt={2}>
        <TextField
        defaultValue=""
        {...register("webservice_id")}
        id="standard-basic" label="Webservice Id" variant="standard" fullWidth />
        </Box>
        <Box mt={2}>
        <TextField
        defaultValue=""
        {...register("module_id")}
        id="standard-basic" label="Module Id" variant="standard" fullWidth />
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
