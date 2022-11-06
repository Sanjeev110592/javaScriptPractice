// let firstName = "Sanjeev";
// let lastName = "Kumar";

// // How to concat two string
// let fullName = firstName.concat(lastName);
// let vowels = ['a','e','i','o','u'];
// let count = 0;
// for(let i = 0 ; i < fullName.length ; i++){
//     if(vowels.includes(fullName[i])){
//         console.log(fullName[i]);
//     }
// }

// // Charactors counting in lowercase

// for(let i = 0 ; i < fullName.length ; i++){
//     if(fullName[i]>='a' && fullName[i]<='z'){
//         count++;
//     }
// }
// console.log(count);

// // Ascii code

// let str = "Banglore"
// for(let i = 0 ; i < str.length ; i++){
//     console.log(str[i],str.charCodeAt(i));
// }

// //Counting the words in a sentene

// let sentence = "Welcome to the world of mountblue and computer";
// let arr = sentence.split(" ");

// for(let i = 0 ; i < arr.length; i++){
//     if(arr[i].length>4){
//         console.log(arr[i]);
//     }
// }

// let quick = 'The quick brown fox jumps over the lazy dog.';
// console.log(quick.slice(0,19));


// let nums = ['1','2','3','4','5','6','7','8','9','10'];
// let strNum = "01234560"
// for(let i = 0 ; i < strNum.length; i++){
//     if(nums.includes(strNum[i])){
//         console.log("Yes");
//     }else{
//         console.log("No");
//     }
// }



// function hackerrankInString(s) {
//     // Write your code here

//     let main = 'hackerrank';
//     let final = '';
//     let index = 0;
//     for(let i = 0; i < s.length; i++){
//         if(s[i]==main[index]){
//             final += s[i];
//             index++;
//         }
//     }
//     if(main==final){
//         return 'YES';
//     }else{
//         return 'NO';
//     }

// }
// console.log(hackerrankInString('hajgfdshgckrurprank'));


// function repeatedString(s, n) {
//     // Write your code here
//     let aCount = 0;
//     for(let i = 0; i < s.length; i++){
//         if(s[i]=='a'){
//             aCount++;
//         }
//     }
//     let repeat = Math.floor(n/(s.length));
//     let totala = repeat*aCount;
//     let limit = n-(s.length*repeat);
//     for(let j = 0; j < limit; j++){
//         if(s[j]=='a'){
//             totala++;
//         }
//     }
//     return totala;
// }
// console.log(repeatedString('aaaaa',10));


// function pickingNumbers(a) {
//     // Write your code here
//     let result = 0;
//     for(let i = 0; i < (a.length-1); i++){
//         let count1 = 1;
//         let count2 = 1;
//         let min = a[i]-1, max = a[i]+1;
//         for(let j = i+1; j < a.length; j++){
//             if(min==a[j] || a[i]==a[j]){
//                 count1++;
//             }if(a[j]==max || a[i]==a[j]){
//                 count2++;
//             }
//         }
//         if(count1>result){
//             result=count1;
//         }if(count2>result){
//             result=count2;
//         }
//     }
//     return result;
// }
// console.log(pickingNumbers([1,2,2,3,1,2,0,0,0,0,0]))








// function objComparision(obj1,obj2){
//     let a = JSON.stringify(obj1);
//     let b = JSON.stringify(obj2);
//     return (a == b);
// }
// console.log(objComparision({a:1,b:2,c:3,d:4,e:5},{a:1,b:2,c:3,d:4,e:5}));























// /* ===== Question-1 ===== */

// function sortingInOrder(str){
    // let arr = str.split(' ');
    // let result = [];
    // let i = 0
    // while(i < arr.length){
    //     let s = arr[i];
    //     let st = s[s.length-1] + s.slice(0,-1);
    //     result.push(st);
    //     i++
    // }
    // result.sort();
    // let final = '';
    // let j = 0;
    // while(j < result.length){
    //     final += result[j].slice(1) + ' ';
    //     j++
    // }
    // return final;


    /* =====secondMethod===== */


//     let arr2 = str.split(' ');
//     let result2 = [];
//     let k = 0;
//     while(k < arr2.length){
//         let st = arr2[k];  
//         let n = st.length-1;
//         result2[st[n]] = st.slice(0,-1); 
//         k++;     
//     }
//     return result2.join(' ');
// }
// console.log(sortingInOrder('is1 a2 this0 test4 mock3 me6 for5'));


// /* =====Question-2===== */


// function maxColSum(arr,n){
//     let arr2d = [];
//     let a = 0; 
//     let b = n;
//     while(a < arr.length){
//         let col = arr.slice(a,b);
//         arr2d.push(col);
//         a += n;
//         b += n;
//     }
//     let maxSum = -Infinity;
//     let colNo;
//     for(let i = 0; i < arr2d[0].length; i++){
//         let sum = 0;
//         for(let j = 0; j < arr2d.length; j++){
//             sum += arr2d[j][i];
//         }
//         if(sum > maxSum){
//             maxSum = sum;
//             colNo = i;
//         }
//     }
//     return [maxSum,colNo+1];
// }
// console.log(maxColSum([4,14,12,7,14,16,5,13,7,16,11,19],4));


/* =====sortingInOrder===== */


function sortingInOrder(str){
    let arr = str.split(' ').sort((a,b)=>a[a.length-1]-b[b.length-1]);
    let ans = '';
    for(let st of arr){
        ans += st.slice(0,-1) + ' ';
    }
    return ans;
}
console.log(sortingInOrder('is1 a2 this0 test4 mock3 me6 for5'));