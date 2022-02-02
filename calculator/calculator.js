`use strict`
import * as DOM from './dom.js';

DOM.addition_button.onclick = () => add(DOM.inputOne.value, DOM.inputTwo.value);
DOM.subtract_button.onclick = () => sub(DOM.inputOne.value, DOM.inputTwo.value);
DOM.divide_button.onclick = () => divide(DOM.inputOne.value, DOM.inputTwo.value);
DOM.multiply_button.onclick = () => multiply(DOM.inputOne.value, DOM.inputTwo.value);




add = (num1, num2) =>
{
    let answer = 0;
    ans = +num1 + +num2;
    show(answer);
}


sub = (num1, num2) => {
    let answer = 0;
    answer = +num1 - +num2;
    show(answer);
}

divide = (num1, num2) => {
    let answer = 0;
    answer = +num1 / +num2;
    show(answer);
}

multiply = (num1, num2) =>
{
    let answer = 0;
    answer = +num1 * +num2;
    show(answer);
}



show = answer => 
{
    let child = document.createElement(`li`);
    child.innerHTML = answer;
    DOM.output.appendChild(child);
}



