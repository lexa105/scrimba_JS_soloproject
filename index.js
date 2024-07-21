let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")


let homeScore = 0
let guestScore = 0

function addPoint() {
    
    console.log("button clicked");
    homeScore += 1
    homeEl.innerText = homeScore;
}

function addTwoPoint() {
    
    console.log("button clicked");
    homeScore += 2
    homeEl.innerText = homeScore;
}

function addThreePoint() {
    console.log("button clicked");
    homeScore += 3
    homeEl.innerText = homeScore;    
    
}


function addPointG() {
    
    console.log("button clicked");
    guestScore += 1
    guestEl.innerText = guestScore;
}

function addTwoPointG() {
    
    console.log("button clicked");
    guestScore += 2
    guestEl.innerText = guestScore;
}

function addThreePointG() {
    console.log("button clicked");
    guestScore += 3
    guestEl.innerText = guestScore;    
    
}