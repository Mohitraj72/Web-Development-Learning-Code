//! Array Method 

// let arr = [1, 2, 3, 4, 5, 6];

// arr.forEach((a) => {
//     console.log(a);
// });

// arr.forEach(function (a) {
//     console.log(a);
// });

// let print = function (el) {
//     console.log(el);
// };

// arr.forEach(print);

let array = [
    { name: "Raj", marks: 92 },
    { name: "Shani", marks: 88 },
    { name: "SK", marks: 85 }
];

// array.forEach((student) => {
//     console.log(student.marks);
// });


//! Map 

// let gpa = students.map((el) => {
//     return el.marks / 10;
// }); 





//! Every 

console.log([2, 4, 6].every((el) => el % 2 == 0));


//! Reduce 

let nums = [1, 2, 3, 4];

let fianlval = nums.reduce((res, el) => {
    console.log(res);
    return res + el;
});

console.log(fianlval);


let max = array.reduce((max, el) => {
    if (max < el) {
        return el;
    } else {
        return max;
    }
});

console.log(max);



let arr = [1, 4, 2, 5, 3, 8, 6, 9, 7, 0, 2];
let maxs = -1;

for (let i = 0; i < arr.length; i++) {
    if (maxs < arr[i]) {
        maxs = arr[i];
    }
}

console.log(maxs);


let maxes = arr.reduce((max, el) => {
    if (max < el) {
        return el;
    } else {
        return max;
    }
});

console.log(maxes); 