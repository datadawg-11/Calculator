const add = (a,b) => a+b; 
const subtract = (a,b) => a-b;
const multiple = (a,b) => a*b;
const buttonide = (a,b) => a/b;

const operate = (call,a,b) => call(a,b)

// Create an object to store the values of calculator
const calc = {
    dispValue:'0',
    firstNum:null,
    operand:null,
    secondNum:false 
}

// Create a function that can be called to update the screen
function updateDisp() {
    const display = document.querySelector('h2'); 
    display.textContent = calc.dispValue;
}






const buttonInput = document.getElementById('wrapper')

buttonInput.addEventListener('click', event => {
    console.log(event)
    if (event.target.className.includes('operator')) {
        console.log('Its an operator',event.target.outerText)
        
        
    }
    else if (event.target.className.includes('number')) {
        console.log('Its a number',event.target.outerText)
        generator(event)
    }
})

function generator(evt) {
    let str='';
    let x = evt.target.outerText; 
    str+=x
    console.log(str)
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

