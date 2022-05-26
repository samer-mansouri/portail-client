import React from 'react'
import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import MDButton from 'components/MDButton';
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MDBox from "components/MDBox";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import NativeSelect from '@mui/material/NativeSelect';
import Icon from "@mui/material/Icon";
import { useForm } from "react-hook-form";


function FirstForm({ initialData, incrementStep, captureData, incrementProgress }) {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data)
        captureData(data)
        incrementStep()
        incrementProgress()
    }
  return (
        <MDBox pt={3}>
        <form onSubmit={handleSubmit(onSubmit)} >
            <Box mt={2} >
            <TextField
            defaultValue={initialData.RS}
            {...register("RS")}
            id="standard-basic" label="Raison Sociale" variant="standard" fullWidth />
            </Box>
            <Box mt={2} >
                <TextField
                defaultValue={initialData.email}
                {...register("email")}
                id="standard-basic" label="Email" variant="standard" fullWidth />    
            </Box>
            <Box mt={2} >
                <TextField
                defaultValue={initialData.nom}
                {...register("nom")}
                id="standard-basic" label="Nom" variant="standard" fullWidth />
            </Box>
            <Box mt={2} >
                <TextField
                defaultValue={initialData.prenom}
                {...register("prenom")}
                id="standard-basic" label="Prenom" variant="standard" fullWidth />
            </Box>
            <Box mt={2} >
                <TextField
                defaultValue={initialData.TEL}
                {...register("TEL")}
                id="standard-basic" label="Numéro de téléphone" variant="standard" fullWidth />
            </Box>
            <Box mt={2} >
                <TextField
                defaultValue={initialData.solutions}
                {...register("solutions")}
                id="standard-basic" label="Les solutions" variant="standard" fullWidth />
            </Box>
            <Box mt={2} >
                <TextField
                defaultValue={initialData.nombre_licences}
                {...register("nombre_licences")}
                id="standard-basic" label="Nombre de licences" variant="standard" fullWidth />
            </Box>
            
            
            <Box mt={2} >
            <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
        Type d'engagement
        </InputLabel>
        <NativeSelect
          defaultValue={initialData.type_engagement}
          inputProps={{
            name: "Type d'engagement",
            id: 'uncontrolled-native',
            
          }}
          {...register("type_engagement")}

        >
          <option value="Acquision">Acquision</option>
          <option value="Abonnement mensuel">Abonnement mensuel</option>
          <option value="Abonnement trimestriel">Abonnement trimestriel</option>
        </NativeSelect>
      </FormControl>
            </Box>
            <Box mt={3} >
                <MDButton color="success" type="submit">
                    ÉTAPE SUIVANTE{' '}<Icon fontSize="large">navigate_next</Icon>
                </MDButton>
            </Box>

        </form>    
        </MDBox>

  )
}

export default FirstForm