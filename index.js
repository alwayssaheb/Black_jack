let cards  = [];
let sum =0;
let hasBlackJack = false;

let isAlive = false;

let message = "";

let messageEl = document.getElementById("message-el");
let sumEL = document.getElementById("sum-el");
let cardEl = document.querySelector("#card-el");

let player = {
     name: "per",
     chips: 145
}

console.log(cards);


let playerel = document.getElementById("player-el");
playerel.textContent = player.name + " $" + player.chips;

function getrandomCard(){
    let ans = Math.floor(Math.random()*13) + 1; 
    if(ans > 10){
        return 10;
    }
    else if(ans === 1){
        return 11;
    }
    else {
        return ans;
    }


    return Math.floor(Math.random()*13) + 1;
}

function startgame() {
    isAlive = true;
    let firstnumber = getrandomCard();
    let secondnumber  = getrandomCard();
    sum = firstnumber + secondnumber;
    cards.push(firstnumber);
    cards.push(secondnumber);
    rendergame();
}
function rendergame(){
    // cardEl.textContent = "Cards:" + cards[0] + "  -  " + cards[1] ;
    cardEl.textContent = "Cards: ";
    for(let i = 0 ; i < cards.length ; i++){
        cardEl.textContent +=  cards[i] +  " ";
    }
    sumEL.textContent = "Sum: " + sum;
    if(sum <= 20) {
        message =  "do you want to draw a new card";
    }
    else if(sum === 21){
         message = "You've got blackjack";
        hasBlackJack = true;
    }
    else{
        message = "you're out of the game";
        isAlive = false;
    } 
    
    messageEl.textContent = message;
}
function newcard(){
    if(isAlive == true && hasBlackJack == false){
        let card = getrandomCard(); 
        sum += card;
        cards.push(card);
        rendergame();
    }   
}