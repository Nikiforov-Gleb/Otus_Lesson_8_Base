//5 dz beginner

//task 1:

let arr = [14, 3, 5, 12, 23, 34, 35, 4, 3, 6];
let summ = 0;

arr.forEach(function (el){
    summ = summ + el;
});

console.log('Task 1: summ =  ' + summ);



//task 2:

console.log('Task 2: Array Base:  ' + arr);

let arrModify = arr.map(function (el){

    let newValue = el * 2;
    return newValue

})
console.log('Task 2: Array Modify:  ' + arrModify);


//task 3:

let minElement = arr[0];
let indexOfMinElement = 0;
let maxElement = arr[0];
let indexOfmaxElement = 0;


arr.forEach(function (el, i){   
    if (el < minElement){
        minElement = el;
        minIndexOfElement = i;
    }    
});
console.log('Task 3: Min element of array = ' + minElement + '   Index of first min element = ' + indexOfMinElement);

arr.forEach(function (el, i){   
    if (el > maxElement){
        maxElement = el;
        maxIndexOfElement = i;
    }    
});
console.log('Task 3: Max element of array = ' + maxElement + '   Index of first max element = ' + indexOfmaxElement);







