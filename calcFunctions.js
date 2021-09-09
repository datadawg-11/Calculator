const add = (a,b) => a+b; 
const subtract = (a,b) => a-b;
const multiple = (a,b) => a*b;
const divide = (a,b) => a/b;

const operate = (call,a,b) => call(a,b)

// Create an object to store the values of calculator
const calc = {
    dispValue:'0123456789',
    firstNum:'',
    operand:null,
    secondNum:'',
    holdingVal:'' 
}

// Create a function that can be called to update the screen
function updateDisp() {
    const display = document.querySelector('h2'); 
    display.textContent = calc.dispValue;
}
updateDisp()

// Create a variable to store access to buttons
const buttonInput = document.getElementById('wrapper')
var sequence = Array(); //create an empty array to store button clicks

// Add an event listener to the buttons
buttonInput.addEventListener('click', event => {
    
    sequence.push(event.target.className); //push the class name to array
    // console.log(sequence);

    // Use reduce to find value_counts of the actions in array
    let uniqueElements = sequence.reduce((acc, val) => {
        acc[val] = acc[val] === undefined ? 1 : acc[val] +=1;
        return acc
    }, {})

    
    
    

    if (event.target.className.includes('operatorClear')) {
        // console.log('Its a clear operator selected',event.target.outerText)
        // console.log(typeof event.target.outerText)

        calc.dispValue = '';
        calc.firstNum = '';
        calc.secondNum = '';
        calc.operand = '';
        calc.holdingVal = '';  

        sequence = [];
        updateDisp();

    }

    else if (event.target.className.includes('operator')) {
        // console.log('Its an operator',event.target.outerText)
        // console.log(typeof event.target.outerText)
        updateHoldingVal(uniqueElements)
        operand(event);
    }
    else if ('number' in uniqueElements && 'operator' in uniqueElements && event.target.className.includes('number')) {
        // console.log('yess there iss number and operator')
               
        
        objSecondNumUpdate(event)
        updateDisp();
    }    
    
    else if (event.target.className.includes('number')) {
        // console.log('Its a number',event.target.outerText)
        
        objFirstNumUpdate(event);
        updateDisp();
    }

    else if (event.target.className.includes('result')) {
        // console.log('We want the result',event.target.outerText)
        
        answer()
        updateDisp();
    }
// console.log(uniqueElements)
// console.log(`Unique operators count ${uniqueElements}`)
console.log(calc)

})

// Function below updates the first number key in calc object
function objFirstNumUpdate(evt) {
    let str='';
    let x = evt.target.outerText; 
    // console.log(`x equals ${x}`)
    calc['firstNum'] = calc['firstNum'] + x;
    calc['dispValue'] = calc['dispValue'] + x;
}

// Function below updates the second number key in calc object
function objSecondNumUpdate(evt) {
    let str='';
    let x = evt.target.outerText;
    const reg = /[-*+=/]/g
    // console.log(`x equals ${x}`)
    
    calc['secondNum'] = calc['secondNum'] + x;
    calc['dispValue'] = calc['dispValue'] + x;
    // console.log('The display value is ', calc['dispVal'])
    calc['dispValue'] = calc['dispValue'].replace(reg,'')

}

function operand(evt) {
    if (evt.target.outerText === '/') {
        calc['operand'] = 'divide'
        calc['dispValue'] = '/'
        updateDisp()
    }

    else if (evt.target.outerText ==='*') {
        calc['operand'] = 'multiply'
        calc['dispValue'] = '*'
        updateDisp()
    }

    else if (evt.target.outerText === '+') {
        calc['operand'] = 'add'
        calc['dispValue'] = '+'
        updateDisp()
    }

    else if (evt.target.outerText === '-') {
        calc['operand'] = 'subtract'
        calc['dispValue'] = '-'
        updateDisp()
    }
}

function answer() {
    // console.log('we are within the answer nested function')
    
    var a = Number(calc['firstNum']);
    var b = Number(calc['secondNum'])
    var c = 0;
    // console.log('value of a is',a)
    // console.log('value of b is',b)


    if (calc['operand'] === 'divide') {
        // console.log('its a divide in the obj')
        c = divide(a,b)
        
    }

    else if (calc['operand'] === 'add') {
        // console.log('its a add in the obj')
        c = add(a,b)
        
    }

    else if (calc['operand'] === 'subtract') {
        // console.log('its a subtract in the obj')
        c = subtract(a,b)
      }

    else if (calc['operand'] === 'multiply') {
        // console.log('its a multiply in the obj')
        c = multiple(a,b)
    }
    
    calc['holdingVal'] = c
    calc['dispValue'] = c;
    console.log('calc upject shud be updated')
}

function updateHoldingVal(obj) {
    // if (uniqueElements['operator']>1) {
    //     let bla = answer()
    //     console.log('two operators called')
    // console.log(obj['number']>1)
    if (obj['operator']>1) {
        
        answer()
        // console.log(`value is ${x}`)
        console.log(calc)
        calc['firstNum'] = calc['holdingVal']
        calc['secondNum'] = ''
    }
 //   }
}
