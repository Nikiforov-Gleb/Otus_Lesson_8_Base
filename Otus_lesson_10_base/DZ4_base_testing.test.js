
import {hideButton, addPText } from "./DZ4_base";


describe("Testing paragraph task", () => {
   
    let input, button, blockP;

    beforeAll(() => {
        input = document.createElement('input');
        button = document.createElement('button');
        blockP = document.createElement('div');

        

        document.body.appendChild(input);
        document.body.appendChild(button);
        document.body.appendChild(blockP);
        
    }); 

    beforeEach(() => {

        blockP.querySelectorAll('p').forEach(p => p.remove());
        ["paragraph1", "paragraph2", "paragraph3"].forEach((el)=>{
            let newParagraphEl = document.createElement('p');
            newParagraphEl.innerText = el;
            blockP.append(newParagraphEl);
        });      
        button.hidden = true;
    });
    
   
    describe("Testing hiding button", () =>
    {       
        //it("is function", () => {});

        [
            ["", true],
            ["paragraph4", false],
            ["   ", true],
            ["paragraph5 ", false],
            [" paragraph6", false],
            [" paragraph7 paragraph8", false],
            ["!@#$%^&*", false],
            ["123", false],
        ].forEach(([inputValue, expectedResult]) => 
            it(`input value "${inputValue}"`, () => {
                input.value = inputValue;
                hideButton(input, button);
                expect(button.hidden).toBe(expectedResult);
            })
        );

        it("button is hidden after append paragraphs", () => {

            input.value = "paragraph_test";
            button.hidden = false;
            addPText(input, button, blockP);
            expect(button.hidden).toBe(true);
        });
    });

    describe("Testing adding paragraphs", () =>
    {
        it("Paragraphs blok contains 3 paragraphs as default", () => {
            
            let arrOfParagraphs = document.querySelectorAll('p');
            expect(arrOfParagraphs.length).toBe(3);

        });
        
        it("Paragraphs blok contains 4 after adding first time", () => {
                        
            input.value = "paragraph4";
            addPText(input, button, blockP);
            let arrOfParagraphs = document.querySelectorAll('p');
            expect(arrOfParagraphs.length).toBe(4);

        });

        it("Paragraphs blok contains 4 after adding second time", () => {
                        
            [
                "paragraph4",
                "paragraph5",                
            ].forEach(el => { 
                input.value = el;
                addPText(input, button, blockP);                
            }); 
            let arrOfParagraphs = document.querySelectorAll('p');
            expect(arrOfParagraphs.length).toBe(4);

        }); 

         it("Paragraphs blok contains 4 after adding any time", () => {
                        
            [
                "paragraph4",
                "paragraph5",
                "paragraph6",
                "paragraph7",
                "paragraph8",
                "paragraph9",
            ].forEach(el => { 
                input.value = el;
                addPText(input, button, blockP);                
            });     
           
            let arrOfParagraphs = document.querySelectorAll('p');
            expect(arrOfParagraphs.length).toBe(4);

        });


        it("Adding paragraph to end of block", () => {
            
            let inputValue = "paragraph4";
            input.value = inputValue;
            addPText(input, button, blockP);

            let arrOfParagraphs = document.querySelectorAll('p');
            
            expect(arrOfParagraphs[3].textContent).toBe(inputValue);                       

        });
        
        it("Removing first paragraph after adding second time", () => {
                        
            input.value = "paragraph4";
            addPText(input, button, blockP);

            let arrOfParagraphs = document.querySelectorAll('p');
            let valueSecondP = arrOfParagraphs[1].textContent;

            input.value = "paragraph5";
            addPText(input, button, blockP);
            let arrOfParagraphsNew = document.querySelectorAll('p');
            expect(arrOfParagraphsNew[0].textContent).toBe(valueSecondP);                       

        });    
        
    });  
});