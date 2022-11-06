/* ===== Take a string
         replace all the vowels with * & Consonants with # and return the final string.
         Eg:  Input: 'abcde'
         Output: '###' ===== */


/* =====(1)strInterchange===== */


// function strInterchange(str){
//     str.toLowerCase;
//     let newStr = '';
//     let vowels = ['a','e','i','o','u'];
//     for(let i = 0; i < str.length; i++){
//         if(vowels.includes(str[i])){
//             newStr += '*';
//         }else if(str[i]===' '){
//             newStr += ' ';
//         }else{
//             newStr += '#';
//         }
//     }
//     return newStr;
// }
// console.log(strInterchange('I   am   Sanjeev   Kumar'));


/* =====(2)sumMultiple===== */


// function sumMultiple(n,m){
    //your idea here
      
    //   if(m<=0 || n<=0){
    //     return 'INVALID';
    //   }else{
    //      let sum = 0;
    //      for(let i = n ; i < m ; i = i+n){
    //       sum += i
    //     }
    //     return sum;
    //   }
    // }
    // console.log(sumMultiple(9,0));


/* =====(3)digitize===== */


    // function digitize(n) {
    //     let num = n;
    //     let arr = [];
    //     do{
    //       arr.push(num%10)
    //       num = Math.floor(num/10);
    //     }while(num>0)
    //     return arr;

    //     /* =====correct===== */

    //     let num1 = n;
    //     let arr1 = [];
    //     while(num1 >= 1){
    //         arr1.push(num1%10);
    //         num1 = Math.floor(num1/10);            
    //     }
    //     return arr1;
    // }
    // console.log(digitize(0));


/* =====(4)placeValue===== */


// function placeValue(n){
//     let str = String(n);
//     let finalStr = '';
//     let number = n;
//     for(let i = 0; i < str.length; i++){
//         let num =  number%10;
//         number = Math.floor(number/10);
//         num = num*(10**i);
//         if(i === str.length-1){
//             finalStr = num + finalStr;
//         }else{
//             finalStr = ' + '+num + finalStr;
//         }
//     }
//     return finalStr;
// }
// console.log(placeValue(786654));


/* =====(5)howManyGames===== */


// function howManyGames(p, d, m, s) {
//     // Return the number of games you can buy

//     let count = 0;
//     let cost = p;
//     let spend = 0;
//     while((s-spend) >= m && cost > m){
//         spend += cost;
//         cost = cost - d;
//         count++;
//     }
//     while(cost <= m && (s-spend) >= m){
//         spend += m;
//         count++;
//     }
//     return count;

// }
// console.log(howManyGames(10,5,5,80));


// function howManyGames(p, d, m, s) {
//     // Return the number of games you can buy
//     let cost = p;
//     let count = 0;
//     while(cost <= s){
//         p = p - d;
//         if(p <= m){
//           cost = cost + m;
//           count++;
//         }else{
//           cost = cost + p;
//           count++;
//         }        
//     }
//     return count;

// }
// console.log(howManyGames(20,3,6,85));


/* =====(6)minimumNumber===== */


// function minimumNumber(password) {
//     // Return the minimum number of characters to make the password strong

//     let strong = 0;
//     let lcase = 0;
//     let ucase = 0;
//     let num = 0;
//     let sp = 0;
//     let lowLetters = 'abcdefghijklmnopqrstuvwxyz';
//     let upLetters = lowLetters.toUpperCase();
//     let nums = '0123456789';
//     let special = '!@#$%^&*()-+';
    
//     for(let i = 0; i < password.length; i++){
//         if(lowLetters.includes(password[i]) && lcase == 0){
//             strong++;
//             lcase++;
//         }if(upLetters.includes(password[i]) && ucase == 0){
//             strong++;
//             ucase++;
//         }if(nums.includes(password[i]) && num == 0){
//             strong++;
//             num++;
//         }if(special.includes(password[i]) && sp == 0){
//             strong++;
//             sp++;
//         }
//     }

