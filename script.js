class Calculator {
    constructor() {
        this.display = document.getElementById('display');
        this.buttons = document.querySelectorAll('.btn');
        this.equalsButton = document.getElementById('equals');
        this.clearButton = document.getElementById('clear');
        
        this.currentInput = '';
        this.initialize();
    }

    initialize() {
        this.buttons.forEach(button => {
            button.addEventListener('click', (event) => this.handleButtonClick(event));
        });

        this.equalsButton.addEventListener('click', () => this.calculateResult());
        this.clearButton.addEventListener('click', () => this.clearDisplay());
    }

    handleButtonClick(event) {
        const value = event.target.getAttribute('data-value');
        if (value) {
            this.currentInput += value;
            this.updateDisplay();
        }
    }

    updateDisplay() {
        this.display.value = this.currentInput;
    }

    calculateResult() {
        try {
            this.currentInput = eval(this.currentInput) || '';
            this.updateDisplay();
        } catch (error) {
            this.display.value = 'Error';
        }
    }

    clearDisplay() {
        this.currentInput = '';
        this.updateDisplay();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new Calculator();
});
