const express = require('express');
const app = express();
const PORT = 3000;

// Mock function to emulate "last digit of an id" for function selection
function getIdLastDigit() {
  return 5; // This can be changed to simulate different function selections
}

// Computation endpoint
app.get('/computation', (req, res) => {
  // Get `x` from the query or generate a random value
  let x = req.query.x ? parseFloat(req.query.x) : Math.random();
  let result, functionName;

  // Use "last digit of id" to select a function (mocked with getIdLastDigit)
  const lastDigit = getIdLastDigit();

  // Determine which Math function to use based on `lastDigit`
  if (lastDigit === 0 || lastDigit === 1 || lastDigit === 2) {
    functionName = 'Math.atan';
    result = Math.atan(x);
  } else if (lastDigit === 3 || lastDigit === 4 || lastDigit === 5) {
    functionName = 'Math.exp';
    result = Math.exp(x);
  } else if (lastDigit === 6 || lastDigit === 7 || lastDigit === 8 || lastDigit === 9) {
    functionName = 'Math.expm1';
    result = Math.expm1(x);
  }

  // Format the response string
  const response = `${functionName} applied to ${x} is ${result}`;
  res.send(response);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
