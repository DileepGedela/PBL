import React from 'react';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

const Login = () => {
  const navigate = useNavigate();

  const handleDoctorLogin = () => {
    navigate('/doctor-login');
  };

  const handlePatientLogin = () => {
    navigate('/patient-login');
  };

  return (
    <Container maxWidth="md" style={{ marginTop: '4rem' }}>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} style={{ padding: '2rem', textAlign: 'center' }}>
            <Typography variant="h5" gutterBottom>
              Doctor Login
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={handleDoctorLogin}
              style={{ marginTop: '1rem' }}
              fullWidth
            >
              Login
            </Button>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Paper elevation={3} style={{ padding: '2rem', textAlign: 'center' }}>
            <Typography variant="h5" gutterBottom>
              Patient Login
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={handlePatientLogin}
              style={{ marginTop: '1rem' }}
              fullWidth
            >
              Login
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
