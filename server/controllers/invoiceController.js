const Invoice = require('../models/InvoiceModel');
const getErrorMessage = require('../helpers/dbErrorHandler');


// Create a new invoice
const addInvoice = (req, res) => {
  const invoice = new Invoice(req.body);
  invoice.save((err, result) => {
    if (err) {
      return res.status(400).json(getErrorMessage(err));
    }
    res.status(200).json(result);
  });
};

// Get all invoices
const getAllInvoices = (req, res) => {
  Invoice.find({}, (err, docs) => {
    if (err) {
      return res.status(400).json(getErrorMessage(err));
    }
    res.status(200).json(docs);
  })
}


module.exports = { addInvoice, getAllInvoices };