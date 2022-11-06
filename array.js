let num = [22,23,22,34,34,45,12,78,111];
let nums = [];
for(let x in num){
    if(!nums.includes(x)){
        nums.push(x);
    }
}
console.log(nums.sort((a,b)=>b-a));
// //22,23,34,45,12,78

let arr = [1,2,3,4,5];
console.log(arr.splice(1,4));