//     if(password.length >= 6){
//         return 4-strong;
//     }if(password.length < 6){
//         return Math.max((6-password.length),(4-strong));
//     }

// }
// console.log(minimumNumber('Aregjeroger89guer9'));


/* =====(7)equalizeArray===== */


// function equalizeArray(arr) {
//   // Write your code here
//   let max = -Infinity;
//   let empty = {};    
//   for(let i = 0; i < arr.length; i++){
//       if(empty[arr[i]] == undefined){
//           empty[arr[i]] = 1; 
//       }else{
//           empty[arr[i]]++;;            
//       }
//   }
//   for(let el in empty){
//       if(empty[el]>max){
//           max = empty[el];
//       }
//   }
//   return (arr.length - max);

// }
// console.log(equalizeArray([11,11,11,23,23,55]));


/* =====(8)cloudOverTheJump===== */


// function jumpingOnClouds(c){
//     let n = c.length;
//     let count = 0;
//     let index = 0;
//     while(index<n){
//         if(c[index+2] === 0){
//             index += 2;
//             count++;
//         }else if(c[index+1] === 0){
//             index++;
//             count++;
//         }else{
//             index++;
//         }
//     }
//     return count;
// }
// console.log(jumpingOnClouds([0, 0, 0, 1, 0, 0, 1, 0]));


/* =====(9)serviceLane ===== */


// function serviceLane(n, cases) {
//     // Write your code here
//     let store = '';
//     for(let i = 0; i < cases.length; i++){
//         let min = Infinity;
//         for(let j = cases[i][0]; j <= cases[i][1]; j++){
//             if(n[j]<min){
//                 min = n[j];
//             }
//         }
//         store += min +'\n';
//     }
//     return store;
// }
// console.log(serviceLane([2, 3, 1, 2, 3, 2, 3, 3],[[0, 3], [4, 6], [6, 7], [3, 5], [0, 7]]));


/* =====(10)luckBalance===== */


// function luckBalance(n,k, contests) {
//     // Write your code here
//     let arr = [];
//     let looseSum = 0;
//     let winSum = 0;
//     for(let i = 0; i < n; i++){
//         if(contests[i][1] == 1){
//             arr.push(contests[i][0]);
//             looseSum += contests[i][0];
//         }else{
//             looseSum += contests[i][0];
//         }
//     }
//     arr.sort((a,b)=>a-b);
//     let p = (arr.length-k)
//     if(p>0){
//         for(let j = 0; j < p; j++){
//             winSum += (arr[j]*2);
//         }
//     }else{
//         return looseSum;
//     }
//     looseSum -= winSum;
//     return looseSum;
// }
// console.log(luckBalance(6,3,[[5, 1], [2, 1], [1, 1], [8, 1], [10, 0], [5, 0]]));


/* =====(11)BigSorting===== */


// let arr = [5,9,6,8,2,7]
// for(let i = 0; i < arr.length; i++){
//     for(let j = 0; j < arr.length-i-1;j++){
//         if(arr[j]>arr[j+1]){
//             let temp = arr[j];
//             arr[j] = arr[j+1];
//             arr[j+1] = temp;
//         }
//     }
// }
// console.log(arr);


/* =====(12)selectionSort===== */


// function selectionSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//       let lowest = i
//       for (let j = i + 1; j < arr.length; j++) {
//         if (arr[j] < arr[lowest]) {
//           lowest = j
//         }
//       }
//       if (lowest !== i) {
//         [arr[i], arr[lowest]] = [arr[lowest], arr[i]]
//       }
//     }
//     return arr
//   }
//   console.log(selectionSort([3, 5, 1, 2])) // [1, 2, 3, 5]


/* =====(13)squares===== */


// function squares(a, b) {
//     // Write your code here
//     let start = a;
//     while(!Number.isInteger(Math.sqrt(start))){
//         start++;
//     }
//     let num = Math.sqrt(start);
//     let end = Math.floor(Math.sqrt(b));
//     let ans = end-num;
//     return ans;

