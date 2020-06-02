var readLineSync = require('readline-sync');
var fs = require('fs');
var students = [];

function showMenu() {
    console.log("1 . Show all student");
    console.log("Creare a student");
    console.log("Save & Exit");
    var option = readLineSync.question("Enter option: ");

    switch (Number(option)) {
        case 1:
            showStudent();
            showMenu()
            break;
        case 2:
            createStudent();
            showMenu();
            break;
        case 3:
            saveAndExit();
            showMenu();
            break;
        default:
            console.log('Wrong menu');
            showMenu();
            break;
    }
};

function loadData() {
    var loadData = fs.readFileSync('./data.json');
    students = JSON.parse(loadData);
}

function showStudent() {
    for (const student of students) {
        console.log(student.name, student.age);
    }
}

function createStudent() {
    var inputName = readLineSync.question('Enter name student: ');
    var inputAge = readLineSync.question('Enter age student: ');
    var student = {
        name: inputName,
        age: inputAge
    };
    students.push(student);
}

function saveAndExit() {
    var content = JSON.stringify(students);
    fs.writeFileSync('./data.json', content, { encoding: 'utf8' });
}



function Main() {
    loadData();
    // console.log(student);
    showMenu();
}
Main();