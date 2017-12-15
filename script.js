
var wordsEasy = ["attack","afraid","border","bear","cloud","common","dangerous","destroy","explore","education","finger","flower","garden","gift"]
var wordsMedium = ["heterogeneous","hydrolysis","iguana","incident","jurisdiction","jurisprudence","kaleidoscope","knowledge","legislate","livelihood","mythology","mayhem","notorious","nonetheless"]
var wordsDifficult = ["omniscience","onomatopoeia","paraphernalia","pasteurize","quadruped","questionnaire","reconnaissance","rendezvous","sagittarius","schizophrenic","triskaidekaphobia","troubadour","vinaigrette","voyeuristic","wildebeest","withdrawal","xylophone","xenomorphic","yarmulke","yeoman","zephyr","zucchini"]
var numGuesses = 6;
var guesses = [];
var word = "";

function doIt(){
    document.getElementById("selectDifficulty").style.display = "none";
    document.getElementById("myButton").style.display = "none";
    startGame();
    printWord();
}

function startGame(){
    var difficulty = document.getElementById("selectDifficulty").value;
    if(difficulty == 1){
        word = wordsEasy[Math.floor(Math.random() * wordsEasy.length)];
    }
    if(difficulty == 2){
        word = wordsMedium[Math.floor(Math.random() * wordsMedium.length)];
    }
    if(difficulty == 3){
        word = wordsDifficult[Math.floor(Math.random() * wordsDifficult.length)];
    }
    console.log(word);
    printWord();
}

//not found
//collection.indexOf(searchThing) == -1

function printWord(){
    var returnWord = ""
    for(var i = 0; i < word.length; i++) {
        if (guesses.indexOf(word[i]) == -1) {
            returnWord = returnWord + "_ "
        } else {
            returnWord = returnWord + word[i]
        }
    }
    document.getElementById("wordRandom").innerHTML = returnWord;
    document.getElementById("lettersGuessed").innerHTML = "<p>Guessed Letters: <b>" + guesses + "</b></p>"
}



function doGuess(){
    var guess = document.getElementById("selectLetter").value;
    guesses.push(guess);
    document.getElementById(guess).disabled = true;

    printWord();
    if(word.indexOf(guess) != -1){
        numGuesses = numGuesses + 0;
    }
    if(word.indexOf(guess) == -1){
        numGuesses = numGuesses - 1;
    }
    document.getElementById("guessesLeft").innerHTML = "<p>Guesses Left: <b>" + numGuesses + "</b></p>"

    if(numGuesses == 5){
        document.getElementById("picture").innerHTML = "<img src='img/Hangman1.jpg'>";
    }
    if(numGuesses == 4){
        document.getElementById("picture").innerHTML = "<img src='img/Hangman2.jpg'>";
    }
    if(numGuesses == 3){
        document.getElementById("picture").innerHTML = "<img src='img/Hangman3.jpg'>";
    }
    if(numGuesses == 2){
        document.getElementById("picture").innerHTML = "<img src='img/Hangman4.jpg'>";
    }
    if(numGuesses == 1){
        document.getElementById("picture").innerHTML = "<img src='img/Hangman5.jpg'>";
    }
    console.log(numGuesses);
    determineGame();
}

function determineGame(){
    if(numGuesses == 0){
        document.getElementById("selectLetter").style.display = "none";
        document.getElementById("newButton").style.display = "none";
        document.getElementById("wordRandom").style.display = "none";
        document.getElementById("guessesLeft").style.display = "none";
        document.getElementById("lettersGuessed").style.display = "none"
        document.getElementById("picture").innerHTML = "<img src='img/Game Over.jpg'>"
    }

    if(word == document.getElementById("wordRandom").innerHTML){
        document.getElementById("selectLetter").style.display = "none";
        document.getElementById("newButton").style.display = "none";
        document.getElementById("wordRandom").style.display = "none";
        document.getElementById("guessesLeft").style.display = "none";
        document.getElementById("lettersGuessed").style.display = "none";
        document.getElementById("picture").innerHTML = "<img src='img/congrats.jpg'>";
    }

}


function refreshPage(){
    location.reload();
}
//grab guess letter from page
//push it in to guesses

//determine win/loss

//run printWord again





