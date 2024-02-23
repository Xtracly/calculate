const display = document.querySelector('.display')

function append(input) {
    display.value += input
}

function deleteElement() {
    display.value = ""
}

function result() {
    try {
        display.value = eval(display.value)
    } catch(error) {
        display.value = 'Error'
    }
}