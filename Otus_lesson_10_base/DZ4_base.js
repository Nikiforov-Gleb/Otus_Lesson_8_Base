//7 dz beginner

//task 1:

export function hideButton(input, button){
    if (input.value.trim() !== ''){
        button.hidden = false;
    }else{
        button.hidden = true;
    }
}


//task 2:

export function addPText(input, button, block){

    removeExtraParagaph();  ////task 3:
    const newParagraphEl = document.createElement('p');
    newParagraphEl.textContent = input.value.trim();
    block.append(newParagraphEl);
    input.value = '';
    button.hidden = true;   

}


//task 3:

export function removeExtraParagaph(){

    let paragraphsCollection = document.querySelectorAll('p');
    
    if (paragraphsCollection.length >= 4){
        paragraphsCollection[0].remove();        
    }
}





