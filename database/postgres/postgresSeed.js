const fs = require('fs');
const faker = require('faker');
var count = 0;
const createDataProject = function(start, end, file) {
    for (let i = start; i <= end; i++) {
        var insertArr = [];
        count++;
        const project = `${i}|${faker.date.past()}`;
        insertArr.push(project);
        if (count  === 0) {
            console.log ("project batch-", count);
        }
        fs.appendFileSync(file, insertArr +'\n');
    }
}
const createDataUpdate = function(start, end, file) {
    for (let j = 0; j <= 1; j++) {
        for (let i = start; i <= end; i++) {
            var insertArr = [];
            count++;
            const project = `${faker.random.number()}|${faker.date.past()}|${faker.lorem.sentence()}|${faker.random.number()}|
            ${i}`;
            insertArr.push(project);
            if (count  === 0) {
                console.log ("project batch-", count);
            }
            fs.appendFileSync(file, insertArr +'\n');
        }
    }
}
createDataUpdate(0, 1, './data2.txt');

const createDataUpdateComment = function(start, end, file) {
    for (let i = start; i <= end; i++) {
        var insertArr = [];
        count++;
        const project = `${faker.random.number()}|${faker.date.past()}|${faker.lorem.sentence()}|${faker.image.avatar()}|
        |${faker.internet.userName()}|${count}`;
        insertArr.push(project);
        if (count  === 0) {
            console.log ("project batch-", count);
        }
        fs.appendFileSync(file, insertArr +'\n');
    }
}
const createDataComment = function(start, end, file) {
    for (let i = start; i <= end; i++) {
        var insertArr = [];
        count++;
        const project = `${faker.random.number()}|${faker.date.past()}|${faker.lorem.sentence()}|${faker.image.avatar()}|
        |${faker.internet.userName()}|${count}`;
        insertArr.push(project);
        if (count  === 0) {
            console.log ("project batch-", count);
        }
        fs.appendFileSync(file, insertArr +'\n');
    }
}
createDataProject(0, 1, './data1.txt');