let input = document.getElementById('inputBox'); // Corrected the id to match the input
let buttons = document.querySelectorAll('button'); // Use 'buttons' instead of 'button'
let string = "";

buttons.forEach(button => {
    button.addEventListener('click', (e) => { // Fixed spelling of 'addEventListener'
        if (e.target.innerHTML == '=') {
            string = eval(string); // Using eval (safe for this simple case)
            input.value = string;
        }
        else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        }
        else if (e.target.innerHTML == 'DE') { // Changed 'DEL' to 'DE' to match your HTML button
            string = string.substring(0, string.length - 1);
            input.value = string;
        }
        else {
            string += e.target.innerHTML; // Fixed 'e.taret' to 'e.target'
            input.value = string;
        }
    });
});
