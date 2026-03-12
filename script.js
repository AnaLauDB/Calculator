function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    const display = document.getElementById('display');
    try {
        let expression = display.value;

        // Agregar * entre número y paréntesis de apertura: 4( → 4*(
        expression = expression.replace(/(\d)\(/g, '$1*(');

        // Agregar * entre paréntesis de cierre y número: )4 → )*4
        expression = expression.replace(/\)(\d)/g, ')*$1');

        // Agregar * entre paréntesis de cierre y paréntesis de apertura: )( → )*(
        expression = expression.replace(/\)\(/g, ')*(');

        display.value = eval(expression);
    } catch (e) {
        display.value = 'Error';
    }
}   