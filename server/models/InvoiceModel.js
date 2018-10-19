const mongoose = require('mongoose');


// Invoice schema
const InvoiceSchema = new mongoose.Schema({
  companyName: {
    type: String,
    trim: true,
    required: 'A company name is required.'
  },
  companyStreet1: {
    type: String,
    trim: true,
    required: 'A street address is required.'
  },
  companyStreet2: {
    type: String,
    trim: true
  },
  companyCity: {
    type: String,
    trim: true,
    required: 'A city is required.'
  },
  companyState: {
    type: String,
    trim: true,
    required: 'A state is required.'
  },
  companyZip: {
    type: Number,
    trim: true,
    required: 'A zip code is required.'
  },
  companyPhone: {
    type: Number,
    trim: true
  },
  companyEmail: {
    type: String,
    trim: true
  }
}, { timestamps: true });


module.exports = mongoose.model('Invoice', InvoiceSchema);
