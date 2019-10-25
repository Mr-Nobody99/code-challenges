const inputArray = [1,4,5,9,0,-1,5];

let count = 0;
inputArray.forEach( num => { count += Math.abs(num%2) });
console.log(count);