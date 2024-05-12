//!  Array in JS 

const myArr = [0, 1, 2, 1, 4, 5, 6, 7];
const myHeroes = ["shaktiman", "balvir"];

const mtarr2 = new Array(1, 2, 3, 4, 5)
console.table(myArr[1]);


//! Array methods 

myArr.push(6)
myArr.push(7)
myArr.pop()

myArr.unshift(9)
myArr.shift()


console.table(myArr);
console.table(myArr.includes(9));
console.table(myArr.indexOf(4));

const newArr = myArr.join()
console.table(newArr);


//! Slice, Splice 

console.table("A ", myArr);

const myn1 = myArr.slice(1,3);
console.table(myn1);
console.table("B ", myArr);

const myn2 = myArr.splice(1,3)
console.table("C ", myArr);
console.table(myn2);






