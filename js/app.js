function getPin(){
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }
    else{
        getPin();
    }

}
function generatePin(){
    const pin = getPin();
    document.getElementById("display-pin").value = pin;
}

document.getElementById("key-pad").addEventListener("click",function(event){
    const number = event.target.innerText;
    const calcInput = document.getElementById("typed-numbers");
    if(isNaN(number)){
        if(number == "C"){
            calcInput.value = '';
        }
    }
   else{
    const previousNumber = calcInput.value;
    const newNumber = previousNumber + number;
    calcInput.value = newNumber;
   }
});

// verify pin 
function verifyPin(){
    const pin = document.getElementById("display-pin").value;
    const typedNumber = document.getElementById("typed-numbers").value;

    const successMsg =  document.getElementById("notifySucces");
    const failMsg =  document.getElementById("notifyFail");

    if(pin==typedNumber){
        successMsg.style.display = "block";
        failMsg.style.display = "none";
    }
    else{
        failMsg.style.display = "block";
        successMsg.style.display = "none";
    }
}