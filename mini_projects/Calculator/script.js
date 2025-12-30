const buttonsEl = document.querySelectorAll("button")

const inputFieldE1 = document.getElementById("result")

for (let i = 0; i < buttonsEl.length; i++){
    buttonsEl[i].addEventListener("click", ()=>{
        const buttonvalue = buttonsEl[i].textContent;
        if(buttonvalue === "C"){
            clearResult()
        } else if (buttonvalue === "="){
            calculateResult()
        } else {
            appendValue(buttonvalue)
        }
    })
}

function clearResult() {
    inputFieldE1.value = "";
}

function calculateResult() {
    inputFieldE1.value = eval(inputFieldE1.value);
}

function appendValue(buttonvalue) {
    inputFieldE1.value += buttonvalue;
}