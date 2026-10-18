function printDigitsLeftToRight(n) {
  const rest = (n / 10) | 0;
  if (rest > 0) {
    printDigitsLeftToRight(rest);
  }
  process.stdout.write((n % 10) + " ");
}

printDigitsLeftToRight(179); 
console.log();