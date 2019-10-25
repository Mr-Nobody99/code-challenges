`Given an array of n positive integers and a positive integer s, 
find the minimal length of a contiguous subarray for which the sum >= s. 
if none return 0.`

function solution(arr, s){
    let i = 0, l = 2
    while(l<arr.length){
        if(i <= arr.length - l){
            let temp = arr.slice(i,i+l)
            let sum = temp.reduce((a,c) => a+c)
            if(sum >= s){return temp.length}
            i++
        } else {
            i = 0, l++           
            if(l === arr.length){return 0}
        }
    }
}
console.log(solution([2,3,1,2,4,3], 7))