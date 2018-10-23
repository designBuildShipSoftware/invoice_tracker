const express = require('express');

const {
  addCompany,
  getAllCompanies,
  getCompanyById,
  updateCompanyById
} = require('../controllers/companyController');


const router = express.Router();

router.route('/api/companies')
  .get(getAllCompanies)
  .post(addCompany);

router.route('/api/companies/:id')
  .get(getCompanyById)
  .patch(updateCompanyById);


module.exports = router;
