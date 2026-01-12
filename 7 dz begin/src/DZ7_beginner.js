//7 dz beginner

//task 1:

const input = document.querySelector('.textField');
const button = document.querySelector('.textButton');
const block = document.querySelector('.blockText');

input.addEventListener('input', HideButton);

function HideButton(){
    if (input.value.trim() !== ''){
        button.hidden = false;
    }else{
        button.hidden = true;
    }
}


//task 2:

button.addEventListener('click', addPText);

function addPText(){

    removeExtraParagaph();  ////task 3:
    const newParagraphEl = document.createElement('p');
    newParagraphEl.innerText = input.value.trim();
    block.append(newParagraphEl);
    input.value = '';
    button.hidden = true;   

}


//task 3:

function removeExtraParagaph(){

    let arrOfParagraphs = document.querySelectorAll('p');
    
    if (arrOfParagraphs.length >= 5){
        arrOfParagraphs[0].remove();
    }
}






