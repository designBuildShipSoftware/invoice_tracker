const express = require('express');

const { addInvoice, getAllInvoices } = require('../controllers/invoiceController');


const router = express.Router();

router.route('/api/invoices')
  .get(getAllInvoices)
  .post(addInvoice);


module.exports = router;