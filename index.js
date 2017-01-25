const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./app/routes/index');
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
routes(app);
const server = app.listen(8080, function() {
  console.log(' Server Started at 8080\n Serving from public/');
});

/** For mongo only **/

// const mongoUrl = 'mongodb://localhost/dnname';
// mongoose.connect(mongoUrl, function(err, res) {
//   if (err) {
//     console.log(' Mongo connection failed');
//   } else {
//     console.log(' Mongo connection success');


//   }
// });