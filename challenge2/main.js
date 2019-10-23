const readline = require('readline');
const stdin = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

console.log('\nPlease enter a number or list of numbers seperated by a space or comma:');

const list = [];

stdin.on('line', (input) => {
    if (/exit|done/.test(input)) {
        stdin.close();
        sortList();
    } else if(/[^-,\s\d]/.test(input)){
        console.log('Invalid Input!');
        console.log('Please enter a number or list of numbers seperated by a space or comma.');
    } else {
        const nums = input.split(/\s|,/);
        for(const num of nums){
            let x = parseInt(num);
            if(x || x === 0){
                list.push(x);
            }
        }
        console.log('\nCurrent list:\n[' + list + ']\n');
        console.log('Type exit or done to finish.');
        console.log('Or continue entering number to add to the list');
    }
});

function sortList(){
    for(const num of list){
        if(num === 0){
            list.splice(list.indexOf(num), 1);
            list.push(0);
        }
    }
    console.log(list);
}