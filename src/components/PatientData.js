import React from 'react';
import { useLocation } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const PatientData = () => {
  const location = useLocation();
  const { patient } = location.state;

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Patient Data
      </Typography>
      <Typography variant="body1">Name: {patient.firstName} {patient.lastName}</Typography>
      <Typography variant="body1">Email: {patient.email}</Typography>
      <Typography variant="body1">Phone: {patient.phone}</Typography>
      <Typography variant="body1">Address: {patient.address}</Typography>
    </Container>
  );
};

export default PatientData;
