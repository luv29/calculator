let num1="";
let num2="";
let operation="";
let isFirst=true;

function perform() {
    let ans=0;
    if(operation=="/" && num2=="0")
        alert("Division by 0 is not possible.");
    else
        ans = eval(`${num1} ${operation} ${num2}`);
    num1=num2=operation="";
    isFirst = true;
    return ans;
}


let display = document.querySelector(".display");

Array.from(document.getElementsByClassName("copy")).forEach(button=>{
    button.addEventListener("click", e=>{
        if(isFirst) {
            num1 = num1 + button.id;
            display.textContent = num1;
        }
        else {
            num2 = num2 + button.id;
            display.textContent = num2;
        }
    })
})

Array.from(document.getElementsByClassName("sign")).forEach(sign=>{
    sign.addEventListener("click",e=>{
        display.textContent = sign.id;
        if(!isFirst) {
            num1 = perform();
        }
        isFirst=false;
        operation = sign.id;
    })
})

document.getElementById("=").addEventListener("click", e=> {
    if(!isFirst) {
        num1 = perform();
        display.textContent = num1;
        isFirst=false;
    }
})

document.querySelector(".clear").addEventListener("click", e=> {
    display.textContent = "";
    num1=num2=operation="";
})

document.querySelector(".backspace").addEventListener("click", e=> {
    display.textContent = display.textContent.slice(0, display.textContent.length);
})