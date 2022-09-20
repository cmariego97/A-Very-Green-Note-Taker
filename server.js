// dependencies
const express = require('express');
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');

// Initialize the app and creating the port
const app = express();
const PORT = process.env.PORT || 3001;

// import our routes
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

//starting server on PORT
app.listen(PORT, () => console.log(`Listening to server on ${PORT}`))