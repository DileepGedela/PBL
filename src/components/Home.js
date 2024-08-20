import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

// Correct paths for background images
import bgImage from '../assets/bg.jpg';
import doctorImage from '../assets/doctor.jpeg';
import patientImage from '../assets/patient.jpeg';

const Home = () => {
  const navigate = useNavigate();

  const handleDoctorRegister = () => {
    navigate('/doctor-register');
  };

  const handlePatientRegister = () => {
    navigate('/patient-register');
  };

  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        padding: '2rem',
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={4} justifyContent="center" style={{ marginTop: '4rem' }}>
          <Grid item xs={12} sm={6}>
            <Paper
              elevation={3}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '2rem',
                textAlign: 'center',
                backgroundImage: `url(${doctorImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: '#fff',
                minHeight: '200px',
              }}
            >
              <div>
                <Typography variant="h5" gutterBottom>
                  {/* Doctor Register */}
                </Typography>
              </div>
              <Button
                variant="contained"
                color="primary"
                onClick={handleDoctorRegister}
                style={{ marginTop: '1rem' }}
                fullWidth
              >
                Register
              </Button>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Paper
              elevation={3}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '2rem',
                textAlign: 'center',
                backgroundImage: `url(${patientImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: '#fff',
                minHeight: '200px',
              }}
            >
              <div>
                <Typography
                  variant="h5"
                  gutterBottom
                  style={{ color: '#11235A' }} // Changed text color
                >
                  {/* Patient Register */}
                </Typography>
              </div>
              <Button
                variant="contained"
                color="primary"
                onClick={handlePatientRegister}
                style={{ marginTop: '1rem' }}
                fullWidth
              >
                Register
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
