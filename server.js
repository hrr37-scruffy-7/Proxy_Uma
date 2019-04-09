const express = require('express');
var morgan = require('morgan')
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});