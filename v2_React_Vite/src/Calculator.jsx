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

        expression = expression.replace(/(\d)\(/g, '$1*(');

        expression = expression.replace(/\)(\d)/g, ')*$1');

        expression = expression.replace(/\)\(/g, ')*(');

        display.value = eval(expression);
    } catch (e) {
        display.value = 'Error';
    }
}

export default function Calculator() {
    return (
        <div className="calculator-container">
            <h1 className="calculator-title">Calculator</h1>
            <input
                type="text"
                id="display"
                className="calculator-display"
                readOnly
            />
            <div className="calculator-buttons">
                <button className="calculator-button operator" onClick={clearDisplay}>C</button>
                <button className="calculator-button operator" onClick={() => { appendToDisplay('(') }}>(</button>
                <button className="calculator-button operator" onClick={() => { appendToDisplay(')') }}>)</button>
                <button className="calculator-button operator" onClick={() => { appendToDisplay('/') }}>/</button>

                <button className="calculator-button" onClick={() => { appendToDisplay('7') }}>7</button>
                <button className="calculator-button" onClick={() => { appendToDisplay('8') }}>8</button>
                <button className="calculator-button" onClick={() => { appendToDisplay('9') }}>9</button>
                <button className="calculator-button operator" onClick={() => { appendToDisplay('*') }}>*</button>

                <button className="calculator-button" onClick={() => { appendToDisplay('4') }}>4</button>
                <button className="calculator-button" onClick={() => { appendToDisplay('5') }}>5</button>
                <button className="calculator-button" onClick={() => { appendToDisplay('6') }}>6</button>
                <button className="calculator-button operator" onClick={() => { appendToDisplay('-') }}>-</button>

                <button className="calculator-button" onClick={() => { appendToDisplay('1') }}>1</button>
                <button className="calculator-button" onClick={() => { appendToDisplay('2') }}>2</button>
                <button className="calculator-button" onClick={() => { appendToDisplay('3') }}>3</button>
                <button className="calculator-button operator" onClick={() => { appendToDisplay('+') }}>+</button>

                <button className="calculator-button zero" onClick={() => { appendToDisplay('0') }}>0</button>
                <button className="calculator-button" onClick={() => { appendToDisplay('.') }}>.</button>
                <button className="calculator-button equals" onClick={calculate}>=</button>
            </div>
        </div>
    );
}