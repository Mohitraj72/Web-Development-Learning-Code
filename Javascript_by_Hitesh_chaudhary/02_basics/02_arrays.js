const marvel_heros = ["thor", "ironman", "spiderman"];
const dc_heroes = ["superman", "flash", "batman"];

marvel_heros.push(dc_heroes);

// console.table(marvel_heros);
// console.table(marvel_heros[3][1]);

marvel_heros.concat(dc_heroes)
// console.table(marvel_heros);

const allHeroes = marvel_heros.concat(dc_heroes)
// console.table(allHeroes);

const all_new_heros = [...marvel_heros, ...dc_heroes]
// console.table(all_new_heros);

const another_array = [1,2,3, [4,5,6],[6,7,[4,5]]];
const real_another_array = another_array.flat(Infinity)
console.table(real_another_array);


console.table(Array.isArray("Mohit Raj"));
console.table(Array.from("Mohit Raj"));
console.table(Array.from({name: "Mohit"}));  // interesting 

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.table(Array.of(score1, score2, score3));