// }
// console.log(squares(100,1000))


/* =====(14)Circular array rotation===== */


// function circularArrayRotation(a, k,queries) {
//     // Write your code here
//     let rotation = k%(a.length);
//     let arr = [];
//     let store = [];
//     for(let i = a.length-rotation; i < a.length; i++){
//         arr.push(a[i]);
//     }
//     for(let j = 0; j < (a.length-rotation); j++){
//         arr.push(a[j]);
//     }
//     for(let l = 0; l < queries.length; l++){
//         store.push(arr[queries[l]]);
//     }
//     return store.join('\n');

// }
// console.log(circularArrayRotation([6,9,8,11,15],3,[2,3,4]));


// let grid = ['hello','world','sanjeev'];
// let arr = [];

// for(let i = 0; i < grid.length; i++){
//     let el = grid[i].split('');
//     let elem = el.sort();
//     let element = elem.join('');
//     arr.push(element);
// }
// console.log(arr);


/* =====(15)migratoryBirds===== */


// function migratoryBirds(arr) {
//     // Write your code here
//     let max = -Infinity;
//     let fkey;
//     let obj = {} ;
//     for(let i = 0 ; i < arr.length ; i++){
//         if(obj[arr[i]] == undefined){
//             obj[arr[i]] = 1 ;
//         }else{
//             obj[arr[i]] += 1 ;
//         }
//     }
//     for(let el in obj){
//         if(obj[el] > max){
//             max = obj['el'];
//             fkey = el;
//         }else if(obj['el'] == max && fkey > el){
//             fkey = el;
//         }
//     }
//     return fkey;

// }
// console.log(migratoryBirds([4,4,2,2,3]));


/* =====(16)superDigit===== */


// function superDigit(n, k) {
//     // Write your code here
    // n = n*k;
    // function findSum(num){
    //     if(num < 10){
    //        return num;
    //     }
    //     let lastDigit = num % 10;
    //     let remainingNum = Math.floor(num / 10);
    //     let sum = findSum(lastDigit + findSum(remainingNum));
    //     return sum;
    //  }
    // let ans = findSum(n);
    // return ans;
// }
// console.log(superDigit(148,3));


/* =====(17)acmTeam===== */


// function acmTeam(topic) {
//     // Write your code here
//     let obj = {};
//     for(let i = 0; i < topic.length-1; i++){
//         for(let j = i+1; j < topic.length; j++){
//             let count = 0;
//             for(let k = 0; k < topic[0].length; k++){
//                 if(topic[i][k] == 1 || topic[j][k] == 1){
//                     count++;
//                 }
//             }
//             if(obj[count] == undefined){
//                 obj[count] = 1;
//             }else{
//                 obj[count] += 1;
//             }
//         }
//     }
//     let max = -Infinity;
//     let noOfTeams;
//     for(let el in obj){
//         if(Number(el) > max){
//             max = el;
//             noOfTeams = obj[el];
//         }
//     }
//     return [+max,noOfTeams];

// }
// console.log(acmTeam([[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,1],[1,1,1,1,0]]));


/* =====(18)anagram===== */


// function anagram(s) {
//     // Write your code here
//     let n = s.length;
//     if(n%2 != 0){
//         return -1;
//     }else{
//         let arr1 = s.slice(0,n/2).split('');
//         let arr2 = s.slice(n/2).split('');
//         let count = 0;
//         for(let i = 0; i < n/2; i++){
//             if(arr1.includes(arr2[i])){
//                 let ind = arr1.indexOf(arr2[i]);
//                 arr1.splice(ind,1);
//             }else{
//                 count++;
//             }
//         }
//         return count;
//     }

// }
// console.log(anagram('xaxbbbxx'));


/* =====(19)fairRations===== */


