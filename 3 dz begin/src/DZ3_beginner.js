//3 dz beginner

//task 1:

var summ = 0;
for (i=50; i <= 100; i++){
    summ = summ + i
}
console.log('Task 1: summ = ' + summ );



//task 2:

console.log('Task 2:  multiplication table for 7: ' );

for (i=1; i <= 9; i++){
    var multiplication = i * 7    
    console.log(`7 x ${i} = ${multiplication}`);
}


//task 3:

const enterNum = prompt ('Task 3: Enter number');
var countNums = 0
var NumSumm = 0

for (i=1; i <= enterNum; i++){

    if ((i % 2) !== 0 ){
        countNums++;
        NumSumm = NumSumm + i;
    }    
}

var result = NumSumm / countNums;
console.log("Task 3: Result = " + result);




