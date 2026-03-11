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

export default function Calculator() {
    return (
        <div>
            <h1>Calculator</h1>
            <button onClick={() => { appendToDisplay('+') }}>+</button>
            <button onClick={() => { appendToDisplay('-') }}>-</button>
            <button onClick={() => { appendToDisplay('*') }}>*</button>
            <button onClick={() => { appendToDisplay('/') }}>/</button>
            <button onClick={() => { appendToDisplay('(') }}>(</button>
            <button onClick={() => { appendToDisplay(')') }}>)</button>
            <button onClick={() => { appendToDisplay('7') }}>7</button>
            <button onClick={() => { appendToDisplay('8') }}>8</button>
            <button onClick={() => { appendToDisplay('9') }}>9</button>
            <br />
            <button onClick={() => { appendToDisplay('4') }}>4</button>
            <button onClick={() => { appendToDisplay('5') }}>5</button>
            <button onClick={() => { appendToDisplay('6') }}>6</button>
            <br />
            <button onClick={() => { appendToDisplay('1') }}>1</button>
            <button onClick={() => { appendToDisplay('2') }}>2</button>
            <button onClick={() => { appendToDisplay('3') }}>3</button>
            <br />
            <button onClick={() => { appendToDisplay('0') }}>0</button>
            <br />
            <input type="text" id="display" readOnly />
            <br />
            <button onClick={calculate}>=</button>
            <button onClick={clearDisplay}>C</button>

        </div>
    );
}