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




export default function MajUserModal({ client }) {
  const [open, setOpen] = React.useState(false);

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    AdminService.updateClient(client.id, data)
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
      <MDButton color="secondary" onClick={handleClickOpen}>
        MODIFIER 
      </MDButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth={'lg'}
      >
        <DialogTitle id="alert-dialog-title">
          {"Modifier un client"}
        </DialogTitle>
        <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)} ref={f => (form.current = f)}>
        <Box mt={2}>
        <TextField 
        defaultValue={client.etat_client}
        {...register("etat_client")}
        id="standard-basic" label="Etat Client" variant="standard" fullWidth />
        </Box>
        <Box mt={2}><TextField
        defaultValue={client.ip_local}
        {...register("ip_local")} 
        id="standard-basic" label="Ip Local" variant="standard" fullWidth />
        </Box>
        <Box mt={2}><TextField
        defaultValue={client.ip_public}
        {...register("ip_public")} 
        id="standard-basic" label="Ip public" variant="standard" fullWidth />
        </Box>
        <Box mt={2}>
        <TextField
        defaultValue={client.access_ssh}
        {...register("access_ssh")}
        id="standard-basic" label="Access Ssh" variant="standard" fullWidth />
        </Box>

        <Box mt={2}>
        <TextField
        defaultValue={client.access_web}
        {...register("access_web")}
        id="standard-basic" label="Access Web" variant="standard" fullWidth />
        </Box>

        <Box mt={2}>
        <TextField
        defaultValue={client.nbre_licence}
        {...register("nbre_licence")}
        id="standard-basic" label="Nbre Licence" variant="standard" fullWidth />
        </Box>

        <Box mt={2}>
        <TextField
        defaultValue={client.date_mise_enservice}
        {...register("date_mise_enservice")}
        id="standard-basic" label="Date Mise En Service" variant="standard" fullWidth />
        </Box>

        <Box mt={2}>
        <TextField
        defaultValue={client.date_de_paiement}
        {...register("date_de_paiement")}
        id="standard-basic" label="Date De Paiement" variant="standard" fullWidth />
        </Box>

        <Box mt={2}>
        <TextField
        defaultValue={client.type_contrat}
        {...register("type_contrat")}
        id="standard-basic" label="Type Contrat" variant="standard" fullWidth />
        </Box>

        <Box mt={2}>
        <TextField
        defaultValue={client.paiement}
        {...register("paiement")}
        id="standard-basic" label="Paiement" variant="standard" fullWidth />
        </Box>

        <Box mt={2}>
        <TextField
        defaultValue={client.prix_total}
        {...register("prix_total")}
        id="standard-basic" label="Prix Total" variant="standard" fullWidth />
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