// function fairRations(B) {
//     // Write your code here
//     let count = 0; 
//     for(let i = 0; i < B.length; i++){
//         if(B[i]%2 != 0){
//             count++;
//         }
//     }
//     if(count%2 != 0){
//         return 'NO';
//     }else{
//         let counter = 0;
//         let j = 0;
//         while(j < B.length){
//             if(B[j]%2 != 0){
//                 B[j+1] += 1;
//                 counter++;
//                 j++;
//             }else{
//                 j++;
//             }
//         }
//         return counter*2;
//     }

// }
// console.log(fairRations([2, 3, 4, 5, 6] ));


/* =====(20)XOR===== */


// function sumXor(n) {
//     // Write your code here
//     let b1 =  n.toString(2);
//     let count = 0;
//     for(let i = 0; i <= n; i++){
//         let b2 = +(i.toString(2));
//         let sum1 = n+i;
//         let sum2 = (b1^b2);
//         let sum3 = +(sum1.toString(2));

//         if(sum3 === sum2){
//             count++;
//         }
//         console.log(sum3,sum2,i,b2);
//     }
//     return count;

// }
// console.log(sumXor(10));


/* =====(21)cutTheSticks===== */


// function cutTheSticks(arr) {
//     // Write your code here
//     arr.sort((a,b)=>a-b);
//     let ans = [];
//     while(arr.length > 0){
//         let d = arr[0];
//         let i;
//         let count = 0;
//         for(let j = 0; j < arr.length; j++){
//             arr[j] = arr[j] - d;
//             count++;
//             if(arr[j] == 0){
//                 i = j;
//             }
//         }
//         ans.push(count);
//         arr = arr.slice(i+1);
//         console.log(arr,count);

//     }
//     return ans;

// }
// console.log(cutTheSticks([5, 4, 4, 2, 2, 8]));


/* =====(22)kaprekarNumbers===== */


// function kaprekarNumbers(p, q) {
//     // Write your code here
//     let str = '';
//     let count = 0;
//     for(let i = p; i <= q; i++){
//         let num = (i**2).toString();
//         let n = num.length;
//         let a = Number(num.slice(0,n/2));
//         let b = Number(num.slice(n/2));
//         let sum = a+b;
//         if(i == sum){
//             str += i + ' ';
//             count++;
//         }
//     }
//     if(count == 0){
//         console.log('INVALID RANGE');
//     }else{
//         console.log(str);
//     }

// }
// console.log(kaprekarNumbers(1,100));


/* =====(23)gameOfThrones-I===== */


// function gameOfThrones(s) {
//     // Write your code here
//     let obj = {};
//     for(let i = 0; i < s.length; i++){
//         if(obj[s[i]] == undefined){
//             obj[s[i]] = 1;
//         }else{
//             obj[s[i]] += 1;
//         }
//     }
//     let count = 0;
//     for(let el in obj){
//         if(obj[el]%2 != 0){
//             count++;
//         }
//     }
//     if(count>1){
//         return 'NO';
//     }else{
//         return 'YES';
//     }

// }
// console.log(gameOfThrones('aaabbbb'));


/* =====(24)happyLadybugs===== */


// function happyLadybugs(b) {
//     // Write your code here
//     let obj = {};
//     let underScore = false;
//     let  nEqual = false;        
//     for(let i = 0; i < b.length; i++) {
//         if(b[i] === '_') {
//             underScore = true;
//             continue;
//         }
        
//         if(!obj[b[i]]) obj[b[i]] = 0;
//         obj[b[i]]++;
//     }
    
//     if(!underScore) {
//         for(let i = 1; i < b.length - 1; i++) {
//             if( b[i - 1] !== b[i] && b[i] !== b[i + 1]){
//                 return 'NO';
//             }
//         }   
//     }

//     for(const [key, value] of Object.entries(obj)) {
//         if(value === 1){
//             return 'NO';
//         }
//     }
//     return 'YES';

// }
// console.log(happyLadybugs('X_Y__X'));


/* =====(25)sherlockAndTheBeast===== */


