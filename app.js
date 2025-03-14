const wordEl = document.querySelector(".word")
const oldWordsEl = document.querySelector(".old-words")

//Wortliste_Array
let words = [];
let currentword = "";
let previousWords = [];



fetch("words.txt").then(function(response){
   return response.text();
})
.then(function(text){
    words = text.split(',');
});

//Button klick
function onClick(){
    if(currentword){
        previousWords.push(currentword);
        oldWordsEl.innerHTML = previousWords.join(', ');
    }
    currentword = getRandomWord();
    wordEl.innerHTML = currentword;
}

function getRandomNumber(maxNumber){
    return Math.floor(Math.random() * maxNumber);
}

function getRandomWord(){
    return words[getRandomNumber(words.length)]
}