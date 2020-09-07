let currentFactor = ''
let previousFactor = ''
let operand = ''
let result
class Calculator {
    constructor(currentFactor,previousFactor) {
        this.currentFactor = currentFactor
        this.previousFactor = previousFactor
        this.operand = operand
    }

    saveFactors(factor) {
        currentFactor += factor
    }

    clear() {
        screen1.innerText = ''
        screen2.innerText = ''
        currentFactor = ''
        previousFactor = ''
        operand = ''
        result = ''
    }

    del() {
        currentFactor = currentFactor.slice(0,-1)
    }

    display() {
        if( currentFactor == '' ) {
            screen1.innerText = previousFactor + operand
            screen2.innerText = ''
        } else {
            screen2.innerText = currentFactor
        }
        if( currentFactor != '' ) {
            screen1.innerText = previousFactor + operand
        }
    }

    calculate() {
        currentFactor = Number(currentFactor)
        previousFactor = Number(previousFactor)

        switch(operand) {
            case '+':
                result = currentFactor + previousFactor
                break
            case '-':
                result = previousFactor - currentFactor
                break
            case '*':
                result = previousFactor * currentFactor
                break
            case '/':
                result = previousFactor / currentFactor
                break
        }
        operand = ''
        previousFactor = result
        currentFactor = ''
    }

    getOperator(operator) {
        operand = operator
        if( currentFactor === '' ) {
            return
        }
        else if ( previousFactor === '' ) {
            previousFactor = currentFactor
            currentFactor = ''
        }
    }
}

const calculator = new Calculator(currentFactor,previousFactor,operand)

const screen1 = document.getElementById('screen1')
const screen2 = document.getElementById('screen2')
const operators = document.getElementsByClassName('operator')
const numbers = document.getElementsByClassName('number')
const equals = document.getElementById('equals') 
const allClear = document.getElementById('all-clear')
const del = document.getElementById('delete')

//Adicionar cliques nos botões 
for( operator of operators ) {
    operator.addEventListener('click', function() {
        calculator.getOperator(event.target.innerText)
        calculator.display()
    })
}

for( number of numbers ) {
    number.addEventListener('click', function() {
        calculator.saveFactors(event.target.innerText)
        calculator.display()
    })
}

equals.addEventListener('click', () => {
    calculator.calculate()
    calculator.display()
})

allClear.addEventListener('click',calculator.clear)

del.addEventListener('click', () => {
    calculator.del()
    calculator.display()
})