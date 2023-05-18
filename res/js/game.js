let isPlaying = false;
let player = 0;
let playerColors = ["#FF0000" , "#0000FF"];

let playerLabel = document.getElementById("player");

let gameSize = document.getElementById("gameSize");
let playerOneColor = document.getElementById("playerOneColor");
let playerTwoColor = document.getElementById("playerTwoColor");
let winAmount = document.getElementById("winAmount");

function StartGame()
{
    if (isPlaying && !confirm("Do you want to start a new game?"))
        return;

    let size = gameSize.value;
    playerColors[0] = playerOneColor.value;
    playerColors[1] = playerTwoColor.value;


    GenerateGameGrid(size)
    ChooseStarter();
    isPlaying = true;
}

function GameButton(element)
{
    let x = element.getAttribute("x");
    let y = element.getAttribute("y");
    let state = element.getAttribute("state");

    console.log(`${x}:${y} | ${state}`);

    if (state!="0") return;
    
    element.setAttribute("state",player); // OCCUPING TO CURRENT PLAYER
    element.style.backgroundColor = playerColors[player-1]; // VISUALISING IT

    RefreshPlayerState();
}

function ChooseStarter()
{
    player = Math.floor(Math.random() * 2) + 1;
    RefreshPlayerState();
}

function RefreshPlayerState()
{
    player = player == 1 ? 2 : 1;
    playerLabel.innerText = `PLAYER: ${player}`;
    playerLabel.style.color = playerColors[player-1];
}

function RefreshWinAmount()
{
    winAmount.min = gameSize.value;
    winAmount.value = gameSize.value;
}