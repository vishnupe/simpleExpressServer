const sampleAPI = require('./sample.router');


module.exports = function(app) {
  app.use('/', sampleAPI);
  //app.use('/chat', chatAPI);
};