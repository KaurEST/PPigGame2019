function gameMode() {
    var mode = confirm("Do you wish to play the HARD mode? OK for YES, CANCEL for NO.");
    
    var scriptTag = document.createElement("script");
    var imgTag = document.createElement("img");
    
    
    if (mode) {
        scriptTag.src = "app-hard.js";
        document.getElementById("mainWrapper").appendChild(imgTag);
        imgTag.src = "dice-5.png";
        imgTag.classList.add("dice2");
    } else {
        scriptTag.src = "app-iizi.js";
        
    }
    
    document.body.appendChild(scriptTag);
}
gameMode();
