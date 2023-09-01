// list of possible hex characters
const char = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// add necessary elements to bindings from html
const btn = document.getElementById("btn");
const color_label = document.querySelector(".color-label");

// action the button litenning for a click
btn.addEventListener("click", function() {
    let result = hexNumber();

    // add effets to html page
    document.body.style.backgroundColor = result;
    color_label.textContent = result;
})


// generate random hex number function
function hexNumber() {
    let hex = "#";
    for(let i = 0; i < 6; i++) {
        let randomChar = char[Math.floor(Math.random() * char.length)].toString();
	    hex += randomChar;
    }

    return hex;
}
