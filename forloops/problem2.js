//Check wheather a function isPrime or not

function isPrime(x) {
    for (let i = 2; i <= x - 1; i += 1) {
      if ( x % i == 0) {
        //we found a number in range [2, x-1] which divides x 
        //hence x is non prime
        return false;
      }
    }

    //we did not find any number in range [2, x-1] which divides x
    //hence x is prime
    return true;
}

console.log(isPrime(12));
  
