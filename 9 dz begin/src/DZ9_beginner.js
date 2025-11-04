//9 dz beginner

//task 1:

const enterABC = prompt('enter ABC (A B C)');
let enterABCtrim = enterABC.trim();
let arrABC = enterABCtrim.split(' ');

if (arrABC.length === 3){
    let abcMax = arrABC[0];
    let abcMaxIndex = 0;
    let buffer = 0;

    arrABC.forEach(function (el, index) {

        el = Number(el)
        if(el > abcMax){
            abcMax = el;
            abcMaxIndex = index;
        
        };
    });

    buffer = arrABC[0];
    arrABC[0] = arrABC[abcMaxIndex];
    arrABC[abcMaxIndex] = buffer;

    if(Math.pow(arrABC[0], 2) === (Math.pow(arrABC[1], 2) + Math.pow(arrABC[2], 2))){
        console.log("Task 1: the triangle is straight");
    }else{
        console.log("Task 1: the triangle is not straight"); 
    }

}
else{
    console.log("Task 1: You entered not a ABC"); 
}



//task 2:

const radius = prompt('enter Radius');
const NumRad = Number(radius);
const NumRadPow = Math.pow(NumRad, 2);
const square = Math.PI * NumRadPow;
const circumference = Math.PI * 2 * Number(radius);

console.log("Task 2: Square = " + square); 
console.log("Task 2: Circumference = " + circumference); 


//task 3:

const quadraticEquation = prompt('enter ABC (A B C)');
let quadraticEquationTrim = quadraticEquation.trim();
let abcArray = quadraticEquationTrim.split(' ');
if (abcArray.length === 3){

    abcArray.forEach(function (el){
        el = Number(el);
    });

    let discriminant = (Math.pow(abcArray[1], 2)) - 4 * abcArray[0] * abcArray[2];   
    discriminant = Number(discriminant);    
    
    //console.log(discriminant);  

    switch (true){
        case (discriminant < 0):
            console.log("Task 3: The equation has no real roots."); 
          break;
        case (discriminant > 0):
           let firstRoot =  ((-abcArray[1]) + Math.sqrt(discriminant)) / (2 * abcArray[0]);
           let secondRoot =  ((-abcArray[1]) - Math.sqrt(discriminant)) / (2 * abcArray[0]);
           console.log("Task 3: x1 =" + firstRoot + " x2 = " + secondRoot);           
          break;
        case (discriminant === 0):
            let onlyOneRoot =  - (abcArray[1] / (2*abcArray[0]));
            console.log("Task 3: x = " + onlyOneRoot); 
            break;     
    }  
}else{
    console.log("Task 3: You entered not a ABC"); 
}





