//! This keywords in javascript 

const students = {
    name: "Mohit",
    age: 23,
    eng: 25,
    hindi: 88,
    math: 99,
    phy: 77,
    getAvg() {
        console.log(this);
        let avg = (this.eng + this.math + this.hindi) / 3;
        console.log(`${this.name} got avg marks = ${avg}`);
    }
}

students.getAvg();


//! Try and catch 
// let a = 5;


try {
    console.log(a);
} catch (err) {
    console.log("Variable doesn't ");

}


//! Arrow Function 

const sum = (a, b) => {
    console.log(a + b);

};

// sum(2, 8);

const cube = (n) => {
    return n * n * n;
};

console.log(cube(2));


const pow = (a, b) => {
    return a ** b;
}

console.log(pow(3, 4));

//! Implicit Return in Arrow Functions