// function decentNumber(n) {
//     // Write your code here
//     let fives = n;
//     let threes = 0;
//     let arr = [];
//     let flag = false;
//     while(threes <= n){
//       if(fives % 3 === 0 && threes % 5 === 0){
//         arr.push(fives);
//         arr.push(threes);
//         flag = true;
//         break;
//       }else{
//         threes += 5;
//         fives -= 5;
//       }
//     }
//     let str = '';
//     if(flag == true){
//         for(let i = 0; i < fives; i++){
//             str += '5';
//         }
//         for(let j = 0; j < threes; j++){
//             str += '3';
//         }
//         console.log(str);
//     }else{
//         console.log(-1);
//     }
//     return str;

// }
// console.log(decentNumber(16));


/* =====(26)countingSort===== */


// function countingSort(arr) {
//     // Write your code here
//     arr.sort((a,b)=>a-b);
//     let obj = {};
//     for(let i = 0; i < arr.length; i++){
//         obj[i] = 0;
//     }
//     for(let i = 0; i < arr.length; i++){
//         obj[arr[i]] += 1;
//     }
//     let ans = [];
//     for(let el in obj){
//         ans.push(obj[el]);
//     }

//     return ans;

// }
// console.log(countingSort([9,8,7,7,8,4,3,3,7,9]));


/* =====(27)validateSubSequence(1)===== */


// function validateSubSequence(arr,sub){
//     let count = 0;
//     for(let i = 0; i < sub.length; i++){
//         if(arr.includes(sub[i])){
//             let ind = arr.indexOf(sub[i]);
//             arr = arr.slice(ind+1);
//             count++;
//         }
//     }
//     if(count == sub.length){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(validateSubSequence([5,1,22,25,6,-1,10],[1,6,-1,10]));


/* =====validateSubSequence(2)===== */


// function validateSubSequence(arr,sub){
//     let i = 0;
//     let j = 0;
//     while(j < arr.length && i < sub.length){
//         if(sub[i] == arr[j]){
//             i++;
//             j++;
//         }else{
//             j++;
//         }
//     }
//     if(i == sub.length){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(validateSubSequence([5,1,22,25,6,-1,10],[1,6,-1,10]));


/* =====(28)problem===== */


/* ===== Given an integer array nums of length n and an integer target, find three integers in nums
        such that the sum is closest to the target.

        You need to return the sum of three integers.

        For example:arr = [-1, 2, 1, -4], target = 1
        Output: 2
        Explanation: [-1+2+1] = 2 (The sum that is closest to the target is 2) ===== */


// function closestInteger(target,arr){
//     let ans = [];
//     let closest = Infinity;
//     for(let i = 0; i < arr.length-2; i++){
//         let arr1 = [];
//         for(let j = i+1; j < arr.length; j++){
//             let sum = arr[i] + arr[j] + arr[j+1];
//             let diff = (sum - target);
//             if(sum > 0 && diff < closest){
//                 closest =  diff;
//                 arr1.push(arr[i]);
//                 arr1.push(arr[j]);
//                 arr1.push(arr[j+1]);
//             }
//         }
//         ans = arr1;
//     }
//     return ans;
// }
// console.log(closestInteger(1,[-1, 1, -4, 2]));



/* =====(29)getMinimumCost===== */


// function getMinimumCost(k, c) {
//     c.sort((a,b)=>b-a);
//     let total = 0;
//     for(let i = 0; i < c.length; i++){
//         let fr = Math.floor((i)/k);
//         total += (fr+1)*c[i];
//     }
//     return total;
// }
// console.log(getMinimumCost(2,[2,5,6]));


/* =====(30)makingAnagrams===== */


// function makingAnagrams(s1, s2) {
//     // Write your code here
//     let arr1 = s1.split('');
//     let arr2 = s2.split('');
//     let n = arr1.length;
//     for(let i = 0; i < arr1.length; i++){
//         if(arr2.includes(arr1[i])){
//             let ind = arr2.indexOf(arr1[i]);
//             arr2.splice(ind,1);
//             n--
//         }
//     }
//     let total = n+arr2.length;
//     return total;

// }
// console.log(makingAnagrams('abc','cde'));


/* =====(31)inserrtionSort===== */


