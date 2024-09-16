/* Size resolution compatibiity */
window.addEventListener("resize", () => {
    if (window.innerWidth < 700) {
        document.querySelector(".ns").style.display = "block";
    }
    else {
        document.querySelector(".ns").style.display = "none";
    }
  });
/* Functions */
function add(digit) {
    let input = document.querySelector(".equation");
    input.value += digit;
}
function clr() {
    let input = document.querySelector(".equation");
    input.value = "";
}
function calculate() {
    let input = document.querySelector(".equation");
    try {
        if (input.value == "") {
            input.value = "Make something!";
        }
        else {
            input.value = eval(input.value);
        }
    }
    catch(error) {
        input.value = "Error!";
    }
}