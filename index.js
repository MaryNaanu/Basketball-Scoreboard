let homeScoreBtn1= document.getElementById("home-score-btn1")
let homeScoreBtn2= document.getElementById("home-score-btn2")
let homeScoreBtn3= document.getElementById("home-score-btn3")
let guestScoreBtn1=document.getElementById("guest-score-btn1")
let guestScoreBtn2=document.getElementById("guest-score-btn2")
let guestScoreBtn3=document.getElementById("guest-score-btn3")


let homeScoreEl =document.getElementById("home-score")
let homeScore = 0
function homeAdd1(){
    homeScore += 1
    homeScoreEl.textContent = homeScore
}
function homeAdd2(){
    homeScore += 2
    homeScoreEl.textContent = homeScore
}
function homeAdd3(){
    homeScore += 3
    homeScoreEl.textContent = homeScore
}


let guestScoreEl =document.getElementById("guest-score")
let guestScore = 0
function guestAdd1(){
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

function guestAdd2(){
    guestScore += 2
    guestScoreEl.textContent = guestScore
}
function guestAdd3(){
    guestScore += 3
    guestScoreEl.textContent = guestScore
}




