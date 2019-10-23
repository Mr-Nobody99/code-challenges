const readline = require('readline');
const stdin = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

class Utils{
    static factorial(n){
        return n ? n * this.factorial( n - 1 ) : 1; 
    }
    static combo(n, k){
        return this.factorial(n) / (this.factorial(k) * this.factorial(n - k));
    }
}

const list = [];

console.log('\nPlease enter a number or list of numbers seperated by a space or comma:');

stdin.on('line', (input) => {
    if (/exit|done/.test(input)) {
        stdin.close();
        findBigProduct();
    } else if(/[^-,\s\d]/.test(input) || !input.length || !parseInt(input)){
        console.log('Invalid Input!');
        console.log('Please enter a number or list of numbers seperated by a space or comma.');
    } else {
        const nums = input.split(/\s|,/);
        for(const num of nums){
            let x = parseInt(num);
            if(x){
                list.push(x);
            }
        }
        console.log('\nCurrent list:\n[' + list + ']\n');
        console.log('Type exit or done to finish.');
        console.log('Or continue entering number to add to the list');
    }
});

function findBigProduct(){
    let sortedList = list.sort((a,b) => a-b);
    let end = sortedList.length - 1;
    
    let x,y,z;

    if((sortedList[0] * sortedList[1]) > (sortedList[end-2] * sortedList[end-1])){
        x = sortedList[0];
        y = sortedList[1];
    } else {
        x = sortedList[end-2];
        y = sortedList[end-1];
    }

    z = sortedList[end];

    console.log(`\nThe largest possible product of 3 numbers from this list is:  ${x*y*z}`);

    let response = `
\nYou entered a total of ${list.length} numbers...
Putting this list in order we would get 
\n[${sortedList}]\n
With ${list.length} numbers taken 3 at a time, 
there would be a total of ${Utils.combo(list.length, 3)} possible combinations.
Now that may seem like a lot to deal with,
but if you think about it, now that you can see the sorted list you might notice something.
The last 3 numbers in the list,
in this case ${sortedList[end-2]}, ${sortedList[end-1]}, ${sortedList[end]}
will always be the largest,
that also means that their product will also always be the largest,
so problem solved right? well yes...except for negative numbers.
If the list contains 2 negative number whose product is greater than the product of the 2 numbers before the last number of the list,
then we would want to use those 2 negative number with the largest positive number to get the largest product of 3 numbers.
Therefore the largest possible product using 3 of the numbers in the list would be: ${x} * ${y} * ${z} = ${x * y * z}`;

    if(list.length > 6){
        console.log('How do we know this? read on for a more detailed explination');
        console.log(response);
    } else {
        console.log('That was kind of an easy one thought, try entering more than 6 number');
    }
}