const fs = require('fs');
const faker = require('faker');

const createDataProject = function(start, end, file) {
    var insertArr = [];
    for (let i = start; i < end; i++) {
        const project = `${i}|${faker.date.past().toISOString().slice(0, 19).replace('T', ' ')}`;
        insertArr.push(project);
        if (i % 1000 === 0) {
            fs.appendFileSync(file, insertArr.join('\n') +'\n');
            insertArr = [];
        }
    }
}
//createDataProject(0, 10000001, './data1.txt');
//createDataProject(0, 1, './text1.txt');


const createDataUpdate = function(start, end, file) {  
    var insertArr = [];
    let j = -1; 
    for (let i = start; i < end; i++) {
        if (i % 2 === 0) {
            j = j + 1;
        }
        const project = `${i}|${faker.date.past().toISOString().slice(0, 19).replace('T', ' ')}|${faker.random.words()}|${faker.lorem.sentence()}|${faker.random.number()}|\
${j}`;
        insertArr.push(project);
        if (i % 1000 === 0) {
            fs.appendFileSync(file, insertArr.join('\n') +'\n');
            insertArr = [];
        }
    }
}
//createDataUpdate(0, 20000001, './data2.txt');
//createDataUpdate(0, 2, './text2.txt');

const createDataComment = function(start, end, file) {
    var insertArr = [];
    for (let i = start; i < end; i++) {
        const project = `${i}|${faker.date.past().toISOString().slice(0, 19).replace('T', ' ')}|${faker.lorem.sentence()}|${faker.image.avatar()}|\
${faker.internet.userName()}`;
        insertArr.push(project);
        if (i % 1000 === 0) {
            fs.appendFileSync(file, insertArr.join('\n') +'\n');
            insertArr = [];
        }
    }
}
createDataComment(0, 60000001, './data3.txt');
//createDataComment(0, 6, './text3.txt');

const createDataCommentProject = function(start, end, file) {
     var insertArr = [];
     var j = -1;
    for (let i = start; i < end; i++) {
            if (i % 2 === 0) {
                j = j + 1;
            }
        const project = `${i}|${j}|${i}`;
        insertArr.push(project);
        if (i % 1000 === 0) {
           fs.appendFileSync(file, insertArr.join('\n') +'\n');
           insertArr = [];
        }
    }
}
//createDataCommentProject(0, 20000001, './data4.txt');
//createDataCommentProject(0, 2, './text4.txt');

const createDataCommentUpdate = function(start, end, file) {
    var insertArr = [];
    var j = -1;
    var k = 20000001;
    for (let i = start; i < end; i++) {
        if (i % 2 === 0) {
            j = j + 1;
        }
        const project = `${i}|${j}|${k}`;
        insertArr.push(project);
        if (i % 1000 === 0) {
           fs.appendFileSync(file, insertArr.join('\n') +'\n');
           insertArr = [];
        }
        k++;
    }
}
//createDataCommentUpdate(0, 40000001, './data5.txt');
//createDataCommentUpdate(0, 4, './text5.txt');