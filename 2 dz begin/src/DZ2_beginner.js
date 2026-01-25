//2 dz beginner

//task 1:

const numA = prompt('Task 1: Enter first number');
const numB= prompt('Task 1: Enter second number');

if(numA === numB){
    console.log('Task 1: numbers are equal');  
}

if(numA > numB){
    console.log('Task 1: ' + numA);
}

if(numA < numB){
    console.log('Task 1: ' + numB);    
}



//task 2:

const numberOfMounth = prompt('Task 2: Enter number (1-12)');

switch (numberOfMounth){ 
    case '1':
        console.log('Task 2: January' );
        break;
    case '2':
        console.log('Task 2: February' );
        break;
    case '3':
        console.log('Task 2: March' );
        break;
    case '4':
        console.log('Task 2: April' );
        break;
    case '5':
        console.log('Task 2: May' );
        break;
    case '6':
        console.log('Task 2: June' );
        break;
    case '7':
        console.log('Task 2: July' );
        break;
    case '8':
        console.log('Task 2: August' );
        break;
    case '9':
        console.log('Task 2: September' );
        break;
    case '10':
        console.log('Task 2: October' );
        break;
    case '11':
        console.log('Task 2: November' );
        break;
    case '12':
        console.log('Task 2: December' );
        break;
    default:
        console.log('Task 2: You entered an incorrect value. Please try again.' );
}


//task 3:

const circleArea = prompt('Task 3: Enter area of a circle :');
const squareArea = prompt('Task 3: Enter area of a square :');

const Pi = 3.14;

const diameterOfcircle = (Math.sqrt(circleArea / Pi))*2;
const sideOfsquare = Math.sqrt(squareArea);

if (diameterOfcircle <= sideOfsquare){
    console.log ('Task 3:  Yes. The circle will fit into the square:')
}
else{
    console.log ('Task 3:  No. The circle will not fit into the square:')
}




