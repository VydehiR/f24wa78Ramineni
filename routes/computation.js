// routes/computation.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  let x = req.query.x ? parseFloat(req.query.x) : Math.random();
  let result, functionName;
  const lastDigit = 5; // Mocking an ID digit for function selection

  if (lastDigit === 0 || lastDigit === 1 || lastDigit === 2) {
    functionName = 'Math.atan';
    result = Math.atan(x);
  } else if (lastDigit === 3 || lastDigit === 4 || lastDigit === 5) {
    functionName = 'Math.exp';
    result = Math.exp(x);
  } else {
    functionName = 'Math.expm1';
    result = Math.expm1(x);
  }

  const response = `${functionName} applied to ${x} is ${result}`;
  res.send(response);
});

module.exports = router;
