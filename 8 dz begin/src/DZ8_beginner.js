//8 dz beginner

//task 1:

const enterDate = prompt('Enter date in format: DD.MM.YYYY');
const [day, month, year] = enterDate.split('.');
const enterDateInFormat = new Date (`${year}-${month}-${day}`);
let strDate = enterDateInFormat.toDateString();
let strSpliteDate = strDate.split(' ');
console.log("Task 1: Res = " + strSpliteDate[0]);


//task 2:

const now = new Date();
let hours = now.getHours();
let min = now.getMinutes();
let sec = now.getSeconds();

let res = (Number(hours)*3600) + (Number(min)*60) + Number(sec);
console.log("Task 2 Res = " + res)


//task 3:

const firstPerson= '11.12.2001';
const secondPerson= '02.02.2002';

const [dayFirst, monthFirst, yearFirst] = firstPerson.split('.');
const [daySecond, monthSecond, yearSecond] = secondPerson.split('.');

const firstPersonDate = new Date (`${dayFirst}-${monthFirst}-${yearFirst}`);
const secondPersonDate = new Date (`${daySecond}-${monthSecond}-${yearSecond}`);

if(Number(firstPersonDate) < Number(secondPersonDate)){
    console.log("Task 3: Second Person is younger")
}
    
else{
    console.log("Task 3:  First Person is younger")
}

if (Number(firstPersonDate) === Number(secondPersonDate)){
    console.log("Task 3:  Same age")
}






