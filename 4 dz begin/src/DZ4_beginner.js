//4 dz beginner

//task 1:

let user = {
    name :'John',
};

const enterAge = prompt('Enter age');
user.age = enterAge;
console.log('Task 1: User age = ' + user.age);



//task 2:

let admin = Object.assign ({}, user);
Object.assign (admin, {role: 'admin'});

console.log ('Task 2: admin');
console.log (admin);



//task 3:

let {name, age, role} = admin;
console.log (`Task 3: ${name}  ${age}  ${role}  `);





