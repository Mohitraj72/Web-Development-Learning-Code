const coding = ["js", "ruby", "java", "python", "Cpp"]

// coding.forEach(function (val) {
//   console.log(val);
// });

// coding.forEach((item) => {
//     console.log(item);
// })

// function printME(item){
//     console.log(item);
// }

// coding.forEach(printME)

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "java"
    },
    {
        languageName: "Python",
        languageFileName: "Py"

    },
    {
        languageName: "Cpp",
        languageFileName: "cpp"

    }
]

myCoding.forEach((item)=> {
    console.log(item.languageName);
})