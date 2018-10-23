const Invoice = require('../models/InvoiceModel');


// Create a new invoice
const addInvoice = (req, res) => {
  const invoice = new Invoice(req.body);
  invoice.save((err, result) => {
    if (err) {
      return res.status(400).json(err);
    }
    res.status(201).json(result);
  });
};

// Get invoices
const getInvoices = (req, res) => {
  Invoice.find(req.query, (err, docs) => {
    if (err) {
      return res.status(400).json(err);
    }
    res.status(200).json(docs);
  });
};

// Get one invoice by ID
const getInvoiceById = (req, res) => {
  Invoice.findById(req.params.id, (err, docs) => {
    if (err) {
      return res.status(400).json(err);
    }
    res.status(200).json(docs);
  });
};

// Delete an invoice by ID
const deleteInvoiceById = (req, res) => {
  Invoice.findByIdAndDelete(req.params.id, (err, docs) => {
    if (err) {
      return res.status(400).json(err);
    }
    res.status(200).json(docs);
  });
};

// Update an invoice by ID
const updateIvoiceById = (req, res) => {
  Invoice.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, docs) => {
    if (err) {
      return res.status(400).json(err);
    }
    res.status(200).json(docs);
  });
};

// Query invoices
const queryInvoices = (req, res) => {
  console.log(req.queries);
};


module.exports = {
  addInvoice,
  deleteInvoiceById,
  getInvoices,
  getInvoiceById,
  updateIvoiceById
};