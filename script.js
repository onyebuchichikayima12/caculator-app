const showcase = document.getElementById('input')
function appendToDisplay(input) {
    showcase.value += input;
}

function Delete(input) {
    showcase.value = showcase.value.slice(0, -1)
}

function Calculate(input){
    showcase.value = eval(showcase.value)
}

function clearDisplay(input){
    showcase.value =''
}