// function insertionSort(arr){
//     let key;
//     let j;
//     let count = 0; 
//     for (let i = 1; i < arr.length; i++)
//     { 
//         key = arr[i]; 
//         j = i - 1; 
//         while (j >= 0 && arr[j] > key)
//         { 
//             arr[j + 1] = arr[j]; 
//             j--; 
//             count++;
//         } 
//         arr[j + 1] = key; 
//     } 
//     return count;
// }
// console.log(insertionSort([2, 1, 3, 1, 2]));


/* =====(32)counterGame===== */


// function counterGame(n) {
//     // Write your code here
//     let N = n;
//     let count = 0;
//     while(N > 1){
//         let p = Math.log2(N);
//         if(Number.isInteger(p)){
//            N = N/2;
//            count++;
//         }else{
//             N = N - (2**Math.floor(p));
//             count++;
//         }
//     }
//     if(count%2 == 0){
//         return 'Richard';
//     }else{
//         return 'Louise';
//     }

// }
// console.log(counterGame(132));


/* =====(32)===== */


// function balancedSums(arr) {
//     // Write your code here
//     if (arr.length > 1) {
//         var sum = 0;
//         for (let j=0; j<arr.length; j++) {
//             sum += arr[j];
//         }
//         let sumLeft = 0;
//         let sumRight = 0;
//         for (var j=1; j<arr.length - 1; j++) {
//             sumLeft += arr[j-1];
//             sumRight = sum - sumLeft - arr[j];

//             if (sumLeft === sumRight) {
//                 break;
//             }
//         }

//         if (j < arr.length - 1) {
//             return 'YES';
//         }
//         else {
//             return 'NO';
//         }
//     }
//     else {
//         return 'YES';
//     }
    
// }
// console.log(balancedSums([2,0,0,0,]));


/* =====(33)modifiedstring===== */


// function modified(str){
//     let obj = {};
//     for(let i = 0; i < str.length; i++){
//         if(obj[str[i]] === undefined){
//             obj[str[i]] = 1;
//         }else{
//             obj[str[i]] += 1;
//         }
//     }
//     let ans = '';
//     for(let el in obj){
//         if(obj[el] > 1){
//             ans += el;
//             ans += obj[el];
//         }else{
//             ans += el;
//         }
//     }
//     return ans;
// }
// console.log(modified('ahaee'));


/* =====(34)harryPorter===== */


// function harryPorter(str,m,n){
//     let s = str;
//     let newStr = str.split('');
//     let count = 0;
//     do{
//         let first = s.slice(s.length-m);
//         newStr.splice(s.length-m);
//         newStr.unshift(first);
//         s = newStr.join('');
//         let second = s.slice(s.length-n);
//         newStr.splice(s.length-n);
//         newStr.unshift(second);
//         s = newStr.join('');
//         newStr = s.split('');
//         count++;
//         let ans = s;
//     }while(s != str);
//     return count;

// }
// console.log(harryPorter('AbcDefhju',1,2));


/* =====(35)ansKey===== */


// function ans(key,answer){
//     let count = 0;
//     for(let i = 0; i < key.length; i++){
//         if(key[i] === answer[i]){
//             count += 4;
//         }else if(answer[i] === ' '){
//             count += 0;
//         }else if(key[i] !== answer[i]){
//             count -= 1;
//         }
//     }
//     return count;
// }
// console.log(ans('aabb','aabc'));


/* =====(36)flippingMatrix===== */


// function flippingMatrix(matrix) {
//     // Write your code here
//     let n1 = matrix.length;
//     let n2 = n1/2;
//     let sum = 0;
//     for(let i = 0; i < n2; i++){
//         let max;
//         for(let j = 0; j < n2; j++){
//             let el = matrix[i][j];
//             max = el;
//             if(max < matrix[i][n1-1-j]){
//                 max = matrix[i][n1-1-j];
//             }if(matrix[n1-1-i][j] > max){
//                 max = matrix[n1-1-i][j];
//             }if(max < matrix[n1-1-i][n1-1-j]){
//                 max = matrix[n1-1-i][n1-1-j];
//             }
//             sum += max;
//         }
//     }   
//     return sum;

