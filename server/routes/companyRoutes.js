const express = require('express');

const { addCompany, getAllCompanies } = require('../controllers/companyController');


const router = express.Router();

router.route('/api/companies')
  .get(getAllCompanies)
  .post(addCompany);


module.exports = router;
