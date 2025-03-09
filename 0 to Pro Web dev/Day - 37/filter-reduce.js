// const coding = ["js", "c", "Java", "python", "cpp"];


// const values = coding.forEach((item) => {
//     console.log(item);
//     return item
// })

// console.log(values);


// const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newnums = mynums.filter((num) => {
//     return num > 4
// })

// const newnums = []

// mynums.forEach((num) => {
//     if (num > 4) {
//         newnums.push(num)
//     }
// })

// console.log(newnums);




const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1982, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1995, edition: 2001 },
    { title: 'Book Three', genre: 'Science Fiction', publish: 2001, edition: 2010 },
    { title: 'Book Four', genre: 'Mystery', publish: 1989, edition: 1995 },
    { title: 'Book Five', genre: 'Fantasy', publish: 2005, edition: 2015 },
    { title: 'Book Six', genre: 'Biography', publish: 1978, edition: 1985 },
    { title: 'Book Seven', genre: 'History', publish: 1999, edition: 2003 },
    { title: 'Book Eight', genre: 'Thriller', publish: 2010, edition: 2018 },
    { title: 'Book Nine', genre: 'Romance', publish: 1985, edition: 1990 },
    { title: 'Book Ten', genre: 'History', publish: 2008, edition: 2012 }
];


let userbooks = books.filter((bk) => bk.genre === 'History')


userbooks = books.filter((bk) => {
    return bk.publish >= 2000 && bk.genre === "History"

})


console.log(userbooks);

