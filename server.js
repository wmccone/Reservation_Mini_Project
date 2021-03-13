const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const currentReservations = [
  {
    name: 'Yoda',
    phone: '512.555.6565',
    id: '3',
    email: 'yoda@jedi.com'
  },
  {
    name: 'Darth Vader',
    phone: '512.665.5656',
    id: '4',
    email: 'dVader@sith.com'
  }
];

const waitingList = [
  {
    name: 'Han',
    phone: '321.567.8989',
    id: '5',
    email: 'Han@mfalcon.com'
  },
  {
    name: 'r2d2',
    phone: '101.101.0101',
    id: '6',
    email: 'r2d2@deathstar.com'
  }
];

// Routes

// Basic route that sends the user first to the AJAX Page

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.get('/tables', (req, res) => res.sendFile(path.join(__dirname, 'tables.html')));

app.get('/api/tables', (res) => res.json(currentReservations, waitingList));

app.get('/reservations', (req, res) => res.sendFile(path.join(__dirname, 'reservations.html')));


// Create New Characters - takes in JSON input
app.post('/api/tables', (req, res) => {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  const newTable = req.body;
  const confirmation;


  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  if (currentReservations.length<5){
    confirmation = true
    currentReservations.push(newTable)

    res.json(newTable)

    console.log(currentReservations)
  }

  else{
    confirmation = false
    waitingList.push(newTable)
    res.json(newTable)
  }

  // newCharacter.routeName = newCharacter.name.replace(/\s+/g, '').toLowerCase();
  // console.log(newCharacter);

  // res.json(newCharacter);
});

// Starts the server to begin listening

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
