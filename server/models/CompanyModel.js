const mongoose = require('mongoose');


const CompanySchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: 'A company name is required.'
  },
  street1: {
    type: String,
    trim: true,
    required: 'A street address is required.'
  },
  street2: {
    type: String,
    trim: true
  },
  city: {
    type: String,
    trim: true,
    required: 'A city is required.'
  },
  state: {
    type: String,
    trim: true,
    required: 'A two character state abbreviation is required.'
  },
  zip: {
    type: Number,
    trim: true,
    required: 'A zip code is required.'
  },
  phones: {
    type: Array
  },
  faxes: {
    type: Array
  },
  emails: {
    type: Array
  },
  contacts: {
    type: Array
  }
}, { timestamps: true });


module.exports = mongoose.model('Company', CompanySchema);
