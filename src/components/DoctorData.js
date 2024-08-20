import React from 'react';
import { useLocation } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const DoctorData = () => {
  const location = useLocation();
  const { doctor } = location.state;

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Doctor Data
      </Typography>
      <Typography variant="body1">Name: {doctor.firstName} {doctor.lastName}</Typography>
      <Typography variant="body1">Email: {doctor.email}</Typography>
      <Typography variant="body1">Phone: {doctor.phone}</Typography>
      <Typography variant="body1">Specialty: {doctor.specialty}</Typography>
    </Container>
  );
};

export default DoctorData;