// }
// console.log(flippingMatrix([[112, 42, 83, 119],[56, 125, 56, 49],[15, 78, 101, 43],[62, 98, 114, 108]]));


/* =====(37)Upper&&Lower===== */


// function upperLower(str){
//     let s = '';
//     for(let i = 0; i < str.length; i++){
//         let charcode = str.charCodeAt(i);
//         if(charcode >= 65 && charcode <= 90){
//             s += String.fromCharCode(charcode+32);
//         }else if(charcode >= 97 && charcode <= 122){
//             s += String.fromCharCode(charcode-32);
//         }else{
//             s += str[i];
//         }
//     }
//     return s;

// }
// console.log(upperLower('India is Great'));


/* =====(38)longestCommonPrefix===== */


// function longestCommonPrefix(arr){
//     let s = arr[0];
//     let str = '';
//     let ans = '';
//     for(let i = 0; i < s.length; i++){
//         str += s[i];
//         console.log(arr.every((x)=>x[i].includes(str)))
//         // if(arr.every((x)=>x.includes(str))){
//         //     ans += s[i];
//         // }else{
//         //     if(ans.length == 0){
//         //         return -1;
//         //     }else{
//         //         return ans;
//         //     }
//         // }
//     }
//     if(ans.length == s.length){
//         return ans;
//     }
// }
// console.log(longestCommonPrefix(['dmlrpjyatcoqotxzplqmlptaipczhlikztcofaoaedruyqundkzqatqkkvjrgucineyugnxmsohsgdfmngcpbvamqldyfhgvnfrv', 'oioerglunzjvbzxwblooqnuytrnyijuxtibkoogdppzrqyptjeizrezmvnnfyherqidgyjkoyjfrhwkscsrvytivivbgcfxupab', 'llclwjcdfpvijodijndriexnmwhbyiplvtxrcbwkqtsaixitn', 'lvskkgjujheztaustxtqhklbkvyupnhajbmvhvprfusawmspjlhsvtthouddhlfsmsqwpfpubhuzvmrhaazx']));
// ['geeksforgeeks', 'geeks', 'geek', 'geezer']


/* =====(39)romanToDecimal===== */


// function romanToDecimal(str){
//     let roman = ['I','V','X','L','C','D','M'];
//     let decimal = [1,5,10,50,100,500,1000];
//     let total = 0;
//     let pre = -1;
//     for(let i = str.length-1; i >= 0; i--){
//         let digit = roman.indexOf(str[i]);
//         if(pre <= digit){
//             total += decimal[digit];
//             pre = digit;
//         }else{
//             total -= decimal[digit];
//             pre = digit;
//         }
//     }   
//     return total; 
// }
// console.log(romanToDecimal('MMMCMXCIX'));


/* =====(40)decimalToRoman===== */


// function decimalToRoman(){

// }
// console.log(decimalToRoman(587));


/*=====(41)isRotated===== */


// function isRotated(str1, str2){
//      // code here
//      let similar1 = str1.slice(2);
//      let similar3 = str1.slice(0,2);
//      similar1 += similar3;
//      let similar2 = str1.slice(0,-2);
//      let similar4 = str1.slice(-2);
//      similar4 += similar2;
//      console.log(similar1,similar4,str2,str1)
//      if(similar1 == str2 || similar4 == str2){
//          return 1;
//      }else{
//          return 0;
//      }        
// }
// console.log(isRotated('fsbcnuvqhffbsaqxwp','wpfsbcnuvqhffbsaqx'));


/*=====(42)checkPelindrome===== */


// function checkPangram(str){
//     // code here
//     let lower = 'abcdefghijklmnopqrstuvwxyz';
//     let str1 = str.toLowerCase();
//     console.log(str1)
//     for(let i = 0 ; i < lower.length; i++){
//         if(!str1.includes(lower[i])){
//             return 0
//         }
//     }
//     return 1;
// }
// console.log(checkPangram('Bawds jog, flick quartz, vex nymph'));


