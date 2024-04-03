const express = require('express'); 
const bodyParser = require('body-parser'); 
const cors = require('cors'); 
const path = require('path');

// Configures Application
const app = express();
const PORT = 3001;
app.use(cors());
app.use(bodyParser.json());
app.use('/media', express.static(path.join(__dirname, 'media')));

// Routes
const homeRoute = require('./routes/home');
const page1Route = require('./routes/page1'); 
const signupRoute = require('./routes/signup'); 
const loginRoute = require('./routes/login'); 
const profileRoute = require('./routes/profile');
const userRoute = require('./routes/user');
const feedRoute = require('./routes/feed');
const followRoute = require('./routes/follow');

// Use Routes
app.use('/', homeRoute);
app.use('/page1', page1Route);
app.use('/signup', signupRoute);
app.use('/login', loginRoute);
app.use('/profile', profileRoute);
app.use('/user', userRoute);
app.use('/feed', feedRoute);
app.use('/follow', followRoute);

// Starts Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
