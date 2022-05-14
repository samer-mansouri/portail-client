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
import FirstForm from './FirstForm';
import Confirmation from './Confirmation';
import MDProgress from 'components/MDProgress';



function ActivationForm /*OU LICENCE*/() {

   const [step, setStep] = React.useState(1);
   const [data, setData] = React.useState({});
   const [progress, setProgress] = React.useState(50);
   
   const incrementStep = () => {
       setStep(2);
    }

    const decrementStep = () => {
        setStep(1);
    }

    const incrementProgress = () => {
        setProgress(100);
    }

    const decrementProgress = () => {
        setProgress(50);
    }

    const captureData = (data) => {
        setData(data);
    }

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <MDBox px={8}>
            <Box display="flex" 
        alignItems="center"
        justifyContent="center" mb={3} >
                <h1>FICHE D'ACTIVATION DE MODULE</h1>
            </Box>
            <Box display="flex"
                alignItems="center"
                justifyContent="center" mb={3} >
                
                <Box display="flex" alignItems="center" mx={40}>
                    <Icon fontSize="large" color="success">looks_one</Icon>
                    <h4>Information</h4>
                </Box>

                <Box display="flex" alignItems="center" mx={40}>
                    <Icon fontSize="large" color={step == 1 ? "secondary" : "success"}>looks_two</Icon>
                    <h4>Confirmation</h4>
                </Box>

                
                        
            </Box>
            <MDProgress variant="gradient" color="success" value={progress} />
            {
                step === 1 ? 
                <FirstForm 
                initialData={data}
                incrementStep={incrementStep} 
                captureData={captureData}
                incrementProgress={incrementProgress}
                /> : 
                <Confirmation 
                data={data}
                decrementProgress={decrementProgress}
                decrementStep={decrementStep}
                />
            }
        </MDBox>
        </MDBox>
        <Footer />
    </DashboardLayout>

  )
}

export default ActivationForm