/* =====(43)longestCommonPrefix===== */


// function longestCommonPrefix(arr,n){ 
//     //code here
//     let strlength = [];
//     for(let i = 0; i < arr.length; i++){
//         strlength.push(arr[i].length);
//     }
//     strlength.sort((a,b)=>a-b);
//     // console.log(strlength);
//     let prefx = '';
//     for(let j = 0; j < strlength[0].length; j++){
//         prefx = arr[0][j];
//         console.log(prefx)
//         if(!arr.every(x=>x.slice(0,prefx.length)==prefx)){
//             if(prefx.length == 1){
//                 return -1;
//             }else{
//                 return prefx.slice(0,-1);
//             }
//         }
//     }
// }
// console.log(longestCommonPrefix(['geeksforgeeks', 'geeks', 'geek','geezer'],4));


/* =====(44)areIsomorphic===== */


// function areIsomorphic(str1, str2){
//     // code here
//     // let st1 = str1+str2;
//     // let st2 = str2+str1;
//     let obj1 = {};
//     for(let i = 0; i < str1.length; i++){
//         if(obj1[str1[i]] == undefined){
//             obj1[str1[i]] = str2[i];
//         }else if(obj1[str1[i]] != str2[i]){
//             return 0;
//         }
//     }
//     return 1;
// }
// console.log(areIsomorphic('xudzhi','ftakcz'));



/* ===== ===== */


// function atoi(s){
//     //code here
//     if(s[0] == '-'){
//         for(let i = 1; i < s.length; i++){
//             if(isNaN(+s[i])){
//                 return -1;
//             }
//         }
//         return (-1)*(+s);
//     }else{
//         for(let i = 0; i < s.length; i++){
//             if(isNaN(+s[i])){
//                 return -1;
//             }
//         }
//         return +s;
//     }
// }
// console.log(atoi('-508983'));


/* =====(45)secondLargest===== */


// function print2largest(arr,n){
//     //code here
//     let ans = [];
//     arr.sort((a,b)=>b-a);
//     let j = -1;
//     for(let i = 0; i < arr.length; i++){
//         if(!ans.includes(arr[i])){
//             ans.push(arr[i]);
//             j++;
//         }if(j == 1){
//             break;
//         }
//     }
//     if(ans.length < 2){
//         return -1;
//     }else{
//         return ans[1];
//     }    
// }
// console.log(print2largest([12, 35, 1, 10, 34, 1],6));


/* =====(46)frequencyCount===== */


// function frequencyCount(str){
//     let obj = {};
//     for(let i = 0; i < str.length; i++){
//         if(obj[str[i]] === undefined){
//             obj[str[i]] = 1;
//         }else{
//             obj[str[i]] += 1;
//         }
//     }
//     let ans = '';
//     for(let el in obj){
//         ans += el;
//         ans += obj[el];
//     }
//     return ans;
// }
// console.log(frequencyCount('aabbccdd'));


/* =====(47)maximumUnits===== */


// function maximumUnits(boxTypes, truckSize) {
//     boxTypes.sort((a,b)=>(b[1]-a[1]));
//     let boxes = 0;
//     let result = 0;
//     for(let i = 0; (i < boxTypes.length) && (boxes < truckSize); i++){
//         // for(let j = 0; (j < boxTypes[i][0]) && (boxes < truckSize); j++){
//         //     boxes++;
//         //     result += (boxTypes[i][1]);
//         // }  
//         if(truckSize <= boxTypes[i][0]){
//             result += truckSize*boxTypes[i][1];
//             return result;
//         }else{
//             result += boxTypes[i][0]*boxTypes[i][1];
//             truckSize -= boxTypes[i][0];
//         }

//     }
//     return result;
// }
// console.log(maximumUnits([[5,10],[2,5],[4,7],[3,9]],10));


/* =====atois===== */
