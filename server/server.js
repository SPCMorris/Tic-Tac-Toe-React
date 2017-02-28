const path = require('path');
const cors = require('cors');
const moment = require('moment');
const morgan = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

app.use(express.static('./client'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve('client', 'index.html'));
});

app.set('port', process.env.PORT || 9000);
app.listen(app.get('port'), () => {
  console.log('Server is ready on port: ' + app.get('port')+ ' at ' + moment().format('h:mm:ss a'))
})