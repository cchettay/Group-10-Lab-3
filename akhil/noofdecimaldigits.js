function digits(n) {
  // code goes here
  var count = 0;
  if (n >= 0) count=1;

  while (n / 10 >= 1) {
    
    n /= 10;
    count++;
  }

  return count;
  }