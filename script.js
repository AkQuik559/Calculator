// get the display and save it to a variable display
let display = document.getElementById('display');

// get all the buttons by going through the html and searching for 
// every element that has the class button
//Convert it to an Array
let buttons = Array.from(document.getElementsByClassName('button'));

//Map to buttons array and add click Event Listener to all buttons in array
buttons.map( button =>{
    button.addEventListener('click', (e) =>{
        switch(e.target.innerText){ //Checks the event being clicked and displays it to the innerText.
            case 'C':
                display.innerText = "";
                break;

            case '←':
                if(display.innerText){// only deletes if there is something in the innerText of the display.
                    display.innerText = display.innerText.slice(0, -1); //Deletes 1 character at a time.
                }
                break;

            case '=':
                try{
                    display.innerText = eval(display.innerText); //eval does the calculations for you when using the equal sign.
                }
                catch{
                    display.innerText = 'Invalid Input';
                }
                break;
            
            default: // we want the innerText of the button to display on the innerText of the display.
            display.innerText += e.target.innerText;
            
        }
    });
});
