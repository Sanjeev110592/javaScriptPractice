// /* =====Rightangle Triangle===== */


// function reverseRightAngleTraingle(n){
//     let store = '';
//     for(let i = 0; i < n; i++){
//         for(let j = 0; j < i; j++){
//             if(j<=i){
//                 store += '* ';
//             }else{
//                 store += '  ';
//             }
//         }
//         store += '\n';
//     }
//     return store;
// }
// console.log(reverseRightAngleTraingle(11));


// /* =====Reverse Rightangle Traiangel===== */


// function rightTriangle(n){
//     let store = '';
//     for(let i = 0; i < n; i++){
//         for(let j = 0; j < n; j++){
//             if(j>=n-i-1){
//                 store += '* ';
//             }else{
//                 store += '  ';
//             }
//         }
//         store += '\n';
//     }
//     return store;
// }
// console.log(rightTriangle(11));


// /* =====pyramid===== */


// function pyramid(n){
//     if(n%2 != 0){
//         n -= 1;
//     }
//     let store = '';
//     for(let i = 0; i <= n/2; i++){
//         for(let j = 0; j <= n; j++){
//             if(j >= (n/2)-i && j <= (n/2)+i){
//                 store += '* ';
//             }else{
//                 store += '  ';
//             }
//         }
//         store += '\n';
//     }
//     return store;
// }
// console.log(pyramid(11));


// /* =====Butterfly===== */


// function butterfly(n){
//     n--;
//     let store = '';
//     for(let i = 0; i <= n; i++){
//         for(let j = 0; j <= n; j++){
//             if(i < n/2 && (j <= i || j >= n-i)){
//                 store += '* ';
//             }else if(i >= n/2 && (j <= (n-i) || j >= i)){
//                 store += '* ';
//             }else{
//                 store += '  ';
//             }
//         }
//         store += '\n';
//     }
//     return store;
// }
// console.log(butterfly(11));


// /* =====Rhombus===== */


// function rhombus(n){
//     n--;
//     let store =  '';
//     for(let i = 0; i <= n; i++){
//         for(let j = 0; j <= n; j++){
//             if(i < n/2 && (j >= (n/2-i) && j <= (n/2+i))){
//                 store += '* ';
//             }else if(i >= n/2 && (j >= i-n/2 && j <= n+n/2 - i)){
//                 store += '* ';
//             }else{
//                 store += '  ';
//             }
//         }
//         store += '\n';
//     }
//     return store
// }
// console.log(rhombus(11));


// /* =====Mirror Pyramid===== */


// function mirrorPyramid(n){
//     n--;
//     let store = '';
//     for(let i = 0; i <= n; i++){
//         for(let j = 0; j <= n; j++){
//             if(i < n/2 && (j >= i && j <= n-i)){
//                 store += '* ';
//             }else if(i >= n/2 && (j >= (n-i) && j <= i)){
//                 store += '* ';
//             }else{
//                 store += '  ';
//             }
//         }
//         store += '\n';
//     }
//     return store;
// }
// console.log(mirrorPyramid(11));

/* ======Z Shape===== */

// Given 'n', print the symbol 'Z' spanning n rows using '*' symbol. Value of n>2 and n<=20.

// Example:
// 1) Input : n=3
// Output:
// ***
//  *
// ***

// function zShape(n){
//     let store = '';
//     for(let i = 0; i < n; i++){
//         for(let j = 0; j < n; j++){
//             if(i == 0 || i == n-1){
//                 store += '*';
//             }else if(j == n-i-1){
//                 store += '*';
//             }else{
//                 store += ' ';
//             }
//         }
//         store += '\n';
//     }
//     return store;
// }
// console.log(zShape(10));

/* =====Repeating number===== */

// Print the following pattern:
// For n=4
// 1111111
// 22222
// 333
// 4
// 333
// 22222
// 1111111

// Write a generic solution, so that when you change n, pattern should print accordingly.

// function repeatingNumber(n){
//     n--;
//     let tn = n*2
//     let store = '';
//     for(let i = 0; i <= tn; i++){
//         for(let j = 0; j <= tn; j++){
//             if(i <= n && j <= tn - (i*2)){
//                 store += `${i+1}`;
//             }else if(i >= n && j <= (i-n)+(i-n)){
//                 store += `${tn-i+1}`;
//             }else{
//                 store += ` `;
//             }
//         }
//         store += `\n`;
//     }
//     return store;
// }
// console.log(repeatingNumber(10));
