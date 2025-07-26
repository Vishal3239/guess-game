let guess = document.getElementById("btn2");
let restart = document.getElementById("btn1");
let winner = document.getElementById("show");
let hint = document.getElementById("hint");
let myNumber = document.getElementById("myNumber");
let randomValue = generateRandomValue();
let exit = document.getElementById("btn3");

function generateRandomValue(){
    return Math.floor(Math.random()*100)+1;
}

guess.onclick = function(){
    let userGuess =
    Number(document.getElementById("get").value);
    
    document.getElementById("get").value = "";
    
    if(userGuess==randomValue){
        
        winner.innerHTML="----You are Winner----";
        hint.innerHTML=" Your Number Is: "+ userGuess+ " Matched";
        myNumber.innerHTML=randomValue;
        guess.disabled=true;
        document.getElementById("get").disabled=true;
        
    }else if(userGuess<randomValue){
         
         hint.innerHTML="Hint: Your Number Is Small";
    }else{
         
         hint.innerHTML="Your Number Is Big";
    }
    
}

restart.onclick = function () {
    location.href = "index.html";
}

exit.onclick = function(){
    alert("you are exit game and close the window");
}



