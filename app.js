

const mainElement = document.createElement("div");
mainElement.className = 'mainDiv';
const input1 = document.createElement("input");
input1.readOnly = true;
input1.type = "text";
mainElement.appendChild(input1);
input1.value = '0';
input1.style.textAlign = "right"

const id = [
    ["AC", "DEL", "%", "/"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["7", "8", "9", "*"],
    ["e", "0", ".", "equalto"]
]


const classes = ["btns1", "btns1", "btns1", "btns1", "btns1"];


classes.forEach((actualValue, index) => {
    let btnDivElement = document.createElement("div");
    btnDivElement.className = actualValue;

    id[index].forEach((value, i) => {
        const btn = document.createElement("button");
        if (value == "equalto") {
            btn.innerText = "=";
        }
        else {
            btn.innerText = value;
        }
        btn.id = value;


        btnDivElement.appendChild(btn);
    })
    mainElement.appendChild(btnDivElement);
})

document.body.appendChild(mainElement)

console.log("hello vijay bhai");

document.querySelector("#equalto").style.backgroundColor = "orange"


let parentDivElement = document.querySelector(".mainDiv");
const inputField = document.querySelector("input");


parentDivElement.addEventListener("click", (e) => {

    if (e.target.tagName === "BUTTON") {
        if (inputField.value == "error" || inputField.value == '0') {
            inputField.value = ''
        }

        if (e.target.id != "equalto" && e.target.id != "AC" && e.target.id != "DEL" && e.target.id != "e") {
            inputField.value = inputField.value + e.target.id;
        }
        else if (e.target.id == "e") {
            inputField.value = inputField.value + 2.7878;
        }
        else if (e.target.id == "AC") {
            inputField.value = "0";
        }
        else if (e.target.id == "DEL") {
            let inputFieldDuplicate = inputField.value.substring(0, inputField.value.length - 1);
            inputField.value = inputFieldDuplicate

        }
        else {

            try {
                if (eval(inputField.value) == undefined) {
                    inputField.value = 0;
                }
                inputField.value = eval(eval(inputField.value))

            } catch (error) {
                inputField.value = "error";

            }


        }


    }
})

