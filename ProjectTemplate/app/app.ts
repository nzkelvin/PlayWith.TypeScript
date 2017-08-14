
(function main() {
    let name = 'Kevins';
    console.log(name);

    let age:number | null;
    age = 2;
    age = null;
    //age = undefined;


})();

interface Employee {
    name: string;
    title: string;
}

interface Manager extends Employee {
    department: string;
    scheduleMeeting: (topic: string) => void;
}

let developer = {
    name: 'Deepar',
    title: 'Junior'
}
let newEmployee: Employee = developer;