var readlineSync = require('readline-sync');
var fs = require('fs');
var employees = [];

function loadData() {
    var fileContent = fs.readFileSync('./data.json');
    employees = JSON.parse(fileContent);
}

function showEmployees() {
    for (var employee of employees) {
        console.log(employee.name, employee.age, employee.department);
    }
}

function createEmployee() {
    var name = readlineSync.question('Name: ');
    var age = readlineSync.question('Age: ');
    var department = readlineSync.question('Department: ');
    var employee = {
        name: name,
        age: age,
        department: department
    };
    employees.push(employee);
}

function saveEmployee() {
    var content = JSON.stringify(employees);
    fs.writeFileSync('./data.json', content, {
        encoding: 'utf-8'
    });
}

function showMenu() {
    console.log('1 : Show all employees');
    console.log('2 : Create a new employee');
    console.log('3 : Save');
    console.log('4 : Delete employee');
    var option = readlineSync.question('> ');
    console.log(option);
    switch (Number(option)) {
        case 1:
            showEmployees();
            showMenu();
            break;
        case 2:
            createEmployee();
            showMenu();
        case 3:
            saveEmployee();
            showMenu();
        case 4:
            deleteEmployee();
            showMenu();
        default:
            console.log('Drong Option');
            break;
    }
}

function main() {
    loadData();
    showMenu();

    // console.log(employees);
}
main();