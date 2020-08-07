//Elementos do front que serão manipulados
let screen = document.getElementById("principal")
let screenTwo = document.getElementById("res")

//Função para adicionar um listener em cada um dos botões
function addEventsOnButtons() {
    const buttons = document.getElementsByClassName("button")
    
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click",pressedNumber)
    }
}

//Data Structure
let pressedValue // Tecla pressionada
let factorArr = [] // Array para salvar os fatores
let operatorArr // Operador que será usado na conta
let pNumber = "" //Variável para salvar o fator antes de ser parseado e colocado no array 

function pressedNumber() {
    pressedValue = event.target.textContent

    if (screen.textContent.length == 5) {
        return
    }

    if (pressedValue == "c") {
        cleanData()
        cleanScreen()
    }

    else if (pressedValue == "=") {
        addFactorToArr(pNumber)
        calcValues(operatorArr[0])
        cleanScreen()
        cleanData()
        addResToScreenTwo(result)
        addFactorToArr(result)
        pNumber = result
    }

    else if (pressedValue == "/" || pressedValue == "*" || pressedValue == "-" || pressedValue == "+") {
        addOperatorToArr(pressedValue)
        addFactorToArr(pNumber)
        pNumber = ""
        cleanScreen()
        addNumberToScreenTwo(factorArr[0])
    }

    else {
        addNumberOnScreen(pressedValue)
        pNumber += pressedValue
    }
}

function addFactorToArr(factor) {
    if (factorArr.length > 0) {
        return 
    }
    else {
        factorArr.push(Number(factor))
    }
}

function addOperatorToArr(operator) {
    operatorArr = operator
}

//Process Data
function calcValues(operator) {
    if (operator == "+") {
        result = factorArr[0] + factorArr[1]
    }
}

function cleanData() {
    pressedValue = ""
    pNumber = ""
    factorArr = []  
    operatorArr = ""
}

//Draw
function addNumberOnScreen(element) {
    screen.innerHTML += element
}

function addNumberToScreenTwo(number) {
    screenTwo.textContent = number
}

function addResToScreenTwo(result) {
    screenTwo.textContent = result
}

function cleanScreen() {
    screen.textContent = ""
    screenTwo.textContent = ""
}