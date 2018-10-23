const express = require('express');

const {
  addInvoice,
  deleteInvoiceById,
  getInvoices,
  getInvoiceById,
  updateIvoiceById
} = require('../controllers/invoiceController');


const router = express.Router();

router.route('/api/invoices')
  .get(getInvoices)
  .post(addInvoice);

router.route('/api/invoices/:id')
  .get(getInvoiceById)
  .delete(deleteInvoiceById)
  .put(updateIvoiceById);


module.exports = router;