const {Client} = require('pg');
const client = new Client({
    host: "localhost",
    user: "root",
    database: 'updatessdc'
});

client.connect(err => {
    if (err) {
        console.error('connection error-', err);
    } else {
        console.log('connected');
    }
});


const createDataProject = function(start, end, file) {
    for (let i = 0; i < 5000; i++) {
    var insertArr = [];
    for(let j = 0; j < 2000; j++) {
    count++;
    const project = `${count}|${faker.company.companyName()}`;
    insertArr.push(restaurant);

    if (count % 10000 === 0) {
    console.log ("restaurant batch-", count);
    }
    fs.appendFileSync("./restaurantsData", insertArr.join("\n") + "\n");
    }
}



const project = `${count}|${faker.company.companyName()}|${faker.address.streetAddress()}|
    ${faker.address.streetName()}|${faker.address.city()}|${faker.address.state()}\|${faker.address.zipCode()}
    |${faker.address.latitude()}|${faker.address.longitude()}|${Math.floor(Math.random() * Math.floor(6))}|
    ${Math.floor(Math.random() * Math.floor(1000))}\|${faker.phone.phoneNumber()}`;
    insertArr.push(restaurant);
    }