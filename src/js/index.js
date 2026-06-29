function sum(x, y) {
  return x + y;
}

sum(10, 20);

function multiply(x, y) {
  return x * y;
}

multiply(10, 20);

function divide(x, y) {
  if (y === 0) {
    throw new Error("Cannot divide by zero");
  }
  return x / y;
}

divide(10, 2);
