//6 dz beginner

//task 1:
function diff (a, b){
    
    let intA = Number(a);
    let intB = Number(b);

    if (intA <= intB){
        return intB - intA;
    } else { 
        return intA - intB};
};

let firstNumTask1 = prompt('Task 1: Enter first number');  
let secondNumTask1 = prompt('Task 1: Enter second number');

console.log ('Task 1: diff = ' + diff(firstNumTask1, secondNumTask1));


//task 2:

function isWord (str){

    let strSplit = str.split(' ');    

    if (strSplit.length > 1){
        return false;
    } else {
        return true;
    }
}

let enterStr = prompt('Task 2: Enter text');

console.log('Task 2: ' + isWord(enterStr.trim()));


//task 3:

function pow (a, x){
    
    let intA = Number(a);
    let intX = Number(x);
    let result = 0;    
           
    switch (true){
        case (intX === 0):
            result = 1;
            break;
        case (intX === 1):
            result = intA;
            break;            
        case (intX < 0):
            let absNumX = Math.abs(intX);
            result = intA;
            for(let i = 2; i <= absNumX; i++){
                result = result * intA;                
            }  
            result = 1 / result;  
            break;

        case (intX > 0):
            result = intA;
            for(let i = 2; i <= intX; i++){
                result = result * intA;                
            }            
            break;     
    }
    return result;
}

let firstNumTask3 = prompt('Task 3: Enter first number');  
let secondNumTask3= prompt('Task 3: Enter second number');
console.log ('Task 3: pow = ' + pow(firstNumTask3, secondNumTask3));






