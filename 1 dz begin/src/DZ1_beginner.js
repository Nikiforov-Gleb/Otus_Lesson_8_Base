//1 dz beginer

//task 1:
const a = prompt('Task 1: Enter number A');
const b = prompt('Task 1: Enter number B');
const numberA = Number(a);
const numberB = Number(b);
const summ = numberA + numberB;
const multiplication = a * b;
console.log('Task 1: multiplication = ' + multiplication)
console.log('Task 1: summ = ' + summ)



//task 2:
const firstStr = prompt('Task 2: Enter first string:');
const secondStr = prompt('Task 2: Enter second str:');
const resultStr = firstStr + secondStr;
console.log('Task 2: length = ' + resultStr.length)


//task 3:
const task3Num = prompt('Task 3: Enter number');
const enterNum = Number(task3Num);
let resultSumm = 0;
if((typeof enterNum == 'number') & (task3Num.length === 3)){
        
    const thirdNum = enterNum % 10;
    const firstNum = (enterNum - (enterNum  % 100)) / 100;
    const secondNum = ((enterNum % 100) - (enterNum % 10)) / 10;
    resultSumm = thirdNum + secondNum + firstNum;       
    console.log('Task 3: Result summ = ' + resultSumm);    
}
else{
    console.log("The entered value is not a number, or the number is not three-digit. The result cannot be determined.")
};


