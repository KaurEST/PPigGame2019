var scores, roundScore, activePlayer, winValue;

winValue = 100;

init();

var lastDice1;
var lastDice2;

document.querySelector(".btn-roll").addEventListener("click", function() {
   
    //1. Random nr
    var dice = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;
    
    //2. Näita tulemust
    var diceDOM1 = document.querySelector(".dice");
    var diceDOM2 = document.querySelector(".dice2");
    
    diceDOM1.style.display = "block";
    diceDOM1.src = "dice-" + dice + ".png";
    
    diceDOM2.style.display = "block";
    diceDOM2.src = "dice-" + dice2 + ".png";
    
    
    //3. Update round score kui nr pole 1
    if ((dice === 6 && lastDice1 === 6) || (dice2 === 6 && lastDice2 === 6) || (dice === 6 && lastDice2 === 6) || (dice2 === 6 && lastDice1 === 6) || (dice === 6 && dice2 === 6)) {
        scores[activePlayer] = 0;
        document.querySelector("#score-" + activePlayer).textContent = 0;
        nextPlayer();
    
    } else if (dice !== 1 && dice2 !== 1) {
        //Lisa skoor
        roundScore += (dice + dice2);
        document.querySelector("#current-" + activePlayer).textContent = roundScore;
    } else {
        //Järgmine mängija
        nextPlayer();   
    }
    
    lastDice1 = dice;
    lastDice2 = dice2;
    
    
});

document.querySelector(".btn-hold").addEventListener("click", function() {
    //Lisa raundi skoor päris skoorile
    scores[activePlayer] += roundScore;
    document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];    
        
    //Vaata kas mängija on võitnud
    if (scores[activePlayer] >= winValue) {
        document.querySelector("#name-" + activePlayer).textContent = "WINNER!"
        document.querySelector(".dice").style.display = "none";
        document.querySelector(".dice2").style.display = "none";
        document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
        document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
        
        document.querySelector(".btn-roll").style.display = "none";
        document.querySelector(".btn-hold").style.display = "none";
    } else {
        nextPlayer();
    }   
});

function nextPlayer() {
    
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";
        
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
        
    document.querySelector(".dice").style.display = "none";
    document.querySelector(".dice2").style.display = "none";
}

document.querySelector(".btn-new").addEventListener("click", init);


function init() {
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;
    
    document.querySelector(".dice").style.display = "none";
    document.querySelector(".dice2").style.display = "none";

    document.getElementById("score-0").textContent = "0";
    document.getElementById("score-1").textContent = "0";
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";
    
    document.querySelector("#name-0").textContent = "Player 1"
    document.querySelector("#name-1").textContent = "Player 2"
    
    document.querySelector(".btn-roll").style.display = "block";
    document.querySelector(".btn-hold").style.display = "block";
    
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");
    document.querySelector(".player-" + activePlayer + "-panel").classList.add("active");
    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");
    
    
}


document.querySelector(".btn-set").addEventListener("click", function() {
    winValue = document.querySelector("#winSum").value;
    init();
});

















