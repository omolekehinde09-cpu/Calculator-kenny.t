const display = document.getElementById("display");

// ================= DISPLAY =================

function append(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

// ================= TRIG FUNCTIONS =================

function sin() {
    let angle = prompt("Enter angle in degrees");

    if (angle === null) return;

    display.value = Math.sin(Number(angle) * Math.PI / 180).toFixed(10);
}

function cos() {
    let angle = prompt("Enter angle in degrees");

    if (angle === null) return;

    display.value = Math.cos(Number(angle) * Math.PI / 180).toFixed(10);
}

function tan() {
    let angle = prompt("Enter angle in degrees");

    if (angle === null) return;

    display.value = Math.tan(Number(angle) * Math.PI / 180).toFixed(10);
}

// ================= FACTORIAL =================

function factorial(n){

    if(n < 0) return NaN;

    if(n === 0 || n === 1) return 1;

    let result = 1;

    for(let i=2;i<=n;i++){

        result *= i;

    }

    return result;
}

// ================= nPr =================

function showPermutation(){

    document.getElementById("permModal").style.display="flex";

}

function calculatePermutation(){

    let n = Number(document.getElementById("permN").value);

    let r = Number(document.getElementById("permR").value);

    if(r>n){

        document.getElementById("permResult").innerHTML="Invalid Input";

        return;

    }

    let answer = factorial(n)/factorial(n-r);

    document.getElementById("permResult").innerHTML="Answer = "+answer;

}

// ================= nCr =================

function showCombination(){

    document.getElementById("combModal").style.display="flex";

}

function calculateCombination(){

    let n = Number(document.getElementById("combN").value);

    let r = Number(document.getElementById("combR").value);

    if(r>n){

        document.getElementById("combResult").innerHTML="Invalid Input";

        return;

    }

    let answer = factorial(n)/(factorial(r)*factorial(n-r));

    document.getElementById("combResult").innerHTML="Answer = "+answer;

}

// ================= SIMULTANEOUS =================

function showSimultaneous(){

    document.getElementById("simModal").style.display="flex";

}

function solveSimultaneous(){

    let a1=Number(document.getElementById("a1").value);

    let b1=Number(document.getElementById("b1").value);

    let c1=Number(document.getElementById("c1").value);

    let a2=Number(document.getElementById("a2").value);

    let b2=Number(document.getElementById("b2").value);

    let c2=Number(document.getElementById("c2").value);

    let determinant=(a1*b2)-(a2*b1);

    if(determinant===0){

        document.getElementById("simResult").innerHTML="No Unique Solution";

        return;

    }

    let x=((c1*b2)-(c2*b1))/determinant;

    let y=((a1*c2)-(a2*c1))/determinant;

    document.getElementById("simResult").innerHTML=
    "x = "+x.toFixed(4)+"<br>y = "+y.toFixed(4);

}

// ================= CLOSE MODAL =================

function closeModal(id){

    document.getElementById(id).style.display="none";

}

// ================= CLOSE WHEN CLICKING OUTSIDE =================

window.onclick=function(event){

    document.querySelectorAll(".modal").forEach(function(modal){

        if(event.target===modal){

            modal.style.display="none";

        }

    });

};

// ================= KEYBOARD SUPPORT =================

document.addEventListener("keydown",function(e){

    if(!isNaN(e.key) || "+-*/().".includes(e.key)){

        append(e.key);

    }

    if(e.key==="Enter"){

        calculate();

    }

    if(e.key==="Backspace"){

        deleteLast();

    }

    if(e.key==="Escape"){

        clearDisplay();

    }

});