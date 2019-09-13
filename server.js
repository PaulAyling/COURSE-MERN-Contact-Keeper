const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect Database
connectDB();

// Init Middleware   {to accept body data  res.send(req.body);}
app.use(express.json({ extended: false}));

// After GET REQUEST "HELLO WORLD" 
// app.get('/',(req,res) => res.send('Hello world'))

// After GET REQUEST JSON file delivered 
app.get('/',(req,res) => 
res.json({msg: 'Welcome to the contact keeper API........'}));

// Define routes
app.use('/api/users',require('./routes/users'))
app.use('/api/auth',require('./routes/auth'))
app.use('/api/contacts',require('./routes/contacts'))
//My INFOSHOT
app.use('/api/infoshot',require('./routes/infoshot'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on Port: ${PORT}`));