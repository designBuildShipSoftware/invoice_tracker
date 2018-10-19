const express = require('express');

const { addInvoice, getInvoices } = require('../controllers/invoiceController');


const router = express.Router();

router.route('/api/invoices')
  .get(getInvoices)
  .post(addInvoice);


module.exports = router;