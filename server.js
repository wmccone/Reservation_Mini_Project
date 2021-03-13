const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const currentReservations = [
  {
    name: 'Yoda',
    phone: '',
    id: '',
    email: ''
  },
  {
    name: 'Jared',
    phone: '',
    id: '',
    email: ''
  }
];

const waitingList = [
  {
    name: 'Yoda',
    phone: '',
    id: '',
    email: ''
  },
  {
    name: 'Jared',
    phone: '',
    id: '',
    email: ''
  }
];

// Routes

// Basic route that sends the user first to the AJAX Page

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.get('/tables', (req, res) => res.sendFile(path.join(__dirname, 'tables.html')));

app.get('/reservations', (req, res) => res.sendFile(path.join(__dirname, 'reservations.html')));

// Create New Characters - takes in JSON input
app.post('/reservations', (req, res) => {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  const newTable = req.body;

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  if (currentReservations.length<5){

    res.json(newTable)
    currentReservations.push(newTable)
  }

  else{
    res.json(newTable)
    waitingList.push(newTable)
  }

  // newCharacter.routeName = newCharacter.name.replace(/\s+/g, '').toLowerCase();
  // console.log(newCharacter);

  // res.json(newCharacter);
});

// Starts the server to begin listening

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
