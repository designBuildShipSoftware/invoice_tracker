const validator = require('validator');

const Company = require('../models/CompanyModel');


const addCompany = (req, res) => {
  newCompany = new Company(req.body);
  newCompany.save((err, docs) => {
    if (err) {
      res.status(400).json(err);
    }
    res.status(200).json(docs);
  });
};

const getAllCompanies = (req, res) => {
  Company.find({}, (err, docs) => {
    if (err) {
      res.status(400).json(err);
    }
    res.status(200).json(docs);
  });
};

const getCompanyById = (req, res) => {
    Company.findById(req.params.id, (err, docs) => {
      if (err) {
      res.status(400).json(err);
    }
    res.status(200).json(docs);
  });
};

const updateCompanyById = (req, res) => {
  Company.findByIdAndUpdate(req.params.id, req.body, (err, docs) => {
    console.log(req);
    if (err) {
      res.status(400).json(err);
    }
    res.status(200).json(docs);
  });
};


module.exports = {
  addCompany,
  getCompanyById,
  getAllCompanies,
  updateCompanyById
};