//Função para adicionar os listeners nos botões
let buttons = document.getElementsByClassName("button")
for(let i=0; i<buttons.length;i++) {
    buttons[i].addEventListener("click",checkButton)
}

function checkButton() {
    let pressedButton = event.target //Evento que disparou a função
    let buttonType = event.target.classList[1] //Tipo de botão pressionado (numero ou operador)
    let buttonContent = event.target.textContent //Conteudo do botão
    
    //Salva o díígito pressionado e mostra na tela
    if (buttonType == 'number') {
        
        savePNumber(buttonContent) 
        drawOne(pNumber)
    }

    //Confere qual operador foi pressionado e executa as respectivas funções 
    else if (buttonType == 'operator') {
        if (buttonContent == '=') {
            savePNumberOnArr(pNumber)
            calcValue(factorArr[0],factorArr[1],oper)
            drawOne('')
            drawTwo(result)
        }
        else if (buttonContent == 'c') {
            pNumber = ''
            factorArr = []
            drawOne('')
            drawTwo('')
        }
        else {
            addOperator(buttonContent)
            drawOne('')
        }
        
    }
    console.log(buttonContent)
}

let pNumber = ""
function savePNumber(digit) {
    let pNumberLength = pNumber.length
    if (pNumberLength < 5) {
        pNumber += digit
    }
    else {
        return
    }
}


//função para salvar o operador pressionado
let oper
function addOperator(operator) {
    if (factorArr.length > 0) {
        //Executar operação e salvar o resultado como primeiro fator para a próxima operação
        savePNumberOnArr(pNumber)
        calcValue(factorArr[0],factorArr[1],oper)
        oper = operator
        
    }
    else {
        //Salvar o fator no array e o operador na variavel de operador
        savePNumberOnArr(pNumber)
        oper = operator
        drawTwo(factorArr[0])
    }
}

//array pra salvar os fatores, sempre mantêm no máximo dois fatores no array e executa a conta por Array[0] operador Array[1] e reseta as posiçõões após a conta
let factorArr = []
function savePNumberOnArr(factor) {
    let parsedNumber = Number(factor)
    factorArr.push(parsedNumber)
    pNumber = ''
}

//Executa as operações e salva o resultado como novo fator para a próóxima conta
let result
function calcValue(factor1,factor2,operator) {
    if (operator == '+') {
        result = factor1 + factor2
    }
    else if (operator == '-') {
        result = factor1 - factor2
    }

    if (operator == '*') {
        result = factor1 * factor2
    }
    else if (operator == '/') {
        result = factor1 / factor2
    }

    factorArr = []
    savePNumberOnArr(result)
    oper = ''
    console.log(result)
}

//Draw 
let screen = document.getElementById('principal')
let screenTwo = document.getElementById('res')

function drawOne(value) {
    screen.textContent = value
}

function drawTwo(value) {
    screenTwo.textContent = value
}