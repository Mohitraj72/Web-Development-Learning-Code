const mynums = [1, 2, 3, 4, 5, 6];

const mytotal = mynums.reduce(function (acc,currval) {
    console.log(`acc: ${acc} and currival: ${currval}`);
    return acc + currval
},0)

const mytotala = mynums.reduce((acc, curr) => acc + curr, 0)


console.log(mytotal);


const shoppingcart = [
    {
        itemname: "js Course",
        price: 2999
    },

    {
        itemname: "Dev Course",
        price: 4999
    },

    {
        itemname: "DSA Course",
        price: 2999
    },

    {
        itemname: "js Course",
        price: 2929
    },

    {
        itemname: "CA Course",
        price: 29992
    },
]

const pricetopay = shoppingcart.reduce((acc, item) => acc + item.price, 0)

console.log(pricetopay);