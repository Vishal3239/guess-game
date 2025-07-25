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
    console.log(userGuess);
    console.log(randomValue);
    document.getElementById("get").value = "";
    if(userGuess==randomValue){
        console.log("winner");
        winner.innerHTML="----You are Winner----";
        hint.innerHTML=" Your Number Is: "+ userGuess+ " Matched";
        myNumber.innerHTML=randomValue;
        guess.disabled=true;
        document.getElementById("get").disabled=true;
    }else if(userGuess<randomValue){
         console.log("less");
         hint.innerHTML="Hint: Your Number Is Small";
    }else{
         console.log("big");
         hint.innerHTML="Your Number Is Big";
    }
    
}

restart.onclick = function () {
    location.href = "guess.html";
}

exit.onclick = function(){
    alert("you are exit game and close the window");
}



