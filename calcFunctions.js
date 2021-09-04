const add = (a,b) => a+b; 
const subtract = (a,b) => a-b;
const multiple = (a,b) => a*b;
const buttonide = (a,b) => a/b;

const operate = (call,a,b) => call(a,b)

// Create an object to store the values of calculator
const calc = {
    dispValue:'0',
    firstNum:'',
    operand:null,
    secondNum:false 
}

// Create a function that can be called to update the screen
function updateDisp() {
    const display = document.querySelector('h2'); 
    display.textContent = calc.dispValue;
}


const buttonInput = document.getElementById('wrapper')
var sequence = Array();

buttonInput.addEventListener('click', event => {
    // console.log(event)
    sequence.push(event.target.className);
    console.log(sequence);

    var uniqueElements = sequence.reduce((acc, val) => {
        acc[val] = acc[val] === undefined ? 1 : acc[val] +=1;
        return acc
        
    }, {})
    console.log(uniqueElements)

    if (event.target.className.includes('operator')) {
        console.log('Its an operator',event.target.outerText)
        console.log(typeof event.target.outerText)
        operand(event);
    }
    else if ('number' in uniqueElements && 'operator' in uniqueElements && event.target.className.includes('number')) {
        console.log('yess there iss number and operator')
        objSecondNumUpdate(event)
    }    
    
    else if (event.target.className.includes('number')) {
        console.log('Its a number',event.target.outerText)
        
        objFirstNumUpdate(event);
        updateDisp();
    }
console.log(calc)
})

function objFirstNumUpdate(evt) {
    let str='';
    let x = evt.target.outerText; 
    console.log(`x equals ${x}`)
    calc['firstNum'] = calc['firstNum'] + x;
    calc['dispValue'] = calc['dispValue'] + x;
}

function objSecondNumUpdate(evt) {
    let str='';
    let x = evt.target.outerText; 
    console.log(`x equals ${x}`)
    calc['secondNum'] = calc['secondNum'] + x;
    // calc['dispValue'] = calc['dispValue'] + x;
}

function operand(evt) {
    if (evt.target.outerText === '/') {
        calc['operand'] = 'divide'
        console.log('hellow oworld')
    }

    else if (evt.target.outerText ==='*') {
        calc['operand'] = 'multiply'
    }

    else if (evt.target.outerText === '+') {
        calc['operand'] = 'add'
    }

    else if (evt.target.outerText === '-') {
        calc['operand'] = 'subtract'
    }
}

// buttonInput.forEach(btn => {
//     btn.addEventListener('click', event => {
//         if (event.target.outerText === "Clear") {
//             displayText.textContent = ''
        
//         } else {
//             // while ((parseInt(event.target.outerText)) === 'number') {
                
//                 userInput = event.target.outerText;
//                 console.log(userInput)
//                 // displayText.textContent = userInput;  
//             }  
//         })
    
// })

