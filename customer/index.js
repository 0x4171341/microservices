const express = require('express');

const app = express();
app.use(express.json());

app.use('/', (req, res, next) => {
  return res.status(200).json({ msg: 'Hello from Customer' });
});

app.listen(8001, () => {
  console.log('Customer is running on port 8001');
});
