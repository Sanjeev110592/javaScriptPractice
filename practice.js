/* =====sliceMethod===== */

let arrSlice = [
                "Banana",
                "Orange", 
                "Apple", 
                "Mango",
                "Chiku",
                "Pineapple",
                "Grapes",
                "Coconut",
                "Dragonfruit",
                "Kivi" 
            ];
// /* Array.slice() don't change the array but array.splice() change the array and it will not work on string; */

// console.log(arrSlice.splice(0,5),arrSlice);

let arr = [39,28,34,45,12,78];
// console.log(arr.fill(3));
// let str = 'Hello hello Hello World';
// let reg = /[A-Z]/g;
// console.log(str.match(reg));

console.log((arr.every(x=>x<80)));
if((arrSlice.some(y => y == 'Kivi'))){
    for(let el of arrSlice){
        console.log(el);
    }
}