homeTotal = 0
guestTotal = 0

homeScore = document.getElementById("home-score")
guestScore = document.getElementById("guest-score")





function addOne(){
    homeTotal = homeTotal + 1
    homeScore.textContent = homeTotal
}
function addTwo(){
    homeTotal = homeTotal + 2
    homeScore.textContent = homeTotal
}
function addThree(){
    homeTotal = homeTotal + 3
    homeScore.textContent = homeTotal
}



function guestOne(){
    guestTotal = guestTotal + 1
    guestScore.textContent = guestTotal
}
function guestTwo(){
    guestTotal = guestTotal + 2
    guestScore.textContent = guestTotal
}
function guestThree(){
    guestTotal = guestTotal + 3
    guestScore.textContent = guestTotal
}