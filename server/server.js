const express = require('express'); 
const bodyParser = require('body-parser'); 
const cors = require('cors'); 

// Configures Application
const app = express();
const PORT = 3001;
app.use(cors());
app.use(bodyParser.json());

// Routes
const homeRoute = require('./routes/home');
const page1Route = require('./routes/page1'); 
const signupRoute = require('./routes/signup'); 

// Use Routes
app.use('/', homeRoute);
app.use('/page1', page1Route);
app.use('/signup', signupRoute);

// Starts Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
