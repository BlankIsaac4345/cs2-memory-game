console.log("Script started")

let guesses = 0;
let firstCard = "";
let secondCard = "";

function flipcard(cardId){
    console.log("click");

    let card = document.getElementById(cardId);
    card.style.color = "black";
    card.style.backgroundColor = "white";
    
    // chack if this is their first choice
    if (firstCard == "") {
    // store first card id
    firstCard = cardId;
    }
    else {
        secondCard = cardId;

        //check for match
        setTimeout(checkForMatch, 500)
    }

    // check for a match


}

function checkForMatch() {
    // get card divs

    let card1 = document.getElementById(firstCard);
    let card2 = document.getElementById(secondCard);

    if (card1.innerText == card2.innerText) {
        console.log("Match");
        card1.style.backgroundColor = "lightgreen";
        card2.style.backgroundColor = "lightgreen";
    }
    else {
        card1.style.color = "rgb(55, 55, 55)";
        card2.style.color = "rgb(55, 55, 55)";
        card1.style.backgroundColor = "rgb(55, 55, 55)";
        card2.style.backgroundColor = "rgb(55, 55, 55)";
    }

    firstCard = "";
    secondCard = "";
}