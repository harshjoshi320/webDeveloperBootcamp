var p1 = 0, p2 = 0, winScore = 5;

var p1Score = document.getElementById("p1");
var p2Score = document.getElementById("p2");
var maxBoard = document.getElementById("max");
var btnP1 = document.getElementById("btnP1");
var btnP2 = document.getElementById("btnP2");
var reset = document.getElementById("reset");
var scoreSelect = document.querySelector("input");

refreshBoards();

btnP1.addEventListener("click",function(){
    if (p1 != winScore && p2 != winScore){
        p1+=1;
        refreshBoards();
    }
});

btnP2.addEventListener("click",function(){
    if (p1 != winScore && p2 != winScore){
        p2+=1;
        refreshBoards();
    }
});

reset.addEventListener("click",function(){
    p1 = 0;
    p2 = 0;
    winScore = 5;
    refreshBoards();
});

scoreSelect.addEventListener("change", function(){
    winScore = scoreSelect.valueAsNumber;
    p1 = 0;
    p2 = 0;
    refreshBoards();
})

function refreshBoards() {
    p1Score.innerHTML = p1;
    p2Score.innerHTML = p2;
    if (p1 == winScore){
        p1Score.classList.add('win');
    }
    else {   
        p1Score.classList.remove('win');
    }
    if (p2 == winScore){
        p2Score.classList.add('win');
    }
    else {   
        p2Score.classList.remove('win');
    }

    maxBoard.innerHTML = winScore;
    scoreSelect.value = winScore;
}