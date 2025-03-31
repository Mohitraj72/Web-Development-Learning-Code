const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: '9263'
});

// INserting New User 
let q = "SHOW TABLES";

try {
    connection.query(q, (err, result) => {
        if (err) throw err;
        console.log(result);
        console.log(result.length);

    });
} catch (err) {
    console.log(err);
}

connection.end();


let getrandomuser = () => {
    return {
        id: faker.string.uuid(),
        username: faker.internet.username(), // before version 9.1.0, use userName()
        email: faker.internet.email(),
        password: faker.internet.password(),

    };
};

// console.log(getrandomuser());