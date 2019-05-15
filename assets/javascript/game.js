
var game = ["January", "February", "March", "April", "May"];
var choice = Math.floor(Math.random() * 5);
var answer = game[choice];
var myLength = answer.length;
var display = [myLength];
var win = myLength;
var letters = answer.split('');
var attemptsLeft = 10;
var output ="";
var userLetter ="";

var setup = function(){
    for ( i = 0; i < answer.length; i++)
    { display[i] = "_ ";
    output = output + display[i];
    }
    document.getElementById("game").innerHTML = output;
    output = "";
}

window.onload = function(){
    setup();
    document.getElementsByClassName("guessLetter").onClick = submit();
}

var submit = function(){


    output = "";
    userLetter=document.getElementsByClassName("guessLetter").value;
    document.getElementsByClassName("guessLetter").value = "";

    for (var c = 0; c < answer.length; c++)
    {
        if(userLetter.toUpperCase() == letters[c])
        {
        display[c] = userLetter.toUpperCase();
        win--;
        }

        output = output + display[c] + " ";
    }
}

document.getElementById("game").innerHTML = output;
output = "";
attemptsLeft--;

if (win < 1){
    document.getElementById("guesses").innerHTML = "YOU WIN!!";
}
else if (attemptsLeft < 1){
    document.getElementById("guesses").innerHTML = "YOU LOSE!!";
}
else{
    document.getElementById("guesses").innerHTML = "You have " + attemptsLeft + " guesses left";
}
