
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
        0 0 70px var(--player);"
        class="${playerOIcon}"></i>`;
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
        0 0 70px var(--player2);"
         class="${playerXIcon}"></i>`;
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
function checkIdSign(val1, val2, val3, sign){ 
    if(getIdVal(val1) == sign && getIdVal(val2) == sign && getIdVal(val3) == sign){
        return true;
    }
}
function selectWinner(){
    if(checkIdSign(1,2,3,playerSign) || checkIdSign(4,5,6, playerSign) || checkIdSign(7,8,9, playerSign) || checkIdSign(1,4,7, playerSign) || checkIdSign(2,5,8, playerSign) || checkIdSign(3,6,9, playerSign) || checkIdSign(1,5,9, playerSign) || checkIdSign(3,5,7, playerSign)){
        runBot = false;
        bot(runBot);
        setTimeout(()=>{
            resultBox.classList.add("show");
            playBoard.classList.remove("show");
        }, 700);
        wonText.innerHTML = `<div style="color: var(--bg);">Game Over</div><img src= "party-popper.png" height="100px" width="100px" > <img src="trophy.png" height="100px" width="100px"><img src= "party-popper.png" height="100px" width="100px" style="transform: scaleX(-1);" ><br> Player <p>${playerSign}</p> won the game!`;
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

 function page1() {
 location.href = "index1.html";
 }
 
 function page2() {
 location.href = "index2.html";
 }
 
 function page3() {
 location.href = "index3.html";
 }
 

 
 
 
