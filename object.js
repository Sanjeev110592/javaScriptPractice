// let student = [
//     {name:"Sam",id:101,marks:30},
//     {name:"Vam",id:102,marks:35},
//     {name:"Nam",id:103,marks:34},
//     {name:"Gam",id:104,marks:29},
//     {name:"Dam",id:105,marks:40},
//     {name:"Cam",id:106,marks:20},
//     {name:"Bam",id:107,marks:25},
// ]
// for(let obj in student){
//     if(obj.marks < 30){
//         obj['status'] = "Fail";
//     }else{
//         obj['status'] = "Pass";
//     }
// }
// console.log(student);

// let bikes = [
//     {name:"ktm",price:70000},
//     {name:"Apache",price:90000},
//     {name:"pulsar",price:170000},
//     {name:"kawasaki",price:190000},
//     {name:"royal elfield",price:60000},
// ]
// for(let bike of bikes){
//     for(let inner in bike){
//         console.log(inner,bike[inner]);
//     }
// }

// for(let motor of bikes){
//     if(motor.price<100000){
//         motor.rating = "Low";
//     }else{
//         motor.rating = "High";
//     }
// }
// console.log(bikes)

// let flats = new Object();
// flats.Mumbai = 32;
// flats.Delhi = 40;
// flats.Chenni = 60;
// flats.Banglore = 70;
// flats.Pune = 60;
// flats.Hydrbad = 45;

// let sum = 0 ;

// for(let place in flats){
//     sum += flats[place];
// }
// console.log(sum)


// let fruits = {
//     apple:20,
//     mango:50,
//     banana:100,
//     grapes:70,
//     kivi:200
// }
// for(let fr in fruits){
//     console.log(fruits[fr]);
// }

// let newFruits = ['apple','banana','orange','mango','grapes'];

// newFruits.unshift('cococonut');

// console.log(newFruits.includes('orange'));
// newFruits.slice(1,2)
// console.log(newFruits.slice(3,6))

/* =====  ===== */


// function equalizeArray(arr) {
//     // Write your code here
//     let max = -Infinity;
//     let empty = {};    
//     for(let i = 0; i < arr.length; i++){
//         if(empty[arr[i]] == undefined){
//             empty[arr[i]] = 1; 
//         }else{
//             empty[arr[i]]++;;            
//         }
//     }
//     for(let el in empty){
//         if(empty[el]>max){
//             max = empty[el];
//         }
//     }
//     return (arr.length - max);
  
//   }
//   console.log(equalizeArray([11,11,11,23,23,55]));
