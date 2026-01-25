import {hideButton, addPText} from "./DZ4_base.js";

const input = document.querySelector('.textField');
const button = document.querySelector('.textButton');
const block = document.querySelector('.blockText');

input.addEventListener('input', () => hideButton(input, button));
button.addEventListener('click', () => addPText(input, button, block));

