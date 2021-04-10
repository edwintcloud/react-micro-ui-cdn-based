/* eslint-disable */
const express = require('express');
const shell = express();
const cdn = express();

cdn.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});
cdn.use(express.static(`${__dirname}/../example_component/dist`));
cdn.listen(5001, () => console.log(`ExampleComponent CDN running on port 5001...`));

shell.use(express.static(`${__dirname}/dist`));
shell.listen(5000, () => console.log(`UI Shell available at http://localhost:5000`));
