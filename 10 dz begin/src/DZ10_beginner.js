//10 dz beginner

//task 1:

const enterDate = prompt('Enter date');
const regexpenterDate = /(0\d|[1-2]\d|3[0-1])\.(0\d|1[1-2])\.\d{4}/;

if(regexpenterDate.test(enterDate) === true){
    console.log('Task 1: Yes, valid date')
}else{
    console.log('Task 1: No, invalid date')
}


//task 2:
 
const enterEmail = prompt('Enter email');
const regexpEmail = /[a-zA-Z_\.0-9]+@[a-z0-9]+\.[a-z]{2,5}/;

if(regexpEmail.test(enterEmail) === true){
    console.log('Task 2: Yes, valid email')
}else{
    console.log('Task 2: No, invalid email')
}


//task 3:

const number = prompt('Enter number');
const regexpNumber = /((\+7|8)\s\d{3}\s\d{3}\s\d{2}\s\d{2})|((\+7|8)\d{10})/;

if(regexpNumber.test(number) === true){
    console.log('Task 2: Yes, valid number')
}else{
    console.log('Task 2: No, invalid number')
}






