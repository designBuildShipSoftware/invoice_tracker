const validator = require('validator');

const Company = require('../models/CompanyModel');
const getErrorMessage = require('../helpers/dbErrorHandler');


const addCompany = (req, res) => {
  newCompany = new Company(req.body);
  newCompany.save((err, docs) => {
    if (err) {
      res.status(400).json(getErrorMessage(err));
    }
    res.status(200).json(docs);
  });
};

const getAllCompanies = (req, res) => {
  Company.find({}, (err, docs) => {
    if (err) {
      res.status(400).json(getErrorMessage(err));
    }
    res.status(200).json(docs);
  });
};


module.exports = { addCompany, getAllCompanies };