const bodyParser = require('body-parser');
const express = require('express');

const companyRoutes = require('./routes/companyRoutes');
const invoiceRoutes = require('./routes/invoiceRoutes');


const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/', companyRoutes);
app.use('/', invoiceRoutes);

// Serve api documentation at root
app.get('/', (req, res) => {
   res.status(200).send('<h1>API Docs</h1>');
})


module.exports = app;