// example 1
const steps = ["one", "two", "three"];
function listTemplate(step)  {
  return `<li>${step}</li>`;
}

const stepsHtml = steps.map(listTemplate);
document.querySelector("#myList").innerHTML = stepsHtml.join("");

// example 2
const letters = ['A', 'B', 'A'];

function convertLetterGrade (input) {
    let output
    if (input === 'A') {
        output = 4;
    } 
    else if (input === 'B') {
        output = 3;
    } 
    else if (input === 'C') {
        output = 2;
    } 
    else if (input === 'D') {
        output = 1;
    } 
    else if (input === 'F') {
        output = 0;
    } 
    return output

    
}
function GPACalcToHTML(inputList) {// I did this becasue i thought it was fun, i didnt realize it was the next step
    const total = inputList.reduce((sum, current) => sum + current, 0);
    const average = total / inputList.length;
    const averageplus = "GPA Average: " + average.toFixed(2);
    const HTMLtext = listTemplate(averageplus);
    return HTMLtext;
}
const GP = letters.map(convertLetterGrade);

const GPHtml = GP.map(listTemplate);

const GPAHtml = GPACalcToHTML(GP);

document.querySelector("#myList").innerHTML += GPHtml.join("");
document.querySelector("#myList").innerHTML += GPAHtml;

// example 3

const wordList = ["watermelon", "peach", "apple", "tomato", "grape"];

const shortWordList = wordList.filter((word) => word.length < 6);

const shortwordOutput = shortWordList.map(listTemplate)

document.querySelector("#myList").innerHTML += shortwordOutput.join("");

// example 4

const NumberArray = [12, 34, 21, 54];
const luckyNumber = 21;
let luckyIndex = NumberArray.indexOf(luckyNumber);

document.querySelector("#myList").innerHTML += luckyIndex;