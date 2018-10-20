const mongoose = require('mongoose');


// Invoice schema
const InvoiceSchema = new mongoose.Schema({
  companyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company',
    required: true
  }
}, { timestamps: true });


module.exports = mongoose.model('Invoice', InvoiceSchema);
