const selectBox = document.querySelector(".select-box"),
selectBtnX = selectBox.querySelector(".options .playerX"),
selectBtnO = selectBox.querySelector(".options .playerO"),
playBoard = document.querySelector(".play-board"),
players = document.querySelector(".players"),
allBox = document.querySelectorAll("section span"),
resultBox = document.querySelector(".result-box"),
wonText = resultBox.querySelector(".won-text"),
replayBtn = resultBox.querySelector("button");

window.onload = ()=>{
    for (let i = 0; i < allBox.length; i++) {
       allBox[i].setAttribute("onclick", "clickedBox(this)");
    }
}

selectBtnX.onclick = ()=>{
    selectBox.classList.add("hide");
    playBoard.classList.add("show");
}

selectBtnO.onclick = ()=>{ 
    selectBox.classList.add("hide");
    playBoard.classList.add("show");
    players.setAttribute("class", "players active player");
}

let playerXIcon = "fas fa-times",
playerOIcon = "far fa-circle",
playerSign = "SuperHero",
runBot = true;

function clickedBox(element){
    if(players.classList.contains("player")){
        playerSign = "SuperVillain";
        element.innerHTML = `<i style="
        text-shadow: 0 0 5px var(--color2),
        0 0 10px var(--color2), 
        0 0 20px var(--player), 
        0 0 30px var(--player), 
        0 0 40px var(--player), 
        0 0 55px var(--player), 
        0 0 70px var(--player);
        " class="${playerOIcon}"></i>`;
        players.classList.remove("active");
        element.setAttribute("id", playerSign);
    }else{
        element.innerHTML = `<i style="
        text-shadow: 0 0 5px var(--color),
        0 0 10px var(--color), 
        0 0 20px var(--player2), 
        0 0 30px var(--player2), 
        0 0 40px var(--player2), 
        0 0 55px var(--player2), 
        0 0 70px var(--player2);
        "class="${playerXIcon}"></i>`;
        element.setAttribute("id", playerSign);
        players.classList.add("active");
    }
    selectWinner();
    element.style.pointerEvents = "none";
    playBoard.style.pointerEvents = "none";
    let randomTimeDelay = ((Math.random() * 1000) + 200).toFixed();
    setTimeout(()=>{
        bot(runBot);
    }, randomTimeDelay);
}

function bot(){
    let array = [];
    if(runBot){
        playerSign = "SuperVillain";
        for (let i = 0; i < allBox.length; i++) {
            if(allBox[i].childElementCount == 0){
                array.push(i);
            }
        }
        let randomBox = array[Math.floor(Math.random() * array.length)];
        if(array.length > 0){
            if(players.classList.contains("player")){ 
                playerSign = "SuperHero";
                allBox[randomBox].innerHTML = `<i style="
text-shadow: 0 0 5px var(--color),
        0 0 10px var(--color), 
        0 0 20px var(--player2), 
        0 0 30px var(--player2), 
        0 0 40px var(--player2), 
        0 0 55px var(--player2), 
        0 0 70px var(--player2);" class="${playerXIcon}"></i>`;
                allBox[randomBox].setAttribute("id", playerSign);
                players.classList.add("active");
            }else{
                allBox[randomBox].innerHTML = `<i style="
                text-shadow: 0 0 5px var(--color2),
                0 0 10px var(--color2), 
                0 0 20px var(--player), 
                0 0 30px var(--player), 
                0 0 40px var(--player), 
                0 0 55px var(--player), 
                0 0 70px var(--player);" class="${playerOIcon}"></i>`;
                players.classList.remove("active");
                allBox[randomBox].setAttribute("id", playerSign);
            }
            selectWinner();
        }
        allBox[randomBox].style.pointerEvents = "none";
        playBoard.style.pointerEvents = "auto";
        playerSign = "SuperHero";
    }
}

function getIdVal(classname){
    return document.querySelector(".box" + classname).id;
}
function checkIdSign(val1, val2, val3, val4, val5, val6, val7, sign){ 
    if(getIdVal(val1) == sign && getIdVal(val2) == sign && getIdVal(val3) == sign && getIdVal(val4) == sign && getIdVal(val5) == sign && getIdVal(val6) == sign && getIdVal(val7) == sign){
        return true;
    }
}
function selectWinner(){
    if(checkIdSign(1,2,3,4,5,6,7,playerSign) || checkIdSign(8,9,10,11,12,13,14, playerSign) || checkIdSign(15,16,17,18,19,20,21, playerSign) || checkIdSign(22,23,24,25,26,27,28, playerSign) || checkIdSign(29,30,31,32,33,34,35, playerSign) || checkIdSign(36,37,38,39,40,41,42, playerSign) || checkIdSign(43,44,45,46,47,48,49, playerSign) || checkIdSign(1,8,15,22,29,36,43, playerSign) || checkIdSign(2,9,16,23,30,37,44, playerSign) || checkIdSign(3,10,17,24,31,38,45, playerSign) || checkIdSign(4,11,18,25,32,39,46, playerSign) || checkIdSign(5,12,19,26,33,40,47, playerSign) || checkIdSign(6,13,20,27,34,41,48,playerSign) || checkIdSign(7,14,21,28,35,42,49, playerSign) || checkIdSign(1,9,17,25,33,41,49, playerSign) || checkIdSign(7,13,19,25,31,37,43, playerSign)){
        runBot = false;
        bot(runBot);
        setTimeout(()=>{
            resultBox.classList.add("show");
            playBoard.classList.remove("show");
        }, 700);
            wonText.innerHTML = `<div style="color: var(--bg);">Game Over</div><img src= "party-popper.png" height="100px" width="100px" > <img src="trophy.png" height="100px" width="100px"><img src= "party-popper.png" height="100px" width="100px" style="transform: scaleX(-1);" ><br> Player <br><i style="font-weight: bold;color: var(--bg);">${playerSign}</i><br> won the game!`;
            }else{
        if(getIdVal(1) != "" && getIdVal(2) != "" && getIdVal(3) != "" && getIdVal(4) != "" && getIdVal(5) != "" && getIdVal(6) != "" && getIdVal(7) != "" && getIdVal(8) != "" && getIdVal(9) != ""){
            runBot = false;
            bot(runBot);
            setTimeout(()=>{
                resultBox.classList.add("show");
                playBoard.classList.remove("show");
            }, 700);
               wonText.innerHTML = `<div style="color: var(--bg);">Game Over</div> <img src=sad.png height="100px" width="100px;"><br>Match has been drawn!`;
        }
    }
}

replayBtn.onclick = ()=>{
    window.location.reload();
}


function myFunction() {
  location.href = "index.html";
}


 