const display = document.querySelector('.display')
const buttons = document.querySelectorAll('button')
const specialChars = ["%","*","/","-","+","="]
let output = ""
// console.log(display, buttons);
//Define funcation to calculate based on cliked button
const calculate = (btnValue) => {
    if (btnValue === "=" && output !== "") {
        // If output has'%' , replace with '/100' before evaluating
        output = eval(output.replace("%","/100"));
    }else if (btnValue === "AC") {
        output = "";
    }else if (btnValue === "DEL") {
        //if DEL button is cliked , remove the last character from the output 
        output = output.toString().slice(0,-1);
    }else {
        //if output is empty and button is secialChars then return
        if (output === "" && specialChars.includes(btnValue)) return;
        output += btnValue;
    }
    display.value = output;
};


// Add event listener to button, call calculater() on click
buttons.forEach((button)=>{
    //Button click listener calls calculate() with dataset value as argument
    // button.addEventListener("click", (e)=> console.log(e.target.dataset.value));
    button.addEventListener("click", (e)=> calculate(e.target.dataset.value));
});