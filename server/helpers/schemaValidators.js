const v = require('validator');

const tools = require('./invoiceTools');


/*
 * An example of what is passed during validation:
 * Passed to a validator:
 * [
 *   67333,
 *   {
 *     message: 'Yikes.',
 *     type: 'user defined',
 *     validator: [Function: zipValidator],
 *     path: 'zip',
 *     value: 67333
 *   }
 * ]
 * 
 * Passed to an error handler:
 * {
 *   validator: [Function: zipValidator],
 *   message: [Function: zipErrorHandler],
 *   type: 'user defined',
 *   path: 'zip',
 *   value: 67333
 * }
 */

const getZipValidator = () => {
  return {
    validator: (value, ...props) => {
      return v.isPostalCode(value, 'US');
    },
    message: (...props) => {
      return 'Zip must be formated as 12345 or 12345-1234.';
    }
  };
};

const getStateValidator = () => {
  return {
    validator: (value, ...props) => {
      return tools.isStateAbbr(value);
    },
    message: (...props) => {
      return 'State must be valid, two-characters, and uppercase (ex: OK)'
    }
  };
};


module.exports = { getStateValidator, getZipValidator };
