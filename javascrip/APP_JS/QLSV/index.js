var readlineSync = require('readline-sync');
var fs = require('fs');
// var student = [];


function showMenu() {
    console.log('1: show all student.');
    console.log('2: Create a new student.');
    console.log('3: Save & Exit.')
    var option = readlineSync.question('>');

    switch (Number(option)) {
        case 1:
            showStudent();
            showMenu();
            break;
        case 2:
            showCreatStudent();
            showMenu();
            break;
        case 3:
            saveAndExit();
            showMenu();
            break;
        default:
            console.log('Drong option! ');
            break;
    }
}

function loadData() {
    var fileContent = fs.readFileSync('./data.json');
    students = JSON.parse(fileContent);
}

function showStudent() {
    for (var student of students) {
        console.log(student.name, student.age);
    }
}

function showCreatStudent() {
    var name = readlineSync.question('Name : ');
    var age = readlineSync.question('Age: ');
    var student = {
        name: name,
        age: age,
    };
    students.push(student);
}

function saveAndExit() {
    var content = JSON.stringify(students);
    console.log(content);
    fs.writeFileSync('./data.json', content, {
        encoding: 'utf8'
    });
}

function main() {
    loadData();
    showMenu();
}
main();