var words = ["cat", "marmoset", "scorpion", "bunny rabbit", "aye-aye", "babbot worm"];
// pick a word
word = words[Math.floor(Math.random() * words.length)];
var answerArr = [];
// put down spaces
for (var i = 0; i < word.length; i++){
    answerArr[i] = "_";
}
// how many letters left
var remainingLetters = word.length;

//   ************************  The Game ***************************** //

while (remainingLetters > 0){
    alert(answerArr.join(" "));

    var guess = prompt("guess a letter or press cancel to stop playing");

    if (guess == null){
        break;
    } else if (guess.length !== 1){
        alert("please enter a single letter");
    } else {
        for(var j = 0; j < word.length; j++){
            if (word[j] === guess){
                answerArr[j] = guess;
                remainingLetters --;
            }
        }
    }
    //     ********************************** end of gameloop  ***********************//
}
alert(answerArr.join(" "));
alert("good job, the answer was " + word);