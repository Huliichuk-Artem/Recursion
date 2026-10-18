function isPowerOfTwo(n) {
  if (n === 1) return true;
  if (n <= 0 || n % 2 !== 0) return false;
  return isPowerOfTwo((n / 2) | 0);
}

function checkPowerOfTwo(n) {
  if (isPowerOfTwo(n)) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}

checkPowerOfTwo(8); 
checkPowerOfTwo(3); 