const mongoose = require('mongoose');


// Invoice schema
const InvoiceSchema = new mongoose.Schema({
  buyerName: {
    type: String
  },
  buyerStreet1: {
    type: String
  },
  buyerStreet2: {
    type: String
  },
  buyerCity: {
    type: String
  },
  buyerState: {
    type: String
  },
  buyerZip: {
    type: String
  },
  buyerPhone: {
    type: String
  },
  buyerFax: {
    type: String
  },
  buyerEmail: {
    type: String
  },
  invoiceAmount: {
    type: Number
  },
  invoiceDescription: {
    type: String
  }
}, { timestamps: true });


module.exports = mongoose.model('Invoice', InvoiceSchema);
