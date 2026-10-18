function printDigitsRightToLeft(n) {
  process.stdout.write((n % 10) + " ");
  const rest = (n / 10) | 0;
  if (rest > 0) {
    printDigitsRightToLeft(rest);
  }
}

printDigitsRightToLeft(179); 
console.log();