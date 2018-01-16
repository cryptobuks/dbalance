// Initializes the `addresses` service on path `/addresses`
const createService = require('feathers-sequelize');
const createModel = require('../../models/addresses.model');
const hooks = require('./addresses.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'addresses',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/addresses', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('addresses');

  service.hooks(hooks);
};
