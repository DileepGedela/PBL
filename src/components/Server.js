const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { MongoClient } = require('mongodb');

const app = express();
const port = 4000;
const uri = "mongodb+srv://gedeladileep21csd:CVHZSyzMj9geI359@cluster0.b9yak.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
let client;

app.use(cors());
app.use(bodyParser.json());

// Function to connect to MongoDB
async function connectToDatabase() {
  if (!client) {
    client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    try {
      await client.connect();
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
    }
  }
  return client;
}

// Endpoint for doctor registration
app.post('/api/doctor/register', async (req, res) => {
  const { firstName, lastName, email, phone, specialty, password, confirmPassword } = req.body;

  // Basic validation
  if (password !== confirmPassword) {
    return res.status(400).json({ message: 'Passwords do not match' });
  }

  const client = await connectToDatabase();
  const db = client.db('PBL'); // Database name
  const collection = db.collection('DoctorRegister'); // Collection name

  try {
    const result = await collection.insertOne({ firstName, lastName, email, phone, specialty, password });
    res.status(200).json({ message: 'Registration successful', result });
  } catch (error) {
    res.status(500).json({ message: 'Error saving data', error });
    console.error('Error saving data:', error);
  }
});



// Endpoint for patient registration
app.post('/api/patient/register', async (req, res) => {
  const { firstName, lastName, email, phone, address, dateOfBirth, gender, password, confirmPassword } = req.body;

  // Basic validation
  if (password !== confirmPassword) {
    return res.status(400).json({ message: 'Passwords do not match' });
  }

  const client = await connectToDatabase();
  const db = client.db('PBL'); // Database name
  const collection = db.collection('PatientRegister'); // Collection name

  try {
    const result = await collection.insertOne({ firstName, lastName, email, phone, address, dateOfBirth, gender, password });
    res.status(200).json({ message: 'Patient registration successful', result });
  } catch (error) {
    res.status(500).json({ message: 'Error saving data', error });
    console.error('Error saving data:', error);
  }
});

//Endpoint for doctor login
app.post('/api/doctor/login', async (req, res) => {
  const { email, password } = req.body;
  const client = await connectToDatabase();
  const db = client.db('PBL'); // Database name
  const collection = db.collection('DoctorRegister'); // Collection name

  try {
    const doctor = await collection.findOne({ email, password });
    if (doctor) {
      res.status(200).json({ message: 'Login successful', doctor });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error during login', error });
    console.error('Error during login:', error);
  }
});



// Endpoint for patient login
app.post('/api/patient/login', async (req, res) => {
  const { email, password } = req.body;
  const client = await connectToDatabase();
  const db = client.db('PBL'); // Database name
  const collection = db.collection('PatientRegister'); // Collection name

  try {
    const patient = await collection.findOne({ email, password });
    if (patient) {
      res.status(200).json({ message: 'Login successful', patient });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error during login', error });
    console.error('Error during login:', error);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


