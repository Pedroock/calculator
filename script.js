// buttons
plusBtn = document.querySelector('#plus-btn')
minusBtn = document.querySelector('#minus-btn')
multiplyBtn = document.querySelector('#multiply-btn')
divideBtn = document.querySelector('#divide-btn')
oneBtn = document.querySelector('#one-btn')
twoBtn = document.querySelector('#two-btn')
threeBtn = document.querySelector('#three-btn')
fourBtn = document.querySelector('#four-btn')
fiveBtn = document.querySelector('#five-btn')
sixBtn = document.querySelector('#six-btn')
sevenBtn = document.querySelector('#seven-btn')
eightBtn = document.querySelector('#eight-btn')
nineBtn = document.querySelector('#nine-btn')
zeroBtn = document.querySelector('#zero-btn')
pointBtn = document.querySelector('#point-btn')
clearBtn = document.querySelector('#clear-btn')
equalBtn = document.querySelector('#equal-btn')
var numberBtnList = [zeroBtn, oneBtn, twoBtn, threeBtn, fourBtn, fiveBtn, sixBtn, sevenBtn, eightBtn, nineBtn]
/*
console.log(numberBtnList)
numberBtnList.forEach(function(x){
    console.log(x.innerHTML)
});
*/
// variables
var displayEquation = document.querySelector('p')
var displyAmount = document.querySelector('h1')
var loop = 1
var operation
var amount
var displayElement = ''
var operatorCheck
var numberList = []
var operatorList = []
var index
var sub
//numbers display
numberBtnList.forEach(function(btn){
    btn.addEventListener('click', function(){
        let number = `${btn.innerHTML}`
        if(displayEquation.innerHTML == '0'){
            displayEquation.innerHTML = number
            displayElement = displayElement + number
            operatorCheck = false
        }else{
            displayElement = displayElement + number
            displayEquation.innerHTML += number
            operatorCheck = false
        }
    })
});
pointBtn.addEventListener('click', function(){
    if(displayElement.includes('.') == false){
        displayElement += '.'
        displayEquation.innerHTML += '.'
    }
})
clearBtn.addEventListener('click', function(){
    displayEquation.innerHTML = '0'
    displyAmount.innerHTML = ''
    displayElement = ''
    numberList = []
    operatorList = []
    displayEquation.style.display = 'flex'
})
// operators disply
// a=+   b=-   c=×   d=/
plusBtn.addEventListener('click', function(){
    if(operatorCheck == false){
        displayEquation.innerHTML += '+'
        numberList.push(parseFloat(displayElement))
        operatorList.push('plus')
        displayElement = ''
        operatorCheck = true
    }
    else if(operatorCheck == true){
        displayEquation.innerHTML = displayEquation.innerHTML.slice(0, -1)
        displayEquation.innerHTML += '+'
        operatorList.pop()
        operatorList.push('plus')
    }
})
minusBtn.addEventListener('click', function(){
    if(operatorCheck == false){
        displayEquation.innerHTML += '-'
        numberList.push(parseFloat(displayElement))
        operatorList.push('minus')
        displayElement = ''
        operatorCheck = true
    }
    else{
        displayEquation.innerHTML = displayEquation.innerHTML.slice(0, -1)
        displayEquation.innerHTML += '-'
        operatorList.pop()
        operatorList.push('minus')
    }
})
multiplyBtn.addEventListener('click', function(){
    if(operatorCheck == false){
        displayEquation.innerHTML += '×'
        numberList.push(parseFloat(displayElement))
        operatorList.push('multiply')
        displayElement = ''
        operatorCheck = true
    }
    else{
        displayEquation.innerHTML = displayEquation.innerHTML.slice(0, -1)
        displayEquation.innerHTML += '×'
        operatorList.pop()
        operatorList.push('multiply')
    }
})
divideBtn.addEventListener('click', function(){
    if(operatorCheck == false){
        displayEquation.innerHTML += '/'
        numberList.push(parseFloat(displayElement))
        operatorList.push('divide')
        displayElement = ''
        operatorCheck = true
    }
    else{
        displayEquation.innerHTML = displayEquation.innerHTML.slice(0, -1)
        displayEquation.innerHTML += '/'
        operatorList.pop()
        operatorList.push('divide')
    }
})
var loop = 1
equalBtn.addEventListener('click', function(){
    numberList.push(parseFloat(displayElement))
    console.log(numberList)
    console.log(operatorList)
    while(operatorList.length > 0){
        loop ++
        if(loop == 100){
            break
        }
        if(operatorList.length == 0){
            console.log('aaaaa')
            break
        }
        if(operatorList.includes('multiply') == true){
            index = operatorList.indexOf('multiply')
            operation = numberList[index] * numberList[index + 1]
            operatorList.splice(index, 1)
            numberList.splice(index, 1)
            numberList.splice(index, 1, operation)
            console.log(numberList)
            console.log(operatorList)
        }
        if(operatorList.includes('divide') == true){
            index = operatorList.indexOf('divide')
            operation = numberList[index] / numberList[index + 1]
            operatorList.splice(index, 1)
            numberList.splice(index, 1)
            numberList.splice(index, 1, operation)
            console.log(numberList)
            console.log(operatorList)
        }
        console.log(operatorList.includes('multiply'), 'check1')
        console.log(operatorList.includes('divide'), 'check2')
        if(operatorList.includes('multiply') == false){
            console.log('entro if 1')
            if(operatorList.includes('divide') == false){
                console.log('entro if 2')
                console.log('ta sem x e /')
                console.log(numberList)
                console.log(operatorList)
                index = operatorList.indexOf('plus')
                if(index > -1){
                    operation = numberList[index] + numberList[index + 1]
                    operatorList.splice(index, 1)
                    numberList.splice(index, 1)
                    numberList.splice(index, 1, operation)
                    console.log(numberList)
                    console.log(operatorList)
                }
                index = operatorList.indexOf('minus')
                if(index > -1){
                    operation = numberList[index] - numberList[index + 1]
                    operatorList.splice(index, 1)
                    numberList.splice(index, 1)
                    numberList.splice(index, 1, operation)
                    console.log(numberList)
                    console.log(operatorList)
                }
            }
        }
        if(operatorList.length == 0){
            console.log('acabou')
            amount = numberList[0]
            displyAmount.innerHTML = `${amount}`
            displayEquation.style.display = 'none'
        }
    }
})

// NAO ESQUECER DE COLOCAR CONDIÇÃO DE NAO REPETIÇÃO EM OPERADORES E NO PONTO
// o operador da pos x interfere com o numero de pos x  x+1
/* 
tendo problema com a operação menos, onde algo como 2 - 3 + 1 vai causar -2 ao inves 0
eu no sei se isso é pq a direção ta +, - ao inves de -,+ eu vou tentar isso dps
ou talvez eu tenha q adicionar os numeros como negativo  TO PUTO Q EU NÃO PREVI ISSO
 */