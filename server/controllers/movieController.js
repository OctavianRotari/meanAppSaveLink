var restful = require('node-restful');

module.exports = function(app, route) {

  //setup the controller for rest
  var rest = restful.model(
    'movie',
    app.models.movie
  ).methods(['get','put','post','delete']);

  //Register this endpoint with the application
  rest.register(aa, route);

  //Return Middleware
  return function(req, res, next) {
    next();
  };
};
