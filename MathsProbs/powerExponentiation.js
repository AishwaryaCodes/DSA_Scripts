// Return the Power Exponentiation of the num

function powerEx(num, power) {
    if (power === 0) return 1;
  
    if (power % 2 === 0) {
      const half = powerEx(num, power / 2);
      return half * half;
    } else {
      return num * powerEx(num, power - 1);
    }
  }
  

console.log(powerEx(2, 21));