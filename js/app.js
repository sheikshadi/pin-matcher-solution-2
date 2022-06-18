
function getPin(){
    const pin = Math.round(Math.random()* 10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }
    else{
        // console.log('got 3 digit pin', pin);
        return getPin();
    }
}
function generatePin(){
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function(event){
    const number =  event.target.innerText;
    const caleInput =  document.getElementById('typed-numbers');
    if(isNaN(number)){
        if(number == 'C'){
            caleInput.value = '';
        }
    }
    else{
    const previousNumber = caleInput.value;
    const newNumber = previousNumber + number;
    caleInput.value = newNumber;
    }
})

function verifypin(){
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const successMessage = document.getElementById('notify-success');
    const failError = document.getElementById('notify-fail');

    if(pin == typedNumbers){
        successMessage.style.display = 'block';
        failError.style.display = 'none';
    }
    else{
        successMessage.style.display = 'none';
        failError.style.display = 'block';
    }
}