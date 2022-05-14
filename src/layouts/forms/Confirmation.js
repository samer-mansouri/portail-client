import React from 'react'
import MDBox from "components/MDBox";
import Icon from "@mui/material/Icon";
import MDButton from 'components/MDButton';




function Confirmation({ data, decrementStep, decrementProgress }) {
  return (
    <>
    <MDBox mt={3}><h2>Confirmation de l'exactitude des informations fournies</h2></MDBox>

    <MDBox mt={2}><h4>Raison Sociale : {data.RS}</h4></MDBox>
    <MDBox mt={2}><h4>EMAIL: {data.email}</h4></MDBox>
    <MDBox mt={2}><h4>NOM: {data.nom}</h4></MDBox>
    <MDBox mt={2}><h4>PRENOM: {data.prenom}</h4></MDBox>
    <MDBox mt={2}><h4>NUM TEL: {data.TEL}</h4></MDBox>
    <MDBox mt={2}><h4>SOLUTIONS : {data.solutions}</h4></MDBox>
    <MDBox mt={2}><h4>NB LICENCE : {data.nombre_licences}</h4></MDBox>
    <MDBox mt={2}><h4>Type d'engagement : {data.type_engagement}</h4></MDBox>

    <MDBox mt={3} >
                <MDButton color="success" type="submit" onClick={() => {
                    decrementStep();
                    decrementProgress();
                }}>
                    <Icon fontSize="large">arrow_back_ios</Icon>{'  '}ÉTAPE PRÉCÉDENTE
                </MDButton>
                {'  '}
                <MDButton color="success" type="submit">
                    <Icon fontSize="large">done</Icon>{'  '}VALIDER ET ENVOYER
                </MDButton>
    </MDBox>

    </>
  )
}

export default Confirmation