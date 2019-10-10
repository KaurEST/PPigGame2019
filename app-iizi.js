var scores, roundScore, activePlayer, winValue;

winValue = 100;

init();

document.querySelector(".btn-roll").addEventListener("click", function() {
   
    //1. Random nr
    var dice = Math.floor(Math.random() * 6) + 1;
    
    //2. Näita tulemust
    var diceDOM = document.querySelector(".dice");

    
    diceDOM.style.display = "block";
    diceDOM.src = "dice-" + dice + ".png";
    
    
    //3. Update round score kui nr pole 1
    if (dice !== 1) {
        //Lisa skoor
        roundScore += dice;
        document.querySelector("#current-" + activePlayer).textContent = roundScore;
    } else {
        //Järgmine mängija
        nextPlayer();   
    }
    
});

document.querySelector(".btn-hold").addEventListener("click", function() {
    //Lisa raundi skoor päris skoorile
    scores[activePlayer] += roundScore;
    document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];    
        
    //Vaata kas mängija on võitnud
    if (scores[activePlayer] >= winValue) {
        document.querySelector("#name-" + activePlayer).textContent = "WINNER!"
        document.querySelector(".dice").style.display = "none";
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
}

document.querySelector(".btn-new").addEventListener("click", init);


function init() {
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;
    
    document.querySelector(".dice").style.display = "none";

